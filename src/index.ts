import AbstractGrimpanFactory from "./AbstractGrimpanFactory.js";
import ChromeGrimpan from "./ChromeGrimpan.js";
import IEGrimpan from "./IEGrimpan.js";

class ChromeGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return ChromeGrimpan.getInstance();
  }
}

class IEGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return IEGrimpan.getInstance();
  }
}

function grimpanFactory(type: string) {
  if (type === "ie") {
    return IEGrimpan.getInstance();
  }
  if (type === "chrome") {
    return ChromeGrimpan.getInstance();
  }
  throw new Error("지원하지 않는 브라우저입니다.");
}

function main() {
  const grimpan = ChromeGrimpanFactory.createGrimpan();
  grimpan.initialize();
  grimpan.initializeMenu();
}

main();
