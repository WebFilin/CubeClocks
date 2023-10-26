import { makeAutoObservable } from "mobx";

class Clocks {
  isStart = false;
  isReset = false;
  checkedTimeValue = {
    name: "",
    type: "",
  };
  constructor() {
    makeAutoObservable(this);
  }

  handleStartTimer() {
    this.isStart = !this.isStart;
    this.isReset = false;
  }

  handlerReset() {
    this.isReset = false;
    this.setValueCheced("", "");
  }

  handlerValueChecked(name, type) {
    this.setValueCheced(name, type);
  }

  setValueCheced(name, type) {
    this.checkedTimeValue.name = name;
    this.checkedTimeValue.type = type;
  }
}

export default new Clocks();
