import styles from './styles.css?raw';

const $doc = document;
const libName = 'ideabosque';
const airobotUrl = 'http://localhost:5173';

const Events = {
  GET_POSITION: `${libName}-get-position`
}

const docLoad = (listener: () => void) => {
  document.addEventListener('DOMContentLoaded', listener);
};

const createStyles = () => {
  const head = document.querySelector('head');
  const el = document.createElement('style');
  el.setAttribute('data-role', `${libName}-style`);
  el.innerHTML = styles;
  head?.appendChild(el);
}

const getElSize = (el: Element) => {
  const width = el.getAttribute('width') || 640;
  const height = el.getAttribute('height') || 600;
  return { width, height };
}

const getCurrentScript = () => {
  const s = `script[data-role='${libName}-ai']`;
  return $doc.querySelector(s);
}

const createListenMessage = (iframe: HTMLIFrameElement) => {

  const sendMessage = (data: Record<string, any>) => {
    iframe.contentWindow!.postMessage({
      type: Events.GET_POSITION,
      data: JSON.stringify(data)
    }, '*');
  }

  window.addEventListener('message', (evt) => {
    switch (evt.data.type) {
      case Events.GET_POSITION: {
        const l = window.navigator.geolocation;
        l.getCurrentPosition((result) => {
          sendMessage({
            ...result.coords.toJSON(),
            success: true
          });
        }, async function error() {
          sendMessage({ success: false });
        });
        break;
      }
    }
  });
}

docLoad(() => {
  // 创建 style 标签
  createStyles();

  // 获取
  const $script = getCurrentScript();

  if (!$script) {
    return;
  }

  const selector = $script.getAttribute('selector');
  const $container = $doc.querySelector(selector!);

  if (!$container) {
    return;
  }

  const size = getElSize($script);

  // 创建一个iframe， 并设置属性
  const iframe = document.createElement('iframe');
  $container.appendChild(iframe);
  iframe.src = `${airobotUrl}?mode=iframe`;
  iframe.style.width = size.width + 'px';
  iframe.style.height = size.height + 'px';
  iframe.setAttribute('frameborder', '0');
  iframe.classList.add(`${libName}-iframe`);
  createListenMessage(iframe);
});