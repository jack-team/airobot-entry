import styles from './styles.css?raw';
import { IframeBridge, appName } from './bridge';
import { documentLoaded, getElementSize, getLocation } from './utils';

let airobotUrl = 'https://ideabosque-ai-chat.pages.dev';

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
  container.appendChild($el);
  if (url) airobotUrl = url;
  $el.src = `${airobotUrl}?mode=iframe`;
  $el.className = `${appName}-ai-iframe`;
  $el.style.width = size.width + 'px';
  $el.style.height = size.height + 'px';
  $el.setAttribute('frameborder', '0');
  return $el;
}

documentLoaded(() => {
  const $script = getCurrentScript();
  const selector = $script?.getAttribute('selector');
  const $container = document.querySelector(selector!);

  if (!$container) {
    return;
  }

  // 创建一个iframe， 并设置属性
  const $iframe = createIframe($container, $script!);
  const bridge = new IframeBridge($iframe);

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
      ...result,
      success
    });
  });
});