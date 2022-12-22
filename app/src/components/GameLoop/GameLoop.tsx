

const GameLoop = (
  entities,
  {
    touches,
    dispatch,
    events,
  },
) => {
  let head = entities.head;

  head.position[0] += head.xSpeed;

  return entities;
};

export default GameLoop;