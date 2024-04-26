import express from "express";
import ejsLayouts from "express-ejs-layouts";
import mainRouter from "./routes/main";
import { connectDB } from "./config/db";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.static("public"));
app.use(ejsLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`Connected on port ${PORT}`);
  connectDB();
});
