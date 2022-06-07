import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config({
  silent: true,
});

const router = express.Router();
const isProd = process.env.NODE_ENV === "production";

const sendHtmlFile = (res, fileName) => {
  if (isProd) {
    res.sendFile(path.join(process.cwd(), "dist", fileName));
    return;
  }
  res.sendFile(path.join(process.cwd(), "src", fileName));
};

router.route("/").get((req, res) => {
	sendHtmlFile(res, `index.html`);
});

export default router;