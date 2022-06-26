import { HTTP } from "@/utils/http";

export default class PeopleService {
  static resource = "people";

  static getPeople(filters) {
    let params = "";
    if (filters) {
      params = `?${Object.keys(filters)
        .map((item) => `${item}=${filters[item]}`)
        .join("&")}`;
    }
    return HTTP.get(`${this.resource}${params}`);
  }

  static getPerson(id) {
    return HTTP.get(`${this.resource}/${id}`);
  }
}
