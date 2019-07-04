
export class Anime {

  private _id: number;
  private _title: string;
  private _description: string;
  private _picture: string;
  private _beginDate: Date;
  private _endDate: Date;
  private _isFinish: boolean;
  private _nbTotal: number;
  private _mangaId: number;

  public static New(obj: any): Anime {
    try {
      const anime = new Anime(obj.Id, obj.Title, obj.Description, obj.Picture, obj.BeginDate, obj.EndDate, obj.IsFinish,
        obj.NbTotal, obj.MangaId);
      return anime;
    } catch (e) {
      return null;
    }
  }

  public static NewFromArray(objs: any[]): Anime[] {
    const animes: Anime[] = [];
    objs.forEach(
      (obj) => {
        animes.push(Anime.New(obj));
      }
    );
    return animes;
  }

  public static NewEmpty(): Anime {
    try {
      const anime = new Anime(-1, '', '', '', null, null, false, -1, -1);
      return anime;
    } catch (e) {
      return null;
    }
  }

  constructor(id: number, title: string, description: string, picture: string, beginDate: Date, endDate: Date,
              isFinish: boolean, nbTotal: number, mangaId: number) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._picture = picture;
    this._beginDate = beginDate;
    this._endDate = endDate;
    this._isFinish = isFinish;
    this._nbTotal = nbTotal;
    this._mangaId = mangaId;
  }

  get dates(): string {
    if (this.beginDate && this.endDate) {
      return new Date(this.beginDate).getFullYear() + ' - ' + new Date(this.endDate).getFullYear();
    } else if (this.beginDate && !this.endDate) {
      return new Date(this.beginDate).getFullYear() + ' - ?';
    } else if (!this.beginDate && this.endDate) {
      return '? - ' + new Date(this.endDate).getFullYear();
    } else {
      return '? - ?';
    }
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  get beginDate(): Date {
    return this._beginDate;
  }

  set beginDate(value: Date) {
    this._beginDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get isFinish(): boolean {
    return this._isFinish;
  }

  set isFinish(value: boolean) {
    this._isFinish = value;
  }

  get nbTotal(): number {
    return this._nbTotal;
  }

  set nbTotal(value: number) {
    this._nbTotal = value;
  }

  get mangaId(): number {
    return this._mangaId;
  }

  set mangaId(value: number) {
    this._mangaId = value;
  }
}
