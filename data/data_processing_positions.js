console.log("Start");

const fs = require("fs");

function is_fr(el) {
  return el.DVRoles_Freelance != "";
}

function is_em(el) {
  return el.DVRoles_Employee != "";
}

fs.readFile("data_2021_main_dvs-soti_v1.1.json", (err, data) => {
  if (err) throw err;
  const d = JSON.parse(data);

  // Q13 Which one of these best describes your role as a freelancer?
  // Q18 Which one of these best describes your role at your organization?

  // general data sets
  let data_set_fr_all = d.filter((e) => is_fr(e));
  let data_set_fr_only = d.filter((e) => is_fr(e) & (e.DVRoles_ == 1));
  let data_set_fr_without_em = d.filter((e) => is_fr(e) & !is_em(e));
  let data_set_fr_and_em = d.filter((e) => is_fr(e) & is_em(e));
  let data_set_em_all = d.filter((e) => is_em(e));
  let data_set_em_only = d.filter((e) => is_em(e) & (e.DVRoles_ == 1));

  let answers = [
    "Analyst",
    "Scientist",
    "Engineer",
    "Developer",
    "Journalist",
    "Designer",
    "Cartographer",
    "Teacher",
    "Leadership (Manager, Director, VP, etc.)",
    "None of these describes my role",
  ];

  // Q13 positions for freelancer
  let selected_data_set_freelance = data_set_fr_all;
  let results_freelance = [];

  for (let i = 0; i < answers.length; i++) {
    let answer = answers[i];

    results_freelance[answer] = selected_data_set_freelance.filter(
      (obj) => obj.RoleAsFreelance === answer
    ).length;
  }
  console.log(results_freelance);

  /*******/

  // Q25 target audience for employees

  let selected_data_set_employees = data_set_em_only;
  let results_employee = [];

  for (let i = 0; i < answers.length; i++) {
    let answer = answers[i];

    results_employee[answer] = selected_data_set_employees.filter(
      (obj) => obj.RoleAsEmployee === answer
    ).length;
  }
  console.log(results_employee);
});
