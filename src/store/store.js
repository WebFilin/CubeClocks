import { makeAutoObservable } from "mobx";

class Clocks {
isStart = false
isReset=false

constructor(){
   makeAutoObservable(this)
}

handleStartTimer(){
   this.isStart = !this.isStart
}

}

export default new Clocks();
