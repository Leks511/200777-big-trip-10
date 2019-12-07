export const createTabTemplate = (tab) => {
  const activeClass = Math.random() > 0.5 ? `trip-tabs__btn--active` : ``;

  return `<a class="trip-tabs__btn ${activeClass}" href="#">${tab}</a>`;
};
