import express from "express";
import logger from "./logger";
import morgan from "morgan";
import router from "./routes";

const dev = process.env.NODE_ENV !== "production";
const port = process.env.SERVER_PORT || 3000;

(async () => {
  try {
    const expressApp = express();
    if (dev) {
      expressApp.use(cors());
    }
    expressApp.use(morgan("short"));
		console.log(process.cwd())
		expressApp.use(express.static("dist/assets"));
    expressApp.use("/", router);
    expressApp.all("*", (req, res) => handle(req, res));
    process.on("SIGINT", () => process.exit());
    const httpServer = expressApp.listen(port, (err) => {
      if (err) throw err;
      logger.info(
        `> Ready on localhost:${port} - env ${
          dev ? "development" : "production"
        }`
      );
    });
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
})();