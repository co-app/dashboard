import { Handlers } from "./triggers";

export default class MainHandler implements Handlers {
  private cardsWrapper: HTMLDivElement;
  private overlay: HTMLDivElement;

  constructor() {
    this.cardsWrapper = document.getElementById(
      "main-wrapper"
    ) as HTMLDivElement;
    this.overlay = document.querySelector("overlay") as HTMLDivElement;
    this.init();
  }

  init() {
    this.setEventListener();
  }

  private setEventListener() {
  }

  private handleMouseEvent = (e: MouseEvent): void => {
   
  };
}