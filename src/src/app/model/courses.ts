import {Author} from './author';

export class Courses {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public isTopRated: boolean,
    public date: Date,
    public length: number,
    public author: Author
  ) {}

  public get_id(): number {
    return this.id;
  }
  public get_title(): string {
    return this.name;
  }
  public get_description(): string {
    return this.description;
  }
  public get_topRated(): boolean {
    return this.isTopRated;
  }
  public get_date(): Date {
    return this.date;
  }
  public get_duration(): number {
    return this.length;
  }
  public get_author(): Author {
    return this.author;
  }
}
