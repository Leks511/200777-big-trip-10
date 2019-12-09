/* eslint-disable no-unused-vars */
import {getRandomIntegerNumber, getRandomArrayItem} from '../util.js';
import {TRANSPORT_TYPES, STOP_TYPES} from '../types.js';

const Cities = [`Geneva`, `Chaomix`, `Amsterdam`, `Moscow`, `Paris`, `Los Angeles`, `New York`, `London`, `Burkino Faso`];

const Options = [
  {
    type: `luggage`,
    name: `Add luggage`,
    price: `10 €`
  },
  {
    type: `comfort`,
    name: `Switch to comfort class`,
    price: `150 €`
  },
  {
    type: `meal`,
    name: `Add meal`,
    price: `2 €`
  },
  {
    type: `seats`,
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

  return {targetDate, startEventTime, endEventTime};
};

const getFormattedNumber = (num) => {
  return `${num < 10 ? `0${num}` : num}`;
};

const getEventDuration = (start, end) => {
  const days = end.days - start.days;
  const hours = end.hours - start.hours;
  const minutes = end.minutes - start.minutes;

  const daysM = days > 0 ? `${getFormattedNumber(days)}D` : ``;
  const hoursM = hours > 0 ? `${getFormattedNumber(hours)}H` : ``;
  const minutesM = minutes > 0 ? `${getFormattedNumber(minutes)}M` : ``;

  return `${daysM}${daysM ? ` ` : ``}${hoursM}${hoursM ? ` ` : ``}${minutesM}`;
};

const getRandomEventPeriod = (start, end) => {
  return {
    startTime: `${start.hours}:${start.minutes}`,
    endTime: `${end.hours}:${end.minutes}`
  };
};

const generateEvent = () => {
  const {targetDate, startEventTime, endEventTime} = getRandomDate();
  const {startTime, endTime} = getRandomEventPeriod(startEventTime, endEventTime);

  return {
    description: generateDescription(),
    photo: generateRandomPhotos(),
    type: getRandomArrayItem([...TRANSPORT_TYPES, ...STOP_TYPES]),
    city: getRandomArrayItem(Cities),
    options: generateExtraOptions(Options),
    eventPeriod: {
      targetDate,
      startTime,
      endTime
    },
    eventDuration: getEventDuration(startEventTime, endEventTime),
    price: getRandomIntegerNumber(0, 100)
  };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

export {generateEvent, generateEvents};
