import { makeAutoObservable } from "mobx";

class Clocks {
  isStart = false;
  isReset = false;
  checkedTimeValue = {
    name: "",
    type: "",
  };

  inputTimeAndDate = {
    time: "",
    date: "",
  };

  inputSingleValue = "";

  constructor() {
    makeAutoObservable(this);
  }

  handleStartTimer() {
    this.isStart = !this.isStart;
    this.isReset = false;
  }

  handlerReset() {
    this.isReset = true;
    this.setValueChecked("");
    this.setValueDateOrTime("");
  }

  handlerValueChecked(name, type) {
    this.setValueChecked(name, type);
    this.isReset = false;
  }

  handlerInputTimeValue(value) {
    this.inputTimeAndDate.time = value;
  }

  handlerInputDataValue(value) {
    this.inputTimeAndDate.date = value;
  }

  handlerInputSingleValue(value) {
    this.inputSingleValue = value;
  }

  handlerPressEnterInValue() {
    this.isStart = true;
  }

  setValueChecked(name, type) {
    this.checkedTimeValue.name = name;
    this.checkedTimeValue.type = type;
  }

  setValueDateOrTime(time, data) {
    this.inputTimeValue = time;
    this.inputDataValue = data;
  }
}

export default new Clocks();
