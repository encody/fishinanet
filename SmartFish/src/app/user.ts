export class User {
  id: number;
  userName: string;
  password: string;
  salt: number[];
  ts: Date;
  dt: Date;
}