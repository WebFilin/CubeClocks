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
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

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
    const { days1, days2, hour1, hour2, minute1, minute2, second1, second2 } =
      timeValue;

    this.splitedTime.days1 = days1;
    this.splitedTime.days2 = days2;
    this.splitedTime.hour1 = hour1;
    this.splitedTime.hour2 = hour2;
    this.splitedTime.minute1 = minute1;
    this.splitedTime.minute2 = minute2;
    this.splitedTime.second1 = second1;
    this.splitedTime.second2 = second2;
  }
}

export default new Clocks();
