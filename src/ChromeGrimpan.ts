const GRIMPAN_CONSTRUCTOR_SIMBOL = Symbol("Grimpan");

class ChromeGrimpan {
  private static instance: ChromeGrimpan | null = null;

  private constructor(canvas: HTMLElement | null, symbol: symbol) {
    if (symbol !== GRIMPAN_CONSTRUCTOR_SIMBOL) {
      throw new Error("new를 통해 생성할 수 없습니다.");
    }
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas 엘리먼트를 입력하세요.");
    }
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(
        document.querySelector("#canvas") as HTMLElement,
        GRIMPAN_CONSTRUCTOR_SIMBOL
      );
    }
    return this.instance;
  }
}

export default ChromeGrimpan;
