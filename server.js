import app from "./src/app.js";
import "./src/config/env.js";

import swaggerUi from "swagger-ui-express";
import swaggerDocsJson from "./swagger.json" with {type: "json"};

const port = process.env.PORT || 8080;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocsJson));

app.listen(port, () => {
  console.log(`\nServidor rodando na porta ${port}`);
});
