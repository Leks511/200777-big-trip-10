/* eslint-disable no-unused-vars */
const Cities = [`Geneva`, `Chaomix`, `Amsterdam`, `Moscow`, `Paris`, `Los Angeles`, `New York`, `London`, `Burkino Faso`];

const Types = {
  taxi: `taxi to`,
  bus: `bus to`,
  train: `train to`,
  ship: `ship to`,
  transport: `transport to`,
  drive: `drive to`,
  flight: `flight to`,
  checkIn: `check into`,
  sightseeing: `sightseeing`,
  restaurant: `restaurant`
};

const Options = [
  `Add luggage + 10 €`,
  `Switch to comfort class + 150 €`,
  `Add meal + 2 €`,
  `Choose seats + 9 €`
];

const randomDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const generateExtraOptions = (options) => {
  return options
    .filter(() => Math.random() > 0.5)
    .slice(0, 2);
};

const generateRandomPhotos = () => {
  return new Array(Math.floor(Math.random() * 10))
    .fill(``)
    .map(() => `http://picsum.photos/300/150?r=${Math.random()}`);
};

const generateDescription = () => {
  return randomDescription.split(`.`)
    .filter(() => Math.random() > 0.5)
    .slice(0, getRandomIntegerNumber(1, 3));
}

const event = {
  description: generateDescription(),
  photo: generateRandomPhotos(),
  type: getRandomArrayItem(Object.values(Types)),
  city: getRandomArrayItem(Cities),
  options: generateExtraOptions(Options),
};

export {event};
