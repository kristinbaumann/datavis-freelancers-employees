console.log("Start");

const fs = require("fs");

function is_fr(el) {
  return el.DVRoles_Freelance != "";
}

function is_em(el) {
  return el.DVRoles_Employee != "";
}

function mean(numbers) {
  var total = 0,
    i;
  for (i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return total / numbers.length;
}

fs.readFile("data_2021_main_dvs-soti_v1.1.json", (err, data) => {
  if (err) throw err;
  const d = JSON.parse(data);

  // general data sets
  let data_set_fr_all = d.filter((e) => is_fr(e));
  let data_set_fr_only = d.filter((e) => is_fr(e) & (e.DVRoles_ == 1));
  let data_set_fr_without_em = d.filter((e) => is_fr(e) & !is_em(e));
  let data_set_fr_and_em = d.filter((e) => is_fr(e) & is_em(e));
  let data_set_em_all = d.filter((e) => is_em(e));
  let data_set_em_only = d.filter((e) => is_em(e) & (e.DVRoles_ == 1));

  let answers = [
    "General Public",
    "Analysts",
    "Engineers",
    "Scientists",
    "Medical Professionals",
    "Product or Project Managers",
    "Policy Makers",
    "Executives",
    "Designers",
    "Researchers",
    "Students",
    "Educators",
    "Other Data Visualization Enthusiasts",
    "Myself",
    "Other (please specify)",
  ];

  // Q17 target audience for freelancer
  let selected_data_set_freelance = data_set_fr_all;
  let results_freelance = [];

  let keys_freelance = [
    "AudienceFreelance_Public",
    "AudienceFreelance_Analysts",
    "AudienceFreelance_Engineers",
    "AudienceFreelance_Scientists",
    "AudienceFreelance_Medical",
    "AudienceFreelance_ProdProjManagers",
    "AudienceFreelance_PolicyMakers",
    "AudienceFreelance_Execs",
    "AudienceFreelance_Designers",
    "AudienceFreelance_Researchers",
    "AudienceFreelance_Students",
    "AudienceFreelance_Educators",
    "AudienceFreelance_DVEnthusiasts",
    "AudienceFreelance_Self",
    "AudienceFreelance_Other__",
  ];

  for (let i = 0; i < answers.length; i++) {
    let answer = answers[i];

    results_freelance[keys_freelance[i]] = selected_data_set_freelance.filter(
      (obj) => obj[keys_freelance[i]] === answer
    ).length;
  }
  console.log(results_freelance);

  // total responses for subgroup freelance
  let total_responses_count_fr = selected_data_set_freelance.filter(
    (o) => o.AudienceFreelance_ > 0
  ).length;
  console.log("Total responses freelancers: " + total_responses_count_fr);

  // question with multi selection of answers, get average and mean
  let sum_single_selection_fr = 0;
  for (let j = 0; j < selected_data_set_freelance.length; j++) {
    sum_single_selection_fr +=
      selected_data_set_freelance[j].AudienceFreelance_;
  }

  let avg_selection_count_fr =
    sum_single_selection_fr / total_responses_count_fr;
  console.log("Average selection count freelancers: ", avg_selection_count_fr);

  let mean_fr = mean(
    selected_data_set_freelance.map((el) => el.AudienceFreelance_)
  );
  console.log("Mean: ", mean_fr);

  /*******/

  // Q25 target audience for employees

  let selected_data_set_employees = data_set_em_only;
  let results_employee = [];

  let keys_employee = [
    "AudienceEmployee_Public",
    "AudienceEmployee_Analysts",
    "AudienceEmployee_Engineers",
    "AudienceEmployee_Scientists",
    "AudienceEmployee_Medical",
    "AudienceEmployee_ProdProjManagers",
    "AudienceEmployee_PolicyMakers",
    "AudienceEmployee_Execs",
    "AudienceEmployee_Designers",
    "AudienceEmployee_Researchers",
    "AudienceEmployee_Students",
    "AudienceEmployee_Educators",
    "AudienceEmployee_DVEnthusiasts",
    "AudienceEmployee_Self",
    "AudienceEmployee_Other__",
  ];

  for (let i = 0; i < answers.length; i++) {
    let answer = answers[i];

    results_employee[keys_employee[i]] = selected_data_set_employees.filter(
      (obj) => obj[keys_employee[i]] === answer
    ).length;
  }
  console.log(results_employee);

  // total responses for subgroup employees
  let total_responses_count_em = selected_data_set_employees.filter(
    (o) => o.AudienceEmployee_ > 0
  ).length;
  console.log("Total responses employees: " + total_responses_count_em);

  // question with multi selection of answers, get average
  let sum_single_selection_em = 0;
  for (let j = 0; j < selected_data_set_employees.length; j++) {
    sum_single_selection_em += selected_data_set_employees[j].AudienceEmployee_;
  }

  let avg_selection_count_em =
    sum_single_selection_em / total_responses_count_em;
  console.log("Average selection count employees: ", avg_selection_count_em);

  let mean_em = mean(
    selected_data_set_employees.map((el) => el.AudienceEmployee_)
  );
  console.log("Mean: ", mean_em);
});
