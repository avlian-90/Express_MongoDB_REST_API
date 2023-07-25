import express from "express";
import connectDb from "./config/dbConnection.js";
import errorHandler from "./middleware/errorHandler.js";
import router from "./routes/userRoutes.js";


connectDb();
const app = express();

const port = process.env.PORT || 5001;

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use("/api/users", router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});