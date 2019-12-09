import {createEventTemplate} from './event.js';
import {generateEvents} from '../mock/event.js';

const EVENTS_COUNT = 4;
const EVENTS = generateEvents(EVENTS_COUNT);
const EVENTS_TEMPLATE = EVENTS.map((event) => createEventTemplate(event)).join(`\n`);

export const createDayTemplate = (dayNumber) => {
  return (`
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${dayNumber + 1}</span>
        <time class="day__date" datetime="2019-03-18">MAR 18</time>
      </div>

      <ul class="trip-events__list">
        ${EVENTS_TEMPLATE}
      </ul>
    </li>
  `);
};
