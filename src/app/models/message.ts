export class Message {
  constructor(
    public id: string,
    public message: string,
    public user_id: string,
    public channel_id: string,
    public time: number) {}
}
