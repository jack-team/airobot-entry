import styles from './styles.css?raw';
import { IframeBridge, appName } from './bridge';
import { getElementSize, getLocation, qs } from './utils';

declare global {
  interface Window {
    initIdeabosqueAi: () => void;
    removeIdeabosqueAi: () => void;
  }
}

let airobotUrl = 'https://shopify-ai-chat.pages.dev';

/**
 * 创建 styles
*/
const createStyles = () => {
  const head = document.querySelector('head');
  const el = document.createElement('style');
  el.setAttribute('data-role', `${appName}-style`);
  el.innerHTML = styles;
  head?.appendChild(el);
}

const getCurrentScript = () => {
  const s = `script[data-role='${appName}-ai']`;
  return document.querySelector(s);
}

const createIframe = (container: Element, script: Element) => {
  createStyles();
  const size = getElementSize(script);
  const $el = document.createElement('iframe');
  const url = script.getAttribute('iframe-url');
  const agent = script.getAttribute('agent');
  const userId = script.getAttribute('userId');
  const question = script.getAttribute('question');
  const endpointId = script.getAttribute('endpoint-id');
  const coordination = script.getAttribute('coordination');
  const agentName = script.getAttribute('agent-name') || ''

  if (url) airobotUrl = url;

  const queryStr = qs.stringify({
    agent,
    userId,
    question,
    agentName,
    endpointId,
    coordination,
    mode: 'preview',
  });

  $el.src = `${airobotUrl}?${queryStr}`;
  $el.className = `${appName}-ai-iframe`;
  $el.style.width = size.width + 'px';
  $el.style.height = size.height + 'px';
  $el.setAttribute('frameborder', '0');
  $el.setAttribute('allow', 'geolocation');
  container.appendChild($el);
  return $el;
}

const requestPosition = (el: HTMLIFrameElement) => {
  const bridge = new IframeBridge(el);
  // 接受到定位请求
  bridge.on('get-position', async () => {
    let success = true;
    let result = {};
    try {
      result = await getLocation();
    } catch (err) {
      success = false;
    }
    bridge.sendMessage('get-position', {
      ...result, success
    });
  });
}

(() => {
  let created = false;
  let $container: HTMLDivElement | null = null;
  const $script = getCurrentScript();
  const openType = $script?.getAttribute('open-type') || 'screen';

  // 创建 ai 主体
  const createAiContent = (ele: HTMLDivElement | null) => {
    if (!ele || created) return;
    // 创建一个iframe， 并设置属性
    requestPosition(createIframe(ele, $script!))
    created = true;
  }

  const createCloseButton = () => {
    const $closeButton = document.createElement('div');
    $closeButton.className = `${appName}-ai-window-close`;
    return $closeButton;
  }

  // 创建一个抽屉
  const createDrawer = (open = true) => {
    const $body = document.body;
    $container = document.createElement('div');
    const $drawerBody = document.createElement('div');
    const $drawerSwitch = document.createElement('div');
    const $drawerContent = document.createElement('div');
    const $closeButton = createCloseButton();
    const containerClassName = `${appName}-ai-drawer`;
    const bodyClassName = `${appName}-ai-drawer-body`;
    const switchClassName = `${appName}-ai-drawer-switch`;
    const openClassName = `${appName}-ai-drawer-open`;
    $container.className = containerClassName;
    $container.setAttribute('popover', 'manual');
    $drawerBody.className = bodyClassName;
    $drawerSwitch.className = switchClassName;
    $container.appendChild($drawerBody);
    $container.appendChild($drawerSwitch);
    $drawerBody.appendChild($closeButton);
    $drawerSwitch.appendChild($drawerContent);
    $body.appendChild($container);
    createAiContent($drawerBody);

    if (open) {
      $container?.showPopover?.();
      $container.classList.add(openClassName);
    }

    $drawerSwitch.addEventListener('click', () => {
      $container?.classList.toggle(openClassName);
    });

    $closeButton.addEventListener('click', () => {
      $container?.classList.toggle(openClassName);
    });
  }

  // 兼容老版本，直接显示
  if (openType === 'screen') {
    const selector = $script?.getAttribute('selector');

    if (selector) {
      $container = document.querySelector(selector);
      createAiContent($container)
    };
  }

  // 初始化 ai
  window.initIdeabosqueAi = (open = true) => {
    if (openType !== 'drawer' || created) return;
    createDrawer(open);
  }

  // 移除 ai
  window.removeIdeabosqueAi = () => {
    if (openType !== 'drawer') return;
    if ($container && created) {
      document.body.removeChild($container);
      created = false;
    }
  }
})();