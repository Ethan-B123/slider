// history_item {
//   time: 2716 // in ms
//   move:
//     grabLocation:
//       x: 1
//       y: 1  
//     movement:
//       x: 0
//       y: -1
// }

export default class MemoryController {
  constructor({ history, onMove }) {
    this.history = JSON.parse(JSON.stringify(history));
    this.lastMoveTime = 0;
    this.timeout = null;
    this.onMove = onMove;
  }

  scheduleMove() {
    this.timeout = setTimeout(() => {
      if(this.history.length > 1) {
        this.onMove(this.history.shift().move, false);
        this.scheduleMove();
      } else {
        this.onMove(this.history.shift().move, true);
      }
    }, this.history[0].time - this.lastMoveTime)
    this.lastMoveTime = this.history[0].time
  }

  end() {
    clearTimeout(this.timeout);
  }

  start() {
    if(this.history.length === 0) throw "history empty";
    this.scheduleMove();
  }
}
