import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

// used in blog pages
export function formatDate(date: string) {
  const d = new Date(date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[d.getDay()];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[d.getMonth()];

  function getNumberWithOrdinal(n: number) {
    var s = ["th", "st", "nd", "rd"],
      v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  const dayOfTheMonth = getNumberWithOrdinal(d.getDate());

  const year = d.getFullYear();

  const dFormatted = `${day}, ${month} ${dayOfTheMonth} ${year}`;

  return dFormatted;
}

// used for to get relative time from date (eg. 'x days ago')
export function formatDateRelatively(date: string) {
  const timeStamp = new Date(date);

  // Note: valueOf() is only used to get rid of typescript errors
  const secondsPast = (Date.now().valueOf() - timeStamp.valueOf()) / 1000;

  // number of seconds in:
  const oneMinute = 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneMonth = oneDay * 30;
  const oneYear = oneMonth * 12;

  if (secondsPast < oneMinute) {
    const relativeTime = Math.floor(secondsPast);
    const sIfNeeded = relativeTime > 1 ? "s" : "";
    return relativeTime + ` second${sIfNeeded} ago`;
  }

  if (secondsPast < oneHour) {
    const relativeTime = Math.floor(secondsPast / oneMinute);
    const sIfNeeded = relativeTime > 1 ? "s" : "";
    return relativeTime + ` minute${sIfNeeded} ago`;
  }

  if (secondsPast < oneDay) {
    const relativeTime = Math.floor(secondsPast / oneHour);
    const sIfNeeded = relativeTime > 1 ? "s" : "";
    return relativeTime + ` hour${sIfNeeded} ago`;
  }

  if (secondsPast < oneMonth) {
    const relativeTime = Math.floor(secondsPast / oneDay);
    const sIfNeeded = relativeTime > 1 ? "s" : "";
    return relativeTime + ` day${sIfNeeded} ago`;
  }

  if (secondsPast <= oneYear) {
    const relativeTime = Math.floor(secondsPast / oneMonth);
    const sIfNeeded = relativeTime > 1 ? "s" : "";
    return relativeTime + ` month${sIfNeeded} ago`;
  }

  if (secondsPast > oneYear) {
    const relativeTime = Math.floor(secondsPast / oneYear);
    const sIfNeeded = relativeTime > 1 ? "s" : "";
    return relativeTime + ` year${sIfNeeded} ago`;
  }
}

export function estimateReadTime(source: string) {
  const textLength = source.trim().split(/\s+/).length;
  const wordsPerMinute = 250;

  return Math.ceil(textLength / wordsPerMinute);
}

export function slugify(string: string) {
  string = string.trim();
  string = string.toLowerCase();

  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    string = string.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  string = string
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return string;
}
