import MainHandler from "../view";
import { A } from "../views/a";
import { B } from "../views/b";

export interface Handlers {
  init(): void;
}

class EventTriggers {
  constructor(handlers: Handlers[]) {
    for (const handler of handlers) {
      handler.init();
    }
  }
}

export const eventTriggers = new EventTriggers([
  new MainHandler(),
  new A(),
  new B(),
]);