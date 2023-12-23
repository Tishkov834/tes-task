export const truncateString = (str) => {
  const maxLength = 27;

  if (str.length > maxLength) {
    return `${str.substring(0, maxLength)}...`;
  }
  return str;
};
