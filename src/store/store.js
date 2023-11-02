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

  displayVisibility = {
    isDays: true,
    isHour: true,
    isMinute: true,
  };

  error = "";

  constructor() {
    makeAutoObservable(this);
  }

  handleStartTimer() {
    this.isStart = !this.isStart;
    this.isReset = false;
  }

  handlerReset() {
    this.isReset = true;
    this.isStart = false;

    this.setValueChecked("");
    this.setTargetDate("");

    this.setValuesTime(0, 0, 0, 0);

    this.handlerdisplayVisability(true, true, true);
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

  getValuesTime(timeValue) {
    const { days, hours, minutes, seconds } = timeValue;

    const isDays = days !== 0;
    const isHours = hours !== 0;
    const isMinutes = minutes !== 0;

    this.setValuesTime(days, hours, minutes, seconds);

    this.handlerdisplayVisability(isDays, isHours, isMinutes);
  }

  setValuesTime(days, hours, minutes, seconds) {
    this.valuesTime.days = days;
    this.valuesTime.hours = hours;
    this.valuesTime.minutes = minutes;
    this.valuesTime.seconds = seconds;
  }

  handlerdisplayVisability(days, hours, minutes) {
    this.displayVisibility.isDays = days;
    this.displayVisibility.isHour = hours;
    this.displayVisibility.isMinute = minutes;
  }

  setSplitedTime(timeValue) {
    this.splitedTime = timeValue;
  }

  handlerErrors(error) {
    this.error = error;
  }
}

export default new Clocks();
