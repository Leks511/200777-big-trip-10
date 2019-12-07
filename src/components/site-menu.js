import {createTabTemplate} from './tab.js';

const tabs = [
  `Table`,
  `Stats`
];

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
