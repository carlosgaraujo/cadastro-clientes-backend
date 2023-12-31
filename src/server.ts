import app from "./app";
import { AppDataSource } from "./data-source";
import "dotenv/config"

AppDataSource.initialize()
  .then(() => {
    console.log("Server is running");
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
      console.log("Servidor executando");
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
