import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors(
        {
            origin: process.env.CORS_ORIGIN,
            credentials: true,
            allowedHeaders:["Content-Type", "Authorization"]
        }
    )
)

// Express configuration
app.use(express.json({limt:"20kb"}));
app.use(express.urlencoded({extended:true, limit:"20kb"}));
app.use(express.static("public"));
app.use(cookieParser());
// Express configuration

// Routes Import

// Routes Import

// Routes Declarations

// Routes Declarations

export {app};
