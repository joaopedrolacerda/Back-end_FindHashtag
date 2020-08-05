import { uuid } from 'uuidv4';

class message {
  id: string;

  user: string;

  text: string;

  date: Date;

  type: string;

  constructor(user: string, text: string, date: Date, type: string) {
    this.id = uuid();
    this.user = user;
    this.text = text;
    this.date = date;
    this.type = type;
  }
}
export default message;
