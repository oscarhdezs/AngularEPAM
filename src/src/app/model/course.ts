export class Course {
  constructor(
     public title: string,
     public duration: number,
     public date: Date,
     public description: string,
     public topRated: boolean
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
