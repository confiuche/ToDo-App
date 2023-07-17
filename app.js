import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js";
import { database } from "./config/dBconnect.js";
import taskRoutes from "./routes/taskRoutes.js";
import cors from "cors"
import globalErrorHandler from "./middlewares/globalErrorHandler.js"
//const bodyParser = require('body-parser');
import bodyParser from "body-parser";


dotenv.config()
database()

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
  
  app.use(
    cors({
      credentials: true,
      origin: true,
      allowedHeaders: "*",
    })
  );
  
  app.use(express.json());
  app.use(bodyParser.json());
  
  app.options("*", cors());

const PORT = process.env.PORT || 8080;


app.use("/api/v1/users",userRoutes);
app.use("/api/v1/task",taskRoutes);

app.use(globalErrorHandler)


app.listen(PORT, console.log(`App started at ${PORT}`))