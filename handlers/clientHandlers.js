const { v4: uuidv4 } = require("uuid");
const { clients } = require("../data/clients");

// write your handlers here...

const handleClients = (req, res) => {
  res.status(200);
  res.send(clients);
};
const handleClientId = (req, res) => {
  const clientId = req.params.id;
  const clientProfile = clients.find((client) => client.id === clientId);
  res.status(200);
  res.send(clientProfile);
};
const handleNewClient = (req, res) => {
  let newClient = req.body;
  let clientEmail = newClient.email;
  let emailExists = false;
  clients.forEach((client) => {
    if (client.email === clientEmail) {
      emailExists = true;
    }
  });
  newClient.id = 123;
  if (!emailExists) {
    newClient.id = uuidv4();
    clients.push(newClient);
    res.status(201);
    res.send(clients);
  } else {
    res.status(400);
    res.send("This email already exists... ʘ︵ʘ");
  }
};

const handleRemoveClient = (req, res) => {
  const clientId = req.params.id;
  const clientProfile = clients.find((client) => client.id === clientId);
  const clientIndex = clients.indexOf(clientProfile);
  clients.splice(clientIndex, 1);
  res.status(200);
  res.send(clients);
};

module.exports = {
  handleClients,
  handleClientId,
  handleRemoveClient,
  handleNewClient,
};
