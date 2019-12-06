import {createFilter} from './filter.js';
import {filterNames} from '../mock/filters.js';

const generateFilters = () => {
  return filterNames
    .map((it) => createFilter(it))
    .join(`\n`);
};

export const createFiltersTemplate = () => {
  return (`
    <form class="trip-filters" action="#" method="get">
      ${generateFilters()}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `);
};
