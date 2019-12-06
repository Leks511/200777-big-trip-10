import {createSiteMenuTemplate} from './components/site-menu.js';
import {createInfoTemplate} from './components/info.js';
import {createFiltersTemplate} from './components/filters.js';
import {createEditEventTemplate} from './components/event-edit.js';
import {createDayTemplate} from './components/day.js';

const EVENT_COUNT = 3;

const render = (element, template, place) => {
  element.insertAdjacentHTML(place, template);
};

const tripInfoSectionElement = document.querySelector(`.trip-info`);
render(tripInfoSectionElement, createInfoTemplate(), `afterbegin`);

const menuHeaderElement = document.querySelector(`.trip-controls h2:first-of-type`);
render(menuHeaderElement, createSiteMenuTemplate(), `afterend`);

const filtersHeaderElement = document.querySelector(`.trip-controls h2:last-of-type`);
render(filtersHeaderElement, createFiltersTemplate(), `afterend`);

const tripEventsHeaderElement = document.querySelector(`.trip-events h2`);
render(tripEventsHeaderElement, createEditEventTemplate(), `afterend`);

const eventListElement = document.querySelector(`.trip-days`);

new Array(EVENT_COUNT).fill(``).forEach(() => render(eventListElement, createDayTemplate(), `beforeend`));
