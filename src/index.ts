import { Hono } from "hono"

const app = new Hono()

app.get("/", (c) => {
  return c.text(`Your IP address is ${c.req.header('cf-connecting-ip')} or ${c.req.header('x-real-ip')}`)
})

app.get("/ip", (c) => {
  const headerObj = {}
  for (const [key, value] of c.req.raw.headers.entries()) {
    headerObj[key] = value
  }
  return c.json(headerObj)
})

export default app
