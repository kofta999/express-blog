import { Router } from "express";

const adminLayout = "../views/layouts/admin";

const router = Router();

router.get("/admin", async (req, res, next) => {
  try {
    res.render("admin/index", {
      title: "Admin Dashboard",
      layout: adminLayout,
    });
  } catch (error) {
    console.error(error);
  }
});

router.post("/admin", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    res.redirect("/admin");
  } catch (error) {
    console.error(error);
  }
});

export default router;
