import qs from 'qs';
import svg from './assets/chat.svg';
import stylesStr from './styles.css?raw';

type InitChatBotOptions = {
  selector?: string;
  width?: string;
  height?: string;
  urlQuery?: Record<string, any>;
}

//@ts-ignore
window.initChatBot = (($doc) => {
  const version = 'v2';
  const $body = $doc.body;
  const getClsName = (name: string) => ['idea-bosque', name].join('-');
  const aichatUrl = 'https://ideabosque-ai-chat.pages.dev';
  const showClassName = getClsName('modal-open');

  return (input?: InitChatBotOptions) => {
    const selector = input?.selector;
    const width = input?.width ?? '420px';
    const height = input?.height ?? 'calc(100vh - 48px)';

    // 获取入口
    const container = (() => {
      if (selector) {
        return document.querySelector(selector);
      } else {
        const element = $doc.createElement('div');
        element.classList.add(getClsName('entry'));
        return element;
      }
    })();

    function createStyles() {
      const style = $doc.createElement('style');
      style.innerHTML = stylesStr;
      return style;
    }

    function addGoogleFonts() {
      const link = $doc.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Oswald:wght@200..700&display=swap';
      return link;
    }

    function createEntry() {
      const btn = $doc.createElement('div');
      const img = $doc.createElement('img');
      img.src = svg;
      btn.appendChild(img);
      btn.classList.add(getClsName('btn'));
      return btn;
    }

    const toggleModal = (el: Element) => {
      el.classList.toggle(showClassName);
    }

    function createLoading() {
      const el = $doc.createElement('div');
      el.innerHTML = '<span></span><span></span><span></span>';
      el.classList.add(getClsName('iframe-loading'));
      return el;
    }

    function createIframe() {
      const query = qs.stringify({
        ...input?.urlQuery,
        mode: 'iframe',
        version
      });

      const iframe = $doc.createElement('iframe');
      iframe.classList.add(getClsName('iframe'));
      iframe.src = `${aichatUrl}?${query}`;
      iframe.setAttribute('frameBorder', '0');
      return iframe;
    }

    function createModal() {
      const modal = $doc.createElement('div');
      const loading = createLoading();
      const iframe = createIframe();
      modal.appendChild(loading);
      modal.appendChild(iframe);
      modal.classList.add(getClsName('modal'));

      modal.style.width = width;
      modal.style.height = height;
      iframe.onload = () => modal.removeChild(loading);
      return modal;
    }

    function createPageHeader(el: Element) {
      const title = $doc.createElement('div');
      const desc = $doc.createElement('div');
      title.classList.add(getClsName('page-title'));
      desc.classList.add(getClsName('page-desc'));
      title.innerText = 'WE ARE HERE TO HELP';
      desc.innerText = 'Please use our chat window below to help you onboard or schedule an appointment.';
      el.appendChild(title);
      el.appendChild(desc);
    }

    function createPage() {
      const wrapper = $doc.createElement('div');
      wrapper.classList.add(getClsName('page-wrapper'));
      createPageHeader(wrapper);
      const iframe = createIframe();
      wrapper.style.width = width;
      iframe.style.height = height;
      wrapper.appendChild(iframe);
      return wrapper;
    }

    function createCloseBtn() {
      const btn = $doc.createElement('div');
      btn.classList.add(getClsName('modal-close'));
      return btn;
    }

    function openModal(el: Element) {
      //@ts-ignore
      if (!openModal.created) {
        //@ts-ignore
        openModal.created = true;
        const modal = createModal();
        const closeBtn = createCloseBtn();
        closeBtn.onclick = () => toggleModal(el);
        modal.appendChild(closeBtn);
        el.appendChild(modal);
      }
      requestAnimationFrame(() => toggleModal(el));
    }

    if (container) {
      // 创建样式
      if (selector) {
        const fonts = addGoogleFonts();
        container.appendChild(fonts);
        fonts.onload = () => {
          const page = createPage();
          container.appendChild(page);
        }
      } else {
        const entry = createEntry();
        container.appendChild(entry);
        $body.appendChild(container);
        entry.onclick = () => openModal(container);
      }
      const styles = createStyles();
      container.appendChild(styles);
    }
  }
})(document);
