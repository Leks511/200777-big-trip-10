import {generateFilters} from '../mock/filter.js';

export const createFiltersTemplate = () => {
  return (
    `
      <form class="trip-filters" action="#" method="get">
        ${generateFilters()}
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>
    `
  );
};
