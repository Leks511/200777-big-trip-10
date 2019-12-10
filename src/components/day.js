import {createEventTemplate} from './event.js';
import {generateDay} from '../mock/day.js';

export const createDayTemplate = () => {

  const {dayNumber, eventsData} = generateDay();

  const EVENTS_TEMPLATE = eventsData.map((event) => createEventTemplate(event)).join(`\n`);

  return (`
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${dayNumber}</span>
        <time class="day__date" datetime="2019-03-18">MAR 18</time>
      </div>

      <ul class="trip-events__list">
        ${EVENTS_TEMPLATE}
      </ul>
    </li>
  `);
};
