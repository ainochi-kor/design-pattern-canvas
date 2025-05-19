import {
  AbstractGrimpanFactory,
  ChromeGrimpanFactory,
} from "./GrimpanFactory.js";
import ChromeGrimpan from "./ChromeGrimpan.js";
import IEGrimpan from "./IEGrimpan.js";

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
  const factory = ChromeGrimpanFactory;
  const grimpan = factory.createGrimpan();
  const grimpanMenu = factory.createGrimpanMenu(grimpan);
  const grimmpanHistory = factory.createGrimpanHistory(grimpan);
  grimpan.initialize();
  grimpanMenu.initialize();
  grimmpanHistory.initialize();
}

main();
