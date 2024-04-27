import express from "express";
import ejsLayouts from "express-ejs-layouts";
import mainRouter from "./routes/main";
import adminRouter from "./routes/admin";
import { connectDB } from "./config/db";
import { json, urlencoded } from "body-parser";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(express.static("public"));
app.use(ejsLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use(mainRouter);
app.use(adminRouter);

app.listen(PORT, () => {
  console.log(`Connected on port ${PORT}`);
  connectDB();
});
