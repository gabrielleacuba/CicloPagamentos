const restful = require("node-restful");
const mongoose = restful.mongoose;

const esquemaCredito = new mongoose.Schema({
  name: { type: String, required: true },
  value: {
    type: Number,
    min: 0,
    required: [true, "Informe o valor do crédito"],
  },
});

const esquemaDebito = new mongoose.Schema({
  name: { type: String, required: true },
  value: {
    type: Number,
    min: 0,
    required: true,
  },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ["PAGO", "PENDENTE", "AGENDADO"],
  },
});

const esquemaCicloPagamento = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, min: 1970, max: 2050, required: true },
  credits: [esquemaCredito],
  debts: [esquemaDebito],
});

module.exports = restful.model("CicloPagamentos", esquemaCicloPagamento);
