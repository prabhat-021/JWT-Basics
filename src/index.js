const express = require("express");
const noteRoter = require("./routes/noteRoutes");
const userRoter = require("./routes/userRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
// mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost:27017/prabhat", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection Sucessfully ...")).catch((err) => console.log(err));


app.use("/users", userRoter);
app.use("/note", noteRoter);

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});


