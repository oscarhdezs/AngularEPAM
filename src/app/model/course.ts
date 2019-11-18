export class Course {
  constructor(
    private title: string,
    private duration: number,
    private date: Date,
    private description: string,
    private topRated: boolean
  ) {}

  public get_title(): string {
    return this.title;
  }

  public get_duration(): number {
    return this.duration;
  }

  public get_date(): Date {
    return this.date;
  }

  public get_description(): string {
    return this.description;
  }

  public get_topRated(): boolean {
    return this.topRated;
  }
}
