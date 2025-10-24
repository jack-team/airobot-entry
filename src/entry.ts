import styles from './styles.css?raw';
import { FontUrl, AiChatUrl } from './const';
import { IframeBridge, appName } from './bridge';
import { getElementSize, getLocation, qs } from './utils';

type Actions = {
  openWindow: () => void;
  switchExpand: (open: boolean) => void;
}

declare global {
  interface Window {
    initIdeabosqueAi(options: OpenOptions): Actions | undefined;
    removeIdeabosqueAi: () => void;
  }
}

type OpenOptions = {
  openWindow?: boolean;
  openSwitch?: boolean;
  switchExpand?: boolean;
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
    const $drawerContentWrapper = document.createElement('div');
    const $drawerContentWrapperMain = document.createElement('div');
    const $drawerContent = document.createElement('div');
    const $drawerRightBtn = document.createElement('div');

    $drawerSwitch.className = `${appName}-ai-drawer-switch`;
    $drawerIcon.className = `${appName}-ai-drawer-switch-icon`;
    $drawerContent.className = `${appName}-ai-drawer-switch-content`;
    $drawerRightBtn.className = `${appName}-ai-drawer-switch-right-btn`;
    $drawerContentWrapper.className = `${appName}-ai-drawer-switch-content-wrapper`;
    $drawerContentWrapperMain.className = `${appName}-ai-drawer-switch-content-wrapper-main`

    $drawerSwitch.appendChild($drawerIcon);
    $drawerContentWrapper.appendChild($drawerContent);
    $drawerContentWrapperMain.appendChild($drawerContentWrapper);

    $drawerContent.innerHTML = `
      <div class="${appName}-ai-drawer-switch-title">B2B Chat Agent</div>
      <div class="${appName}-ai-drawer-switch-desc">Get Net 30 at checkout</div>
    `;

    $drawerContentWrapper.appendChild($drawerRightBtn);
    $drawerSwitch.appendChild($drawerContentWrapperMain);

    return {
      $drawerIcon,
      $drawerSwitch,
      $drawerRightBtn,
      $drawerContentWrapper,
      $drawerContentWrapperMain
    }
  }

  // 创建一个抽屉
  const createDrawer = (options: OpenOptions) => {
    const $body = document.body;
    const $closeButton = createCloseButton();
    $container = document.createElement('div');

    const $drawerBody = document.createElement('div');
    const $drawerBodyMask = document.createElement('div');
    const openClassName = `${appName}-ai-drawer-open`;
    const switchCloseClass = `${appName}-ai-drawer-switch-close`;
    const { $drawerIcon, $drawerSwitch, $drawerRightBtn } = createOpenSwitch();

    $container.className = `${appName}-ai-drawer`;
    $drawerBody.className = `${appName}-ai-drawer-body`;
    $drawerBodyMask.className = `${appName}-ai-drawer-body-mask`;
    $container.setAttribute('popover', 'manual');

    $container.appendChild($drawerBody);
    $container.appendChild($drawerBodyMask);
    $drawerBody.appendChild($closeButton);

    if (options.openWindow) {
      requestAnimationFrame(() => {
        $container?.classList.add(openClassName);
      });
    }

    // 创建开关
    if (options.openSwitch) {
      // 抽屉开关默认关闭
      if (!options.switchExpand) {
        $drawerSwitch.classList.add(switchCloseClass);
      }
      // 点击抽屉开关
      $drawerRightBtn.addEventListener('click', () => {
        $container?.classList.toggle(openClassName);
      });
      $container.appendChild($drawerSwitch);
    }

    $closeButton.addEventListener('click', () => {
      $container?.classList.toggle(openClassName);
    });

    $drawerIcon.addEventListener('click', () => {
      $drawerSwitch.classList.toggle(switchCloseClass);
    });

    // 创建iframe
    requestPosition(createIframe($drawerBody, $script!));
    $body.appendChild($container);
    $container?.showPopover?.();

    return {
      openWindow: () => {
        $container?.classList.add(openClassName);
      },
      switchExpand: (open = true) => {
        if (!open) {
          $drawerSwitch.classList.add(switchCloseClass);
        } else {
          $drawerSwitch.classList.remove(switchCloseClass);
        }
      }
    }
  }

  const getStylesElement = () => {
    return document.querySelector(`style[data-role="${stylesDataRole}"]`);
  }

  const getGoogleFontLinkElement = () => {
    return document.querySelector(`link[data-role="${googleFontDataRole}"]`);
  }

  // 初始化 ai
  window.initIdeabosqueAi = (options: OpenOptions) => {
    if (created) return;
    created = true;
    createGoogleFontLink();
    return createDrawer(options);
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