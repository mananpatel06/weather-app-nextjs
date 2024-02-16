export function getFormattedDate(data) {
  // Create a new Date object from the given date string
  const date = new Date(data);

  // Get the day, daydate, month, and year from the Date object
  const dayDate = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Format the date as DD/MM/YYYY
  const formattedDate = `${dayDate}/${month}/${year}`;

  return formattedDate;
}

export function getFormattedTime(data) {
  // Create a new Date object from the given date string
  const date = new Date(data);

  // Extract hours, minutes, and seconds
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // Format the time string
  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
}

export function getDayName(data) {
  // Create a new Date object from the given date string
  const date = new Date(data);

  // Get the day, daydate, month, and year from the Date object
  const day = date.getDay();

  // Create an array of the day names
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the day name from the array
  const dayName = days[day];

  return dayName;
}

export function getTimeFromUnix(unixTime) {
// Create a Date object from the Unix timestamp
const dateObj = new Date(unixTime * 1000); // Multiply by 1000 for milliseconds

// Extract and format hours, minutes, and seconds
const hours = dateObj.getHours().toString().padStart(2, '0');
const minutes = dateObj.getMinutes().toString().padStart(2, '0');
const seconds = dateObj.getSeconds().toString().padStart(2, '0');

// Format the time string
const formattedTime = `${hours}:${minutes}:${seconds}`;

return formattedTime;
}

export function convertWindSpeed(speedInMetersPerSecond){
  const speedInKilometersPerHour = speedInMetersPerSecond * 3.6; // Conversion from m/s to km/h
  return `${speedInKilometersPerHour.toFixed(0)}km/h`;
}

export function metersToKilometers(visibilityInMeters){
  const visibilityInKilometers = visibilityInMeters / 1000;
  return `${visibilityInKilometers.toFixed(0)}km`; // Round to 0 decimal places and add 'km' unit
}