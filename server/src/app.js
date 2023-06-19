const express = require("express");
const morgan = require("morgan");
const DBConnection = require("./dbConnection");
require("dotenv").config();
const port = process.env.PORT || 3000;
const { roles } = require("../utils/constants");
const isAuththenticated = require("../middlewares/isAuthenticated");
const { errorMiddleware } = require("../middlewares/error");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//initialization
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
DBConnection();
app.use(morgan("dev"));
app.use(express.static("public"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  res.send("working");
});
app.use("/auth", require("../routes/auth.route"));
app.use("/user", isAuththenticated, require("../routes/user.route"));
app.use("/product", require("../routes/product.routes"));
app.use("/admin", require("../routes/admin.route"));

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`🚀 is running at https://localhost:${port}`);
});
