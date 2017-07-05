import {Message} from "./message";

export class Channel {
  constructor(public id: string, public name: string, public messages: Message[], public color?: string) {}
}
