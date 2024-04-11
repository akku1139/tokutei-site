import { Hono } from "hono"

const app = new Hono();

app.get("/ip", (c) => {
  const headerObj = {}
  for (const [key, value] of res.headers.entries()) {
    headerObj[key] = value
  }
  return c.json(headerObj)
}
