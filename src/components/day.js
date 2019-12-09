import {createEventTemplate} from './event.js';

const EVENTS_COUNT = 4;

export const createDayTemplate = (dayNumber) => {
  return (`
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${dayNumber + 1}</span>
        <time class="day__date" datetime="2019-03-18">MAR 18</time>
      </div>

      <ul class="trip-events__list">
        ${createEventListTemplate(EVENTS_COUNT)}
      </ul>
    </li>
  `);
};
