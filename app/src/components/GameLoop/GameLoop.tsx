import SCREEN from "../../constants/device";
import {randomBetween} from "../../utils/random";

type Entity = {
  position: number[];
  xSpeed: number;
  ySpeed: number;
  size: number;
  updateFrequency: number;
  nextMove: number;
  elements?: any[];
  direction?: string;
};

type Entities = {
  head: Entity;
  food: Entity;
  tail: Entity;
};

type Actions = {
  touches: any;
  dispatch: any;
  events: any;
};

const GameLoop = (
  entities: Entities,
  actions: Actions,
): Entities => {
  let { head, food, tail } = entities;
  let { touches, dispatch, events, } = actions;

  // Listen to incoming events
  if (events.length) {
    for (let i=0; i < events.length; i++) {
      if (events[i].type === 'move-up' && head.ySpeed !== 1) {
        head.direction = 'up';
        head.ySpeed = -1;
        head.xSpeed = 0;
      } else if (events[i].type === 'move-down' && head.ySpeed !== -1) {
        head.direction = 'down';
        head.ySpeed = 1;
        head.xSpeed = 0;
      } else if (events[i].type === 'move-left' && head.xSpeed !== 1) {
        head.direction = 'left';
        head.xSpeed = -1;
        head.ySpeed = 0;
      } else if (events[i].type === 'move-right' && head.xSpeed !== -1) {
        head.direction = 'right';
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
      });
    } else {
      // Make the tail follow
      tail.elements = [[ head.position[0], head.position[1] ]]
        .concat(tail.elements)
        .slice(0, -1);

      // Otherwise move the head
      head.position[0] += head.xSpeed;
      head.position[1] += head.ySpeed;

      // Check for collision with tail
      for (let i = 0; i < tail.elements.length; i++) {
        if (
          head.position[0] === tail.elements[i][0] &&
          head.position[1] === tail.elements[i][1]
        ) {
          dispatch({
            type: 'game-over',
          });
        }
      }

      // Check for wall collision
      if (
        head.position[0] == food.position[0] &&
        head.position[1] == food.position[1]
      ) {
        // Eat food

        // Grow tail
        tail.elements = [[ food.position[0], food.position[1] ], ...tail.elements];

        // New food position
        food.position = [
          randomBetween(0, SCREEN.GRID_SIZE - 1),
          randomBetween(0, SCREEN.GRID_SIZE - 1),
        ];
      }
    }

  }

  return entities;
};

export default GameLoop;