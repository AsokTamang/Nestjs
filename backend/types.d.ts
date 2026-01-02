//this file extends the type for the req session that use express
import 'express-session';
type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};
declare module 'express-session' {
  interface SessionData {
    userId: User.id;
  }
}
