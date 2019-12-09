import {generateEvents} from '../mock/event.js';

const EVENTS = generateEvents(4);
const CITIES = EVENTS.map((event) => event.city);


export const createInfoTemplate = () => {
  return (`
    <div class="trip-info__main">
      <h1 class="trip-info__title">${CITIES[0]} &mdash; ... &mdash; ${CITIES[CITIES.length - 1]}</h1>

      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;21</p>
    </div>
  `);
};
