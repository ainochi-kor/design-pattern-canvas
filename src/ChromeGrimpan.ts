import Grimpan from "./AbstractGrimpan";

const GRIMPAN_CONSTRUCTOR_SIMBOL = Symbol("Grimpan");

class ChromeGrimpan extends Grimpan {
  protected static override instance: ChromeGrimpan;

  override initialize(): void {
    throw new Error("Method not implemented.");
  }

  static override getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(
        document.querySelector("#canvas") as HTMLElement
      );
    }
    return this.instance;
  }
}

export default ChromeGrimpan;
