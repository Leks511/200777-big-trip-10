const filterNames = [
  `everything`,
  `future`,
  `past`
];

const generateFilters = () => {
  return filterNames
    .map((it) => {
      return (`
        <div class="trip-filters__filter">
          <input id="filter-${it}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${it}">
          <label class="trip-filters__filter-label" for="filter-${it}">${it}</label>
        </div>
      `);
    })
    .join(`\n`);
};

export {generateFilters};
