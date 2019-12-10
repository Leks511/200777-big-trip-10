import {getRandomIntegerNumber} from '../util.js';
import {generateEvents} from '../mock/event.js';


let dayNumber = 0;

export const generateDay = () => {
  dayNumber++;

  return {
    dayNumber,
    date: `MAR 18`,
    eventsData: generateEvents(getRandomIntegerNumber(1, 3))
  };
};
