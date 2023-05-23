import bodyParser from "body-parser";
import express from "express";

const api = new express.Router();

const initApi = (app) => {
  app.set("json spaces", 2);
  app.use("/api", api);
};

api.use(bodyParser.json());

api.get("/", (req, res) => {
  res.json({ db: "local_api", numUsers: 1, numPosts: 1 });
});

api.get("/tests/get", (req, res) => {
  let value = req.query.value || null;
  res.json({ success: true, value });
});

api.post("/tests/post", (req, res) => {
  let value = req.body.value || null;
  res.json({ success: true, value });
});

api.get("/tests/error", (req, res) => {
  res.status(499).json({ error: "Test error" });
});

api.all("/tests/echo", (req, res) => {
  res.json({
    method: req.method,
    query: req.query,
    body: req.body
  });
});

api.get("/users", (req, res) => {
  res.json({ users: ["mchang"] });
});

api.get("/users/mchang", (req, res) => {
  res.json({
    id: "mchang",
    name: "Michael",
    avatarURL: "images/stanford.png",
    following: []
  });
});

api.get("/users/mchang/feed", (req, res) => {
  res.json({
    posts: [{
      user: {
        id: "mchang",
        name: "Michael",
        avatarURL: "images/stanford.png"
      },
      time: new Date(),
      text: "Welcome to the Generic Social Media App!"
    }]
  });
});

/* This is a catch-all route that logs any requests that weren't handled above.
   Useful for seeing whether other requests are coming through correctly */
api.all("/*", (req, res) => {
  let data = {
    method: req.method,
    path: req.url,
    query: req.query,
    body: req.body
  };
  console.log(data);
  res.status(500).json({ error: "Not implemented" });
});

export default initApi;
