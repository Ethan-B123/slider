// move {
//   grabLocation: { x, y }
//   movement: { x, y }
// }

class Memory {
  constructor({ moveRecord, onChange }) {
    this.startTime = null;
    this.moveRecord = moveRecord ? moveRecord : [];
    this.undoRecord = [];
    this.mostRecentMoveOffset = -1;
    this.onChange = (...args) => {
      onChange(...args);
      this.testingInfo();
    };
  }

  testingInfo() {
    return {
      moveRecord: this.moveRecord.map(moveWithTime => {
        let str = `loc: ${moveWithTime.move.grabLocation.x}, ${
          moveWithTime.move.grabLocation.y
        } | movement: ${moveWithTime.move.movement.x}, ${
          moveWithTime.move.movement.y
        }`;
        return str;
      }),
      undoRecord: this.undoRecord.map(move => {
        let str = `loc: ${move.grabLocation.x}, ${
          move.grabLocation.y
        } | movement: ${move.movement.x}, ${move.movement.y}`;
        return str;
      })
    };
  }

  startTimer() {
    this.startTime = Date.now();
  }

  makeMove(move, undoShouldTrack = true) {
    this.moveRecord.push({ move, time: Date.now() - this.startTime });
    if (!undoShouldTrack) return this.testingInfo();

    const deleteStart = this.mostRecentMoveOffset + 1;
    if (deleteStart === 0) {
      this.undoRecord.push({ ...move });
    } else {
      this.undoRecord.splice(deleteStart);
      this.undoRecord.push({ ...move });
    }
    this.mostRecentMoveOffset = -1;
    if (deleteStart > 0) throw "how...";
    return this.testingInfo();
  }

  undo() {
    const { undoRecord, mostRecentMoveOffset } = this;
    if (undoRecord.length + mostRecentMoveOffset < 0) {
      return;
    }
    const currentUndo = undoRecord[undoRecord.length + mostRecentMoveOffset];
    const { movement, grabLocation } = currentUndo;
    const { x: lastX, y: lastY } = movement;
    const oppositeMovement = { x: lastX * -1, y: lastY * -1 };
    this.mostRecentMoveOffset -= 1;
    this.makeMove(
      { grabLocation: { ...grabLocation }, movement: oppositeMovement },
      false
    );
    this.onChange({
      grabLocation: { ...grabLocation },
      movement: { ...oppositeMovement }
    });
  }

  redo() {
    const { undoRecord, mostRecentMoveOffset } = this;
    if (mostRecentMoveOffset >= -1) {
      return;
    }
    this.mostRecentMoveOffset += 1;
    const { grabLocation, movement } = undoRecord[
      undoRecord.length + this.mostRecentMoveOffset
    ];
    this.makeMove(
      { grabLocation: { ...grabLocation }, movement: { ...movement } },
      false
    );
    this.onChange({
      grabLocation: { ...grabLocation },
      movement: { ...movement }
    });
  }
}

export default Memory;
