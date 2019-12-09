const createOfferMarkup = (offers) => {
  return offers.map((it) => {
    return (`
      <li class="event__offer">
        <span class="event__offer-title">${it.name}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${it.price}</span>
        </li>
    `);
  }).join(`\n`);
};

export const createEventTemplate = ({ description, photo, type, city, options, eventPeriod, eventDuration, price }) => {

  const offers = createOfferMarkup(options);


  return (`
    <li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${description}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${eventPeriod.targetDate}">${eventPeriod.startTime}</time>
            &mdash;
            <time class="event__end-time" datetime="${eventPeriod.targetDate}">${eventPeriod.endTime}</time>
          </p>
          <p class="event__duration">${eventDuration}</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offers}
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `);
};
