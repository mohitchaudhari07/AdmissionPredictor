const cookieParser = require("cookieparser");
const { predictColleges } = require("../../predictor");

// Controller function for handling prediction requests
async function predict(req, res) {
  const { percentile, category, branch } = req.body;

  const results = await predictColleges(percentile, category, branch);

  res.json(results);
}

module.exports = {
  predict,
};
