import { http, HttpResponse } from "msw";
import heros from "./heros";

export const handlers = [
  // Intercept the "GET /resource" request.
  http.get("https://gateway.marvel.com/v1/public/characters", () => {
    return HttpResponse.json({ data: { results: heros } });
  }),
];
