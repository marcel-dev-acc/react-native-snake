import SCREEN from "../../constants/device";

type Head = {
  position: number[],
  xSpeed: number,
  ySpeed: number,
  size: number,
  updateFrequency: number,
  nextMove: number,
};

type Entities = {
  head: Head;
};

type Actions = {
  touches: any,
  dispatch: any,
  events: any,
};

const GameLoop = (
  entities: Entities,
  actions: Actions,
): Entities => {
  let head = entities.head;
  let { touches, dispatch, events, } = actions;

  // Listen to incoming events
  if (events.length) {
    for (let i=0; i < events.length; i++) {
      if (events[i].type === 'move-up' && head.ySpeed !== 1) {
        head.ySpeed = -1;
        head.xSpeed = 0;
      } else if (events[i].type === 'move-down' && head.ySpeed !== -1) {
        head.ySpeed = 1;
        head.xSpeed = 0;
      } else if (events[i].type === 'move-left' && head.xSpeed !== 1) {
        head.xSpeed = -1;
        head.ySpeed = 0;
      } else if (events[i].type === 'move-right' && head.xSpeed !== -1) {
        head.xSpeed = 1;
        head.ySpeed = 0;
      }
    }
  }

  // Controll movement speed with this if statement
  head.nextMove -= 1;
  if (head.nextMove === 0) {
    head.nextMove = head.updateFrequency;

    // Check if snake head has reached end of grid
    if (
      (head.position[0] + head.xSpeed < 0) ||
      (head.position[0] + head.xSpeed >= SCREEN.GRID_SIZE) ||

      (head.position[1] + head.ySpeed < 0) ||
      (head.position[1] + head.ySpeed >= SCREEN.GRID_SIZE)
    ) {
      // Game over
      dispatch({
        type: 'game-over',
      })
    } else {
      // Otherwise move the head
      head.position[0] += head.xSpeed;
      head.position[1] += head.ySpeed;
    }

  }

  return entities;
};

export default GameLoop;