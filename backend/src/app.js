import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api-routes.js";
import errorMiddleware from "./middlewares/error-middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.use(errorMiddleware)

export default app;
