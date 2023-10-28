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

  splitedTime = {
    days1: 0,
    days2: 0,
    hour1: 0,
    hour2: 0,
    minute1: 0,
    minute2: 0,
    second1: 0,
    second2: 0,
  };

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

  handleStopTimer() {
    this.isStart = false;
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

  handlerSplitedTime(timeValue) {
    this.splitedTime.days1 = timeValue.days1;
    this.splitedTime.days2 = timeValue.days2;
    this.splitedTime.hour1 = timeValue.hour1;
    this.splitedTime.hour2 = timeValue.hour2;
    this.splitedTime.minute1 = timeValue.minute1;
    this.splitedTime.minute2 = timeValue.minute2;
    this.splitedTime.second1 = timeValue.second1;
    this.splitedTime.second2 = timeValue.second2;
  }
}

export default new Clocks();
