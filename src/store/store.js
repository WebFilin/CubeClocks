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

  targetDate = "";

  valuesTime = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  };

  splitedTime = { days: [], hours: [], minutes: [], seconds: [] };

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

  setTargetDate(valueTargetDate) {
    this.targetDate = valueTargetDate;
  }

  setValueDateOrTime(time, data) {
    this.inputTimeValue = time;
    this.inputDataValue = data;
  }

  setValuesTime(timeValue) {
    const { days, hours, minutes, seconds } = timeValue;

    this.valuesTime.days = days;
    this.valuesTime.hours = hours;
    this.valuesTime.minutes = minutes;
    this.valuesTime.seconds = seconds;
  }

  setSplitedTime(timeValue) {
    this.splitedTime = timeValue;
  }
}

export default new Clocks();
