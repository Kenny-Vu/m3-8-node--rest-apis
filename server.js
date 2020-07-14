"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  handleClients,
  handleClientId,
  handleRemoveClient,
  handleNewClient,
} = require("./handlers/clientHandlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  .get("/clients", handleClients) //endpoint to access a list of all the clients.
  .get("/clients/:id", handleClientId) //endpoint to access one client based on its id.
  .post("/clients", handleNewClient) //endpoint to add a new client.

  .delete("/clients/:id", handleRemoveClient) //endpoint to delete a customer based on its id.

  .listen(8000, () => console.log(`Listening on port 8000`));
