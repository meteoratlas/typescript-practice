import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

// T = generic type, TP = prop for that generic type
export class Collection<T, TP> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootURL: string, public deserialize: (json: TP) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootURL).then((res: AxiosResponse) => {
      res.data.forEach((value: TP) => {
        this.models.push(this.deserialize(value));
      });
    });
    this.trigger("change");
  }
}
