const TOKEN_KEY = process.env.AUTH_KEY!;
export const getToken = () => {
  let token: string = "";

  token = localStorage.getItem(TOKEN_KEY)!;

  return token;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setSession = (data: any) => {
  // export const setSession = (data: LoginData) => {
  try {
    if (!data.access_token || !data.refreshToken || !data.user) {
      throw new Error("Required session data missing.");
    }
    localStorage.setItem(TOKEN_KEY, data.access_token);
    //   localStorage.setItem(REFRESH_TOKEN, data.refreshToken);
    //   localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(data.user));
    return true;
  } catch (error) {
    console.error(`Error while setting session. Details - ${error}`);
    return false;
  }
};

export const removeSession = () => {
  try {
    localStorage.removeItem(TOKEN_KEY);
    //   localStorage.removeItem(REFRESH_TOKEN);
    //   localStorage.removeItem(CURRENT_USER_KEY);
    return true;
  } catch (error) {
    console.error(`Error while setting removing session. Details - ${error}`);
    return false;
  }
};
