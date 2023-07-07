export const checkInputIsASteamId = (input: string): boolean => {
  const steamIdRegexp = /^\d{17}$/;

  return steamIdRegexp.test(input);
};
