export class User {

  private _id: number;
  private _name: string;
  private _email: string;
  private _createAt: Date;
  private _updateAt: Date;

  public static New(obj: any): User {
    try {
      const user = new User(obj.Id, obj.Name, obj.Email, obj.CreateAt, obj.UpdateAt);
      return user;
    } catch (e) {
      return null;
    }
  }

  public static NewFromArray(objs: any[]): User[] {
    const users: User[] = [];
    objs.forEach(
      (obj) => {
        users.push(User.New(obj));
      }
    );
    return users;
  }

  public static NewEmpty(): User {
    try {
      const user = new User(-1, '', '', null, null);
      return user;
    } catch (e) {
      return null;
    }
  }

  constructor(id: number, name: string, email: string, createAt: Date, updateAt: Date) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._createAt = createAt;
    this._updateAt = updateAt;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get createAt(): Date {
    return this._createAt;
  }

  set createAt(value: Date) {
    this._createAt = value;
  }

  get updateAt(): Date {
    return this._updateAt;
  }

  set updateAt(value: Date) {
    this._updateAt = value;
  }

}
