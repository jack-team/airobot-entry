import qs from 'qs';
import svg from './assets/chat.svg';
import stylesStr from './styles.css?raw';

//@ts-ignore
window.initChatBot = (($doc) => {
  const version = 'v2';
  const showClassName = 'idea-bosque-modal-open';
  const aichatUrl = 'https://airobot.pages.dev';

  function createStyles() {
    const style = $doc.createElement('style');
    style.innerHTML = stylesStr;
    return style;
  }

  function createEntry() {
    const btn = $doc.createElement('div');
    const img = $doc.createElement('img');
    img.src = svg;
    btn.appendChild(img);
    btn.classList.add('idea-bosque-btn');
    return btn;
  }

  const toggleModal = (el: HTMLDivElement) => {
    el.classList.toggle(showClassName);
  }

  function createLoading() {
    const el = $doc.createElement('div');
    el.innerHTML = '<span></span><span></span><span></span>';
    el.classList.add('idea-bosque-iframe-loading');
    return el;
  }

  function createIframe(params: Record<string, any>) {
    const query = qs.stringify({
      ...params,
      version,
      'skip-auth': 'true'
    });

    const iframe = $doc.createElement('iframe');
    iframe.src = `${aichatUrl}?${query}`;
    iframe.setAttribute('frameBorder', '0');
    return iframe;
  }

  function createModal(params: Record<string, any>) {
    const modal = $doc.createElement('div');
    const loading = createLoading();
    const iframe = createIframe(params);
    modal.appendChild(loading);
    modal.appendChild(iframe);
    modal.classList.add('idea-bosque-modal');
    iframe.onload = () => modal.removeChild(loading);
    return modal;
  }

  function createCloseBtn() {
    const btn = $doc.createElement('div');
    btn.classList.add('idea-bosque-modal-close');
    return btn;
  }

  function openModal(el: HTMLDivElement, params: Record<string, any> = {}) {
    //@ts-ignore
    if (!openModal.created) {
      //@ts-ignore
      openModal.created = true;
      const modal = createModal(params);
      const closeBtn = createCloseBtn();
      closeBtn.onclick = () => toggleModal(el);
      modal.appendChild(closeBtn);
      el.appendChild(modal);
    }
    requestAnimationFrame(() => toggleModal(el));
  }

  return (params?: Record<string, any>) => {
    const $body = $doc.body;
    const el = $doc.createElement('div');
    el.classList.add('idea-bosque-entry');

    // 创建样式
    const styles = createStyles();
    el.appendChild(styles);

    // 创建入口元素
    const entry = createEntry();
    el.appendChild(entry);

    // 点击按钮
    entry.onclick = () => openModal(el, params);
    $body.appendChild(el);
  }

})(document);
