export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
    public topic: string,
    public score: number,
    public timePreference: string,
    public subscribe: boolean
  ) {}
}
