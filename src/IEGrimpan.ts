import Grimpan from "./AbstractGrimpan.js";

const GRIMPAN_CONSTRUCTOR_SIMBOL = Symbol("Grimpan");

class IEGrimpan extends Grimpan {
  protected static override instance: IEGrimpan;

  override initialize(): void {
    throw new Error("Method not implemented.");
  }
  override initializeMenu(): void {
    throw new Error("Method not implemented.");
  }

  static override getInstance() {
    if (!this.instance) {
      this.instance = new IEGrimpan(
        document.querySelector("#canvas") as HTMLElement
      );
    }
    return this.instance;
  }
}

export default IEGrimpan;
