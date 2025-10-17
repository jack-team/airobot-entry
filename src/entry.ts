import styles from './styles.css?raw';
import { FontUrl, AiChatUrl } from './const';
import { IframeBridge, appName } from './bridge';
import { getElementSize, getLocation, qs } from './utils';

declare global {
  interface Window {
    initIdeabosqueAi: () => void;
    removeIdeabosqueAi: () => void;
  }
}

let airobotUrl = AiChatUrl;
const stylesDataRole = `${appName}-style`;
const googleFontDataRole = `${appName}-google-font`;

const createGoogleFontLink = () => {
  return new Promise((resovle) => {
    const head = document.querySelector('head');
    const link = document.createElement('link');
    link.onload = () => resovle(undefined);
    link.setAttribute('rel', "stylesheet");
    link.setAttribute('data-role', googleFontDataRole);
    link.href = FontUrl;
    head?.appendChild(link);
  });
}

/**
 * 创建 styles
*/
const createStyles = () => {
  const head = document.querySelector('head');
  const el = document.createElement('style');
  el.setAttribute('data-role', stylesDataRole);
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

  const createCloseButton = () => {
    const $closeButton = document.createElement('div');
    const $closeButtonContent = document.createElement('div');
    $closeButton.className = `${appName}-ai-window-close`;
    $closeButton.appendChild($closeButtonContent);
    return $closeButton;
  }

  const createOpenSwitch = () => {
    const $drawerSwitch = document.createElement('div');
    const $drawerIcon = document.createElement('div');
    const $drawerContent = document.createElement('div');
    const switchClassName = `${appName}-ai-drawer-switch`;
    $drawerIcon.className = `${appName}-ai-drawer-switch-icon`;
    $drawerContent.className = `${appName}-ai-drawer-switch-content`;
    $drawerSwitch.className = switchClassName;
    $drawerSwitch.appendChild($drawerIcon);
    $drawerSwitch.appendChild($drawerContent);
    $drawerContent.innerHTML = `
      <div class="${appName}-ai-drawer-switch-title">B2B Chat Agent</div>
      <div class="${appName}-ai-drawer-switch-desc">Get Net 30 at checkout</div>
    `;
    return $drawerSwitch;
  }

  // 创建一个抽屉
  const createDrawer = async (open = true) => {
    const $body = document.body;
    $container = document.createElement('div');
    const $drawerBody = document.createElement('div');
    const $closeButton = createCloseButton();
    const $drawerSwitch = createOpenSwitch();
    const containerClassName = `${appName}-ai-drawer`;
    const bodyClassName = `${appName}-ai-drawer-body`;
    const openClassName = `${appName}-ai-drawer-open`;
    $container.className = containerClassName;
    $container.setAttribute('popover', 'manual');
    $drawerBody.className = bodyClassName;

    $container.appendChild($drawerBody);
    $container.appendChild($drawerSwitch);
    $drawerBody.appendChild($closeButton);
    $body.appendChild($container);
    // 创建iframe
    requestPosition(createIframe($drawerBody, $script!))

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

  const getStylesElement = () => {
    return document.querySelector(`style[data-role="${stylesDataRole}"]`);
  }

  const getGoogleFontLinkElement = () => {
    return document.querySelector(`link[data-role="${googleFontDataRole}"]`);
  }

  // 初始化 ai
  window.initIdeabosqueAi = async (open = true) => {
    if (created) return;
    createGoogleFontLink();
    createDrawer(open);
    created = true;
  }

  // 移除 ai
  window.removeIdeabosqueAi = () => {
    if (!created) return;
    const $body = document.body;
    const $head = document.head;

    const eles = [
      getStylesElement(),
      getGoogleFontLinkElement()
    ];

    if ($container) {
      $body.removeChild($container);
    }

    for (const el of eles) {
      if (el) $head.removeChild(el);
    }
    created = false;
  }
})();