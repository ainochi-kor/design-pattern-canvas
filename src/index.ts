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
  grimpanFactory("ie");
  grimpanFactory("chrome");
}

main();
