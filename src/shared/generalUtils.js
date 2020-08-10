import { TYPE_SINGLE_DATE, TYPE_RANGE, TYPE_MUTLI_DATE } from './constants';

/*
  These utility functions don't depend on locale of the date picker(Persian or Gregorian)
*/

const createUniqueRange = (number, startingId) =>
  Array.from(Array(number).keys()).map(key => ({
    value: key + 1,
    id: `${startingId}-${key}`,
  }));

const isSameDay = (day1, day2) => {
  if (!day1 || !day2) return false;
  return day1.day === day2.day && day1.month === day2.month && day1.year === day2.year;
};

const putZero = number => (number.toString().length === 1 ? `0${number}` : number);

const toExtendedDay = date => [date.year, date.month, date.day];

const shallowClone = value => ({ ...value });

const deepCloneObject = obj =>
  JSON.parse(JSON.stringify(obj, (key, value) => (typeof value === 'undefined' ? null : value)));

const getDateAccordingToMonth = (date, direction) => {
  const toSum = direction === 'NEXT' ? 1 : -1;
  let newMonthIndex = date.month + toSum;
  let newYear = date.year;
  if (newMonthIndex < 1) {
    newMonthIndex = 12;
    newYear -= 1;
  }
  if (newMonthIndex > 12) {
    newMonthIndex = 1;
    newYear += 1;
  }
  const newDate = { year: newYear, month: newMonthIndex, day: 1 };
  return newDate;
};

const hasProperty = (object, propertyName) =>
  Object.prototype.hasOwnProperty.call(object || {}, propertyName);

const getValueType = value => {
  if (Array.isArray(value)) return TYPE_MUTLI_DATE;
  if (hasProperty(value, 'from') && hasProperty(value, 'to')) return TYPE_RANGE;
  if (
    !value ||
    (hasProperty(value, 'year') && hasProperty(value, 'month') && hasProperty(value, 'day')) ||
    (hasProperty(value, 'getFullYear') &&
      hasProperty(value, 'getMonth') &&
      hasProperty(value, 'getDate'))
  ) {
    return TYPE_SINGLE_DATE;
  }
  throw new TypeError(
    `The passed value is malformed! Please make sure you're using one of the valid value types for date picker.`,
  );
};

const getFormattedDate = date => {
  return date ? { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() } : null;
};

const outputDate = date => {
  return date ? new Date(date.year, date.month - 1, date.day) : null;
};

const parseDate = value => {
  const type = getValueType(value);
  switch (type) {
    case TYPE_SINGLE_DATE:
      return getFormattedDate(value);
    case TYPE_RANGE:
      const { from, to } = value;
      return { from: getFormattedDate(from), to: getFormattedDate(to) };
    default:
      return null;
  }
};

const returnDate = value => {
  const type = getValueType(value);
  switch (type) {
    case TYPE_SINGLE_DATE:
      return outputDate(value);
    case TYPE_RANGE:
      const { from, to } = value;
      return { from: outputDate(from), to: outputDate(to) };
    default:
      return null;
  }
};

export {
  createUniqueRange,
  isSameDay,
  putZero,
  toExtendedDay,
  shallowClone,
  deepCloneObject,
  getDateAccordingToMonth,
  getValueType,
  parseDate,
  returnDate,
};
