import Notiflix from "notiflix";

class Timer {
  constructor(targetTime) {
    this.targetTime = targetTime;
  }

  start(handler) {
    this.id = setInterval(this.getLeftTime.bind(this), 1000, handler);
  }

  stop() {
    clearInterval(this.id);
  }

  getLeftTime(handler) {
    const leftTime = this.targetTime - Date.now()
    if ( leftTime <= 0) {
        this.stop()
        Notiflix.Notify.success('Time over');
    }
    
    return handler(leftTime);
  }
}


export { Timer };