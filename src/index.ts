import { Hono } from "hono"

const app = new Hono()

app.get("/", (c) => {
  return c.text("hello")
})

app.get("/ip", (c) => {
  const headerObj = {}
  for (const [key, value] of c.req.raw.headers.entries()) {
    headerObj[key] = value
  }
  return c.json(headerObj)
})

export default app
