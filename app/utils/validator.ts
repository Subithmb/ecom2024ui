const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-Z\s]{2,50}$/;

export const validateEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 4;
};

export const validateName = (name: string): boolean => {
  return nameRegex.test(name);
};

export const validatePhoneNumber = (phoneNumber: string) => {
  return phoneNumber.length >= 10 && /^[0-9]+$/.test(phoneNumber);
};

export const validateImageFile = (file: File) => {
  const allowedTypes = ["image/png", "image/jpeg"];
  const maxSizeInMB = 2;
  return (
    allowedTypes.includes(file.type) && file.size <= maxSizeInMB * 1024 * 1024
  );
};

export const validateNumber = (num: string): boolean => {
  return parseInt(num) > 0;
};
