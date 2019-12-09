// Получаем функцию генерации списка эвентов
import {createEventTemplate} from '../mock/event';

const EVENTS_COUNT = 4;

// функция рендеринга шаблона дня
// в ней вызываем функцию генерации шаблона эвентов
export const createDayTemplate = (dayNumber) => {
  return (`
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${dayNumber + 1}</span>
        <time class="day__date" datetime="2019-03-18">MAR 18</time>
      </div>

      <ul class="trip-events__list">
        ${createEventTemplate(EVENTS_COUNT)}
      </ul>
    </li>
  `);
};
