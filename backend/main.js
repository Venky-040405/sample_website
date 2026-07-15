import express from 'express';
import cors from 'cors';
import new_routes from './routes/new_routes.js';
import connectDB from "./lib/db.js";

const app = express();
const port = 5000;

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend.up.railway.app"
    ]
  })
);
app.use("/new_routes", new_routes);


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

