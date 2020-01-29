export class Author {
  constructor(
    public id: number,
    public name: string) {
  }

  public get_id(): number {
    return this.id;
  }

  public get_name(): string {
    return this.name;
  }
}
