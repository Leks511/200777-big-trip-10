import {createEventTemplate} from './event.js';

const EVENTS_COUNT = 4;

export const createDayTemplate = () => {
  return (`
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">1</span>
        <time class="day__date" datetime="2019-03-18">MAR 18</time>
      </div>

      <ul class="trip-events__list">
        ${new Array(EVENTS_COUNT)
          .fill(``)
          .map(createEventTemplate)
          .join(``)}
      </ul>
    </li>
  `);
};
