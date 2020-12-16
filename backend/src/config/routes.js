const express = require("express");

module.exports = function (server) {
  const router = express.Router();

  server.use("/api", router);

  //Rotas ciclo de pagamento 

  const CicloDePagamentos = require('../api/billingCycle/billingCycleService')
  CicloDePagamentos.register(router, '/billingCycles');
};
