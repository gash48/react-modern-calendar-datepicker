export const GREGORIAN_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const GREGORIAN_WEEK_DAYS = [
  {
    name: 'Sunday',
    short: 'S',
    isWeekend: true,
  },
  {
    name: 'Monday',
    short: 'M',
  },
  {
    name: 'Tuesday',
    short: 'T',
  },
  {
    name: 'Wednesday',
    short: 'W',
  },
  {
    name: 'Thursday',
    short: 'T',
  },
  {
    name: 'Friday',
    short: 'F',
  },
  {
    name: 'Saturday',
    short: 'S',
    isWeekend: true,
  },
];

const formatDate = date => ({
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
});

const rangeCalc = (type, diff, toYesterday = false) => {
  const today = new Date();
  if (toYesterday) {
    today.setDate(today.getDate() - 1);
  }
  const { year, month, day } = formatDate(today);
  switch (type) {
    case 'd':
      return { from: new Date(year, month, diff == undefined ? 1 : day - diff), to: today };
    case 'm':
      return {
        from: new Date(year, diff == undefined ? 0 : month - diff, diff == undefined ? 1 : day),
        to: today,
      };
    case 'y':
      return { from: new Date(year - diff, month, day), to: today };
    default:
      return null;
  }
};

export const DEFAULT_RANGES = {
  today: {
    key: 'today',
    label: 'Today',
    range: rangeCalc('d', 0),
  },
  yesterday: {
    key: 'yesterday',
    label: 'Yesterday',
    range: rangeCalc('d', 0, true),
  },
  week: {
    key: 'week',
    label: '7 Days Ago',
    range: rangeCalc('d', 6, true),
  },
  month: {
    key: 'month',
    label: 'This Month',
    range: rangeCalc('d'),
  },
  prevMonth: {
    key: 'prevMonth',
    label: 'A Month Ago',
    range: rangeCalc('m', 1, true),
  },
  year: {
    key: 'year',
    label: 'This Year',
    range: rangeCalc('m'),
  },
  prevYear: {
    key: 'prevYear',
    label: 'A Year Ago',
    range: rangeCalc('y', 1, true),
  },
};

export const MINIMUM_SELECTABLE_YEAR_SUBTRACT = 100;

export const MAXIMUM_SELECTABLE_YEAR_SUM = 50;

export const TYPE_SINGLE_DATE = 'SINGLE_DATE';
export const TYPE_RANGE = 'RANGE';
export const TYPE_MUTLI_DATE = 'MUTLI_DATE';
