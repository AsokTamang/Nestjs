//this file extends the type for the req session that use express
import 'express-session';
type User = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
};
declare module 'express-session' {
  interface SessionData {
    userId: User.id;
  }
}
