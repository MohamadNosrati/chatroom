import { Query } from "mongoose";
import { IUser, IUserParams } from "../../users/types";

class ApiFeatures {
  query: Query<IUser[], IUser>;
  queryStr: Partial<IUserParams>;
  constructor(query: Query<IUser[], IUser>, queryStr: any) {
    this.query = query;
    this.queryStr = queryStr;
  }

  pagination() {
    this.queryStr.page = this.queryStr.page || 1;
    this.queryStr.limit = this.queryStr.limit || 10;
    this.query = this.query
      .skip(this.queryStr.limit * (this.queryStr.page - 1))
      .limit(this.queryStr.limit);
    return this;
  }

  filtering() {
    const filters : any = {
      email: new RegExp(this.queryStr.email as string) || undefined,
      userName: new RegExp(this.queryStr.userName as string) || undefined,
      createdAt: { $gte: this.queryStr.created_from || 0 , $lte: this.queryStr.created_to || Date.now() },
    };
    this.queryStr.isActive ? filters.isActive = this.queryStr.isActive : null
    this.query = this.query.find(filters);
    return this;
  }

  sorting() {
    this.queryStr.sortBy = this.queryStr.sortBy || "createdAt";
    this.query = this.query.sort([
      [this.queryStr.sortBy, `${this.queryStr.sortOrder ? "asc" : "desc"}`],
    ]);
    return this;
  }

  selectFields(fields: string[]) {
    this.query = this.query.select(fields);
    return this;
  }
}

export default ApiFeatures;
