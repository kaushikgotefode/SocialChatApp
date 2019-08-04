const Validator = require("validator");
const isEmpty = require("./isEmpty");
module.exports = validateEducationInputs = data => {
  let errors = {};
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldOfStudy = !isEmpty(data.fieldOfStudy) ? data.fieldOfStudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }
  if (Validator.isEmpty(data.fieldOfStudy)) {
    errors.fieldOfStudy = "FieldOfStudy field is required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
