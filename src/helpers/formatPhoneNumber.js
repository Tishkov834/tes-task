export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = (`${phoneNumber}`).replace(/\D/g, '');

  const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/);

  if (!match) {
    return phoneNumber;
  }

  return `+${match[1]} (${match[2]}) ${match[3]} ${match[4]} ${match[5]}`;
};
