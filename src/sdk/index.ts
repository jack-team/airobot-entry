import type { AirobotSdkOptions } from './types';
import { createDom, EventDelegation, qs } from './helper';
import styles from './styles.module.less';
import closeImg from '../assets/close.svg';
import avatarImg from '../assets/avatar.svg';
import sendImg from '../assets/send.svg';

const baseAiUrl = import.meta.env.ENV_API_CHAT_URL;
const fontUrl = 'https://fonts.googleapis.com/css2?family=Hind&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap';

class AirobotSdk {
  private options: AirobotSdkOptions;
  // 是否已经初始化
  private inited = false;
  // 根节点
  private $root = document.body;
  private $head = document.head;
  private event?: EventDelegation;
  // 容器节点
  private $container?: HTMLElement
  private $drawer?: HTMLElement;
  private $drawerContent?: HTMLElement;
  private $chatWindow?: HTMLElement;
  private $bubble?: HTMLElement;
  private $fontLink?: HTMLLinkElement;

  constructor(options: AirobotSdkOptions) {
    this.options = options;
    this.createRoot();
  }

  private createGoogleFont = () => {
    this.$fontLink = createDom<HTMLLinkElement>('link', {
      container: this.$head
    });
    this.$fontLink.href = fontUrl;
    this.$fontLink.setAttribute('rel', "stylesheet");
  }

  private removeGoogleFont = () => {
    this.$head.removeChild(this.$fontLink!);
  }

  // 创建容器，类型为popover
  private createContainer = () => {
    const el = createDom('div', {
      container: this.$root,
      className: styles.airobot_container
    });
    el.setAttribute('popover', 'manual');
    // 事件注册
    this.event = new EventDelegation(el);
    this.$container = el;
    return el;
  }

  // 创建抽屉
  private createDrawer = () => {
    this.$drawer = createDom('div', {
      container: this.$container!,
      className: styles.drawer_container
    });

    this.$drawerContent = createDom('div', {
      container: this.$drawer,
      className: styles.drawer_content
    });

    // 设置窗口宽度
    const width = this.options?.width ?? 560;
    this.$drawerContent.style.width = `${width}px`;

    return this.$drawerContent;
  }

  // 创建聊天窗口
  private createChatWindow = () => {
    const {
      width,
      aiChatUrl = baseAiUrl,
      ...rest
    } = this.options;

    const $window = createDom('div', {
      container: this.$drawerContent!,
      className: styles.window_conatiner
    });

    const $review = createDom('iframe', {
      container: $window,
      className: styles.chatbot_window
    });

    // 创建控制开关
    const $switch = createDom('img', {
      container: $window,
      className: styles.window_switch
    });

    const query = qs.stringify({ ...rest, mode: 'review' });
    const reviewUrl = aiChatUrl + '?' + query;

    $switch.setAttribute('src', closeImg);
    $review.setAttribute('src', reviewUrl);
    // 开关绑定点击事件
    this.event?.click($switch, this.closeWindow);
    this.$chatWindow = $window;
  }

  //创建悬浮气泡
  private createFixedBubble = () => {
    this.$bubble = createDom('div', {
      container: this.$container!,
      className: styles.fixed_bubble
    });

    const avatar = createDom('img', {
      container: this.$bubble,
      className: styles.bubble_avatar
    });

    const main = createDom('div', {
      container: this.$bubble,
      className: styles.bubble_main
    })

    const content = createDom('div', {
      container: main,
      className: styles.bubble_content
    })

    const title = createDom('div', {
      container: content,
      className: styles.bubble_title
    });

    title.innerText = 'Credit Agent';

    const desc = createDom('div', {
      container: content,
      className: styles.bubble_desc
    });

    desc.innerText = 'Get Net 30 at checkout';

    const sendBtn = createDom('img', {
      container: main,
      className: styles.bubble_send
    });

    avatar.setAttribute('src', avatarImg);
    sendBtn.setAttribute('src', sendImg);

    this.event?.click(avatar, this.toggleBubble);
    this.event?.click(sendBtn, this.openWindow);
  }

  private toggleBubble = () => {
    this.$bubble?.classList.toggle(styles.bubble_expand);
  }

  // 创建骨架
  private createRoot = () => {
    this.createGoogleFont();
    // 先创建容器
    this.createContainer();
    this.createDrawer();
    this.createFixedBubble();
  }

  private showContainer = () => {
    this.$container?.showPopover();
    this.$container?.classList.add(styles.open_airobot);
  }

  private checkInit = async () => {
    if (!this.inited) Promise.reject(
      new Error('Not initialized, please execute the init method first!')
    );
  }

  // 打开抽屉
  private openDrawer = async () => {
    await this.checkInit();
    this.$drawer?.classList.add(styles.open_drawer);
    this.$bubble?.classList.add(styles.hide_bubble);
    this.expandBubble();
  }

  // ----------------公开方法-------------------
  // 是否直接打开 window
  public init = () => {
    if (this.inited) return;
    this.inited = true;
    this.showContainer();
    return this;
  }

  // 展开气泡
  public expandBubble = async () => {
    await this.checkInit();
    this.$bubble?.classList.add(styles.bubble_expand);
  }

  // 折叠气泡
  public collapseBubble = async () => {
    await this.checkInit();
    this.$bubble?.classList.remove(styles.bubble_expand);
  }

  //打开窗口
  public openWindow = () => {
    if (!this.$chatWindow) this.createChatWindow();
    requestAnimationFrame(this.openDrawer);
  }

  // 关闭窗口
  public closeWindow = async () => {
    await this.checkInit();
    this.$drawer?.classList.remove(styles.open_drawer);
    this.$bubble?.classList.remove(styles.hide_bubble);
  }

  // 销毁
  public destroy = () => {
    this.event?.destroy();
    this.removeGoogleFont();
    this.$root.removeChild(this.$container!);
  }
}

export { AirobotSdk }

export default AirobotSdk