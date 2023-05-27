import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js";
import { database } from "./config/dBconnect.js";
import taskRoutes from "./routes/taskRoutes.js";
import cors from "cors"
import globalErrorHandler from "./middlewares/globalErrorHandler.js"


dotenv.config()
database()

const app = express();

app.use((req,res,next) => {
    res.setHeader("Access-Contol-Allow-Origin", "*");
    res.setHeader("Access-Contol-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader(
        "Access-Content-Allow-Methods",
        "GET,POST,PUT,DELETE,PATCH,OPTIONS"
    );
    next();
})
app.use(
    cors({
        credientials:true,
        origin:true,
        allowedHeaders: "*"
    })
)

app.use(express.json());
app.options("*", cors())

const PORT = process.env.PORT || 8080;


app.use("/api/v1/users",userRoutes);
app.use("/api/v1/task",taskRoutes);

app.use(globalErrorHandler)


app.listen(PORT, console.log(`App started at ${PORT}`))