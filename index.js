const path = require("path");
const http = require("http");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");
const { urlencoded, json } = require("body-parser");
const server = http.createServer(app);
dotenv.config();

// connect to DB
mongoose.connect(
  "mongodb+srv://IrzamTariq:Mr.Tariq786@cluster0.lvn9b.mongodb.net/safedriver?retryWrites=true&w=majority", //process.env.DB_CONNECT
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connect to DB!")
);

// API CONFIGS
app.use(json({ limit: "200mb" }));
app.use(urlencoded({ limit: "200mb", extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));
readdirSync("./controller").map((r) =>
  app.use("/api", require("./controller/" + r))
);

// SERVICER LISTEN
server.listen(3000, () => {
  console.log("server is running at 3000 port");
});
