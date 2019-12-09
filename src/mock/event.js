/* eslint-disable no-unused-vars */
import {getRandomIntegerNumber, getRandomArrayItem} from '../util.js';
import {TYPES} from './types.js';

const Cities = [`Geneva`, `Chaomix`, `Amsterdam`, `Moscow`, `Paris`, `Los Angeles`, `New York`, `London`, `Burkino Faso`];

const Options = [
  {
    name: `Add luggage`,
    price: `10 €`
  },
  {
    name: `Switch to comfort`,
    price: `150 €`
  },
  {
    name: `Add meal`,
    price: `2 €`
  },
  {
    name: `Choose seats`,
    price: `9 €`
  }
];

const randomDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const generateExtraOptions = (options) => {
  return options
    .filter(() => Math.random() > 0.5)
    .slice(0, 2);
};

const generateRandomPhotos = () => {
  return new Array(Math.floor(Math.random() * 10))
    .fill(``)
    .map(() => `http://picsum.photos/300/150?r=${Math.random()}`);
};

const generateDescription = () => {
  return randomDescription.split(`.`)
    .filter(() => Math.random() > 0.5)
    .slice(0, getRandomIntegerNumber(1, 3));
};

const getRandomDate = () => {
  const targetDate = new Date();

  const startEventTime = {
    hours: targetDate.getHours(),
    minutes: targetDate.getMinutes()
  };

  const endEventTime = {
    hours: startEventTime.hours + getRandomIntegerNumber(0, 23),
    minutes: startEventTime.minutes + getRandomIntegerNumber(0, 59)
  };

  return {startEventTime, endEventTime};
};

const getEventDuration = (start, end) => {
  const hours = end.hours - start.hours;
  const minutes = end.minutes - start.minutes;

  return `${hours}H ${minutes}M`;
};

const getRandomEventPeriod = (start, end) => {
  return {
    startTime: `${start.hours}:${start.minutes}`,
    endTime: `${end.hours}:${end.minutes}`
  };
};

const generateEvent = () => {
  const {startEventTime, endEventTime} = getRandomDate();
  const {startTime, endTime} = getRandomEventPeriod(startEventTime, endEventTime);
  const eventDuration = getEventDuration(startEventTime, endEventTime);

  return {
    description: generateDescription(),
    photo: generateRandomPhotos(),
    type: getRandomArrayItem(Object.values(TYPES)),
    city: getRandomArrayItem(Cities),
    options: generateExtraOptions(Options),
    eventPeriod: {
      startTime,
      endTime
    },
    eventDuration,
    price: getRandomIntegerNumber(0, 100)
  };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

export {generateEvent, generateEvents};
