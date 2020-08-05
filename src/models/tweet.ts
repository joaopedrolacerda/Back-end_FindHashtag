class tweet {
  data?: object;
  created_at?: string;
  id?: Number;
  id_str?: string;
  text?: string;

  constructor(
    data: object,
    create_at: string,
    id: Number,
    id_str: string,
    text: string,
  ) {
    this.data = data;
    this.created_at = create_at;
    this.id = id;
    this.id_str = id_str;
    this.text = text;
  }
}
export default tweet;
