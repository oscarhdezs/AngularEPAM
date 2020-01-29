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
}
