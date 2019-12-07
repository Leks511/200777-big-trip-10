import {tabs} from '../mock/site-menu.js';
import {createTabTemplate} from './tab.js';

const generateTabsMorkup = (links) => {
  return links
    .map((it) => {
      return createTabTemplate(it);
    })
    .join(`\n`);
};

export const createSiteMenuTemplate = () => {
  return (`
    <nav class="trip-controls__trip-tabs  trip-tabs">
      ${generateTabsMorkup(tabs)}
    </nav>
  `);
};
