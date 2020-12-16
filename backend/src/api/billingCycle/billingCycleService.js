const CicloPagamentos = require("./billingCycle");
const errorHandler = require('../common/errorHandler');

CicloPagamentos.methods(["get", "post", "put", "delete"]);
CicloPagamentos.updateOptions({ new: true, runValidators: true });
CicloPagamentos.after("post", errorHandler).after("put", errorHandler);

CicloPagamentos.route("get", (req, res, next) => {
  CicloPagamentos.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(500).json({ errors: [error] });
    }
  });
});

CicloPagamentos.route("count", (req, res, next) => {
  CicloPagamentos.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      res.json({ value });
    }
  });
});

CicloPagamentos.route("summary", (req, res, next) => {
  CicloPagamentos.aggregate(
    {
      $project: {
        credit: { $sum: "$credits.value" },
        debt: { $sum: "$debts.value" },
      },
    },
    {
      $group: {
        _id: null,
        credit: { $sum: "$credit" },
        debt: { $sum: "$debt" },
      },
    },
    {
      $project: { _id: 0, credit: 1, debt: 1 },
    },
    (error, result) => {
      if (error) {
        res.status(500).json({ errors: [error] });
      } else {
        res.json(result[0] || { credit: 0, debt: 0 });
      }
    }
  );
});
module.exports = CicloPagamentos;
