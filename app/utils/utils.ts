export const extractPhoneNumberDetails = (data: {
  contactNumber: { phoneNumber: string; countryCode: string };
}) => {
  const phoneNumber = data.contactNumber.phoneNumber.replace(
    data.contactNumber.countryCode,
    "",
  );
  const countryCode = data.contactNumber.countryCode;
  return { phoneNumber, countryCode };
};
