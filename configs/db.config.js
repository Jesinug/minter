
const mongoose = require("mongoose"); //Para conectarnos con la base de datos.
mongoose
  .connect(`${process.env.DBURL}`, {
    useNewUrlParser: true, //Evitar warning
    useUnifiedTopology: true, //Evitar warning
  })
  .then(() => console.log("Conectado al Mongo!"))
  .catch((error) => console.error(error));
module.exports = mongoose;