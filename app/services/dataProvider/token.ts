const TOKEN_KEY = process.env.NEXT_PUBLIC_AUTH_KEY!;
const USER_KEY = process.env.NEXT_PUBLIC_USER_KEY!;

export const getToken = () => {
  let token: string = "";

  token = localStorage.getItem(TOKEN_KEY)!;
  return token;
};
export const getUserId = () => {
  let user: string = "";

  user = localStorage.getItem(USER_KEY)!;
  return user;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setSession = (data: any) => {
  try {
    if (!data.token || !data.user) {
      throw new Error("Required session data missing.");
    }

    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(USER_KEY, data.user._id);
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
