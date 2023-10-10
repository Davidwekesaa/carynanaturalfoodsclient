export const trancateWords = (inputString) => {
  const inputStr = inputString?.trim()?.length / 5;
  if (inputString?.length <= inputStr) {
    return inputString;
  } else {
    return inputString?.slice(0, inputStr) + "...";
  }
};

export const formatDate = (inputedate) => {
  const parts = inputedate?.split("/");
  if (parts?.length !== 3) {
    return "Invalid date format";
  }
  const [day, month, year] = parts?.map(Number);
  const months = [
    "Jan",
    "Feb",
    "mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = months[month - 1];
  return `${monthName} ${day}, ${year}`;
};
