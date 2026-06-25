import express from "express";
import cros from "cors";
import cookieParser from "cookie-parser";

const app = express ();

app.use(cros({
    origin: process.env.CORS_ORIGIN,
   credentials : true
}))
//configration->middleware
app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended:true, limit:'16kb'}));
app.use(express.static('public'));//store some file/folder in public folder and access it from outside

app.use(cookieParser());


export default app;