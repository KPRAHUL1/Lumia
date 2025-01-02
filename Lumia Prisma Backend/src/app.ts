import express,{Express, Request,Response} from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app:Express=express();
const host =process.env.APP_HOST || 'localhost';
const port = process.env.APP_PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("host",host);
app.set("port",port);


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.append('Access-Control-Allow-Headers', '*');
    next();
  });

  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });


//   const authApi = require('./modules/auth/auth.route');
const categoryApi = require('./modules/category/category.route')
const brandApi    = require('./modules/brand/brand.route')
const socialMediaApi =require('./modules/socilamedia/socialmedia.route')
const productApi  = require('./modules/product/product.route')

// //Routes
// app.use('api/auth',authApi);
app.use('/api/category',categoryApi)
app.use('/api/brand',brandApi)
app.use('/api/socialmedia',socialMediaApi)
app.use('/api/product',productApi)

  app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.listen(app.get("port"), () => {
  console.log(
    "Server started at %s : %d ",
    app.get("host"),
    app.get("port"),
  );
});

module.exports = app;