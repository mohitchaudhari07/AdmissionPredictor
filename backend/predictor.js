const csv = require("csvtojson");
const path = require("path");

let colleges = [];

// Load CSV once
async function loadData() {
  const filePath = path.join(__dirname, "data", "CAP_I.csv");
  colleges = await csv().fromFile(filePath);

}

loadData();
function normalizeCategory(code = "") {
  code = code.toUpperCase();

  if (code.includes("OPEN")) return "OPEN";
  if (code.includes("OBC")) return "OBC";
  if (code.includes("SC")) return "SC";
  if (code.includes("ST")) return "ST";

  return "OTHER";
}

function normalizeBranch(input = "") {
  input = input.toLowerCase();

  if (input.includes("cse")) return "computer";
  if (input.includes("it")) return "information";
  if (input.includes("extc")) return "electronics";
  if (input.includes("mech")) return "mechanical";
  if (input.includes("civil")) return "civil";
  if (input.includes("electrical")) return "electrical";
  if (input.includes("ai")) return "artificial";

  return input;
}
function Status(input = "") {
  input = input.toLowerCase();

  if(input.includes("government")) return "government";
  if(input.includes("un-aided")) return "un-aided";

  return input;
}

function getCutoffValue(college) {
  const key = Object.keys(college).find((k) =>
    k.toLowerCase().includes("percentile"),
  );

  return parseFloat(college[key]);
}




function predictColleges(percentile, category, branch) {
  const branchKey = normalizeBranch(branch);

  const results = colleges
    .filter((college) => {
      const cat = normalizeCategory(college["Caste/Category"]);

      const branchName = college["Course Name"].toLowerCase();

      const branchMatch = branchName.includes(branchKey);

      return cat === category && branchMatch;
    })
    .map((college) => {
      const cutoff = getCutoffValue(college);

      const diff = percentile - cutoff;

      if (diff < -3) return null; // Filter out very low chances

      let chance;

      if (diff >= 0) chance = "Safe";
      else if (diff >= -1) chance = "High";
      else if (diff >= -2) chance = "Moderate";
      else chance = "Low";

      return {
        college: college["College Name"],
        branch: college["Course Name"],
        cutoff,
        chance,
        status: Status(college["Status"]),
        code: college["College Code"],
      };
    }).filter(Boolean); // Remove nulls

  return results.sort((a, b) => b.cutoff - a.cutoff);
}

module.exports = {
  predictColleges,
};
