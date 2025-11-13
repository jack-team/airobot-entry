import EventEmitter from "eventemitter3";

type CreateDomOptions = {
  container: HTMLElement;
  className?: string;
}

type ListenerType = (e: MouseEvent) => void;

// 创建 dom 元素
export function createDom<T = HTMLElement>(tag: string, opts: CreateDomOptions) {
  const { container, className: cls } = opts;
  const el = document.createElement(tag);
  if (cls) el.classList.add(cls);
  container.appendChild(el);
  return el as T;
}

// 事件代理
export class EventDelegation {
  private ee = new EventEmitter<'click'>();
  private $el: HTMLElement;
  constructor(container: HTMLElement) {
    this.$el = container;
    this.init();
  }

  private init = () => {
    this.$el.addEventListener('click', this.onListener);
  }

  private onListener = (e: MouseEvent) => {
    this.ee.emit('click', e);
  }

  public click = (source: HTMLElement, listener: ListenerType) => {
    this.ee.on('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (source.contains(target)) listener(e);
    })
  }

  public destroy = () => {
    this.ee.off('click');
    this.$el.removeEventListener('click', this.onListener);
  }
}

export const qs = {
  stringify: (obj: Record<string, any>) => {
    const keys = Object.keys(obj);
    return keys.map(key => `${key}=${obj[key]}`).join('&');
  }
}