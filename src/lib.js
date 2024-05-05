export const Config = {
    cookiePassword: process.env.SECRET_KEY,
    cookieName: "cookies-name",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: new Date(Date.now() + 10 * 1000), // valid for 10 seconds from current time
  };
  

export const sessionOptions = {
  password: Config.cookiePassword,
  cookieName: Config.cookieName,
  cookieOptions: {
    httpOnly: Config.httpOnly,
    secure: Config.secure,
    maxAge: Config.maxAge,
  },
};

