interface Btn {
  name?: string;
  type?: string;
  onClick?: () => void;
  onChange?: () => void;
  active?: boolean;
  value?: string | number;
}

class GrimpanMenuBtn {
  name?: string;
  type?: string;
  onClick?: () => void;
  onChange?: () => void;
  active?: boolean;
  value?: string | number;

  constructor(
    name?: string,
    type?: string,
    onClick?: () => void,
    onChange?: () => void,
    active = false,
    value?: string | number
  ) {
    this.name = name;
    this.type = type;
    this.onClick = onClick;
    this.onChange = onChange;
    this.active = active;
    this.value = value;
  }
}

interface GrimpanMenuBtnBuilder {
  setName(name: string): this;
  setType(type: string): this;
  setOnClick(onClick: () => void): this;
  setOnChange(onChange: () => void): this;
  setActive(active: boolean): this;
  setValue(value: string | number): this;
  build(): GrimpanMenuBtn;
}

class ChromeGrimpanMenuBtnBuilder implements GrimpanMenuBtnBuilder {
  btn: GrimpanMenuBtn;

  constructor() {
    this.btn = new GrimpanMenuBtn();
  }

  setName(name: string): this {
    this.btn.name = name;
    return this;
  }

  setType(type: string): this {
    this.btn.type = type;
    return this;
  }

  setOnClick(onClick: () => void) {
    this.btn.onClick = onClick;
    return this;
  }
  setOnChange(onChange: () => void) {
    this.btn.onChange = onChange;
    return this;
  }
  setActive(active: boolean) {
    this.btn.active = active;
    return this;
  }
  setValue(value: string | number) {
    this.btn.value = value;
    return this;
  }

  build() {
    return this.btn;
  }
}

class IEGrimpanMenuBtnBuilder implements GrimpanMenuBtnBuilder {
  btn: GrimpanMenuBtn;

  constructor() {
    this.btn = new GrimpanMenuBtn();
  }
  setName(name: string): this {
    this.btn.name = name;
    return this;
  }

  setType(type: string): this {
    this.btn.type = type;
    return this;
  }

  setOnClick(onClick: () => void) {
    this.btn.onClick = onClick;
    return this;
  }
  setOnChange(onChange: () => void) {
    this.btn.onChange = onChange;
    return this;
  }
  setActive(active: boolean) {
    this.btn.active = active;
    return this;
  }
  setValue(value: string | number) {
    this.btn.value = value;
    return this;
  }

  build() {
    return this.btn;
  }
}

export class GrimpanMenuBtnDirector {
  static createBackBtn(builder: GrimpanMenuBtnBuilder) {
    return builder
      .setName("뒤로")
      .setType("back")
      .setOnClick(() => {})
      .setOnChange(() => {})
      .setActive(false)
      .setValue("")
      .build();
  }

  static createForwardBtn(builder: GrimpanMenuBtnBuilder) {
    return builder
      .setName("앞으로")
      .setType("forward")
      .setOnClick(() => {})
      .setOnChange(() => {})
      .setActive(false)
      .setValue("")
      .build();
  }
}

GrimpanMenuBtnDirector.createBackBtn(new ChromeGrimpanMenuBtnBuilder());
GrimpanMenuBtnDirector.createForwardBtn(new ChromeGrimpanMenuBtnBuilder());
