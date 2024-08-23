import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

// used in blog pages
export function formatDate(date: string) {
  const postedDate = new Date(date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[postedDate.getDay()];

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
  const month = months[postedDate.getMonth()];

  function getNumberWithOrdinal(n: number) {
    var s = ["th", "st", "nd", "rd"],
      v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  const dayOfTheMonth = getNumberWithOrdinal(postedDate.getDate());

  const year = postedDate.getFullYear();

  const postedDateFormatted = `${day}, ${month} ${dayOfTheMonth} ${year}`;

  return postedDateFormatted;
}
