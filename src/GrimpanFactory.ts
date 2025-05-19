import Grimpan from "./AbstractGrimpan";
import ChromeGrimpan from "./ChromeGrimpan";
import { ChromeGrimpanHistory, IEGrimpanHistory } from "./GrimpanHistory";
import { ChromeGrimpanMenu, IEGrimpanMenu } from "./GrimpanMenu";
import IEGrimpan from "./IEGrimpan";

export abstract class AbstractGrimpanFactory {
  static createGrimpan() {
    throw new Error("createGrimpan 메서드를 구현하세요.");
  }

  static createGrimpanMenu(grimpan: Grimpan) {
    throw new Error("createGrimpanMenu 메서드를 구현하세요.");
  }

  static createGrimpanHistory(grimpan: Grimpan) {
    throw new Error("createGrimpanHistory 메서드를 구현하세요.");
  }
}

export class ChromeGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return ChromeGrimpan.getInstance();
  }

  static override createGrimpanMenu(grimpan: ChromeGrimpan) {
    return ChromeGrimpanMenu.getInstance(grimpan);
  }

  static override createGrimpanHistory(grimpan: ChromeGrimpan) {
    return ChromeGrimpanHistory.getInstance(grimpan);
  }
}

export class IEGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return IEGrimpan.getInstance();
  }

  static override createGrimpanMenu(grimpan: IEGrimpan) {
    return IEGrimpanMenu.getInstance(grimpan);
  }

  static override createGrimpanHistory(grimpan: IEGrimpan) {
    return IEGrimpanHistory.getInstance(grimpan);
  }
}
