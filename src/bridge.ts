import Eventemitter from 'eventemitter3';

export const appName = 'ideabosque';

export type EventTypes = 'get-position';

export type EventResult = {
  type: string;
  data: string;
}

export type Listener = (data: Record<string, any>) => void;

export class IframeBridge {
  constructor(el: HTMLIFrameElement) {
    this.iframe = el;
    this.init();
  }

  private iframe: HTMLIFrameElement;
  private event = new Eventemitter<EventTypes>();

  get win() {
    return this.iframe.contentWindow!;
  }

  private init = () => {
    window.addEventListener('message', this.onMessage);
  }

  public sendMessage = (evntType: EventTypes, data: Record<string, any>) => {
    const json = JSON.stringify(data);
    const type = `${appName}-${evntType}`;
    this.win.postMessage({ type, data: json }, '*');
  }

  public on = (type: EventTypes, listener: Listener) => {
    this.event.on(type, listener);
    return this.event;
  }

  private onMessage = (e: MessageEvent<EventResult>) => {
    const type = e.data.type;
    let data = e.data.data;
    if (type?.includes?.(appName)) {
      const eventType = type.replace(`${appName}-`, '');
      if (data) data = JSON.parse(data);
      this.event.emit(eventType as EventTypes, data);
    }
  }
}
