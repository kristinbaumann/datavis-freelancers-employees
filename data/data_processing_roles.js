console.log("Start");

const fs = require("fs");

function combinations(str) {
  var fn = function (active, rest, a) {
    if (!active && !rest) return;
    if (!rest) {
      a.push(active);
    } else {
      fn(active + rest[0], rest.slice(1), a);
      fn(active, rest.slice(1), a);
    }
    return a;
  };
  return fn("", str, []);
}

function is_f(el) {
  return el.DVRoles_Freelance != "";
}

function is_e(el) {
  return el.DVRoles_Employee != "";
}

function is_a(el) {
  return el.DVRoles_Academic != "";
}

function is_s(el) {
  return el.DVRoles_Student != "";
}

function is_h(el) {
  return el.DVRoles_Hobbyist != "";
}

function is_p(el) {
  return el.DVRoles_PassiveIncome != "";
}

function is_n(el) {
  return el.DVRoles_PreferNot != "";
}

var combination_array = combinations("efsahpn").sort();
console.log("Total combinations", combination_array.length);
// console.log(combination_array);

fs.readFile("data_2021_main_dvs-soti_v1.1.json", (err, data) => {
  if (err) throw err;
  const d = JSON.parse(data);

  let result = [];

  for (let i = 0; i < combination_array.length; i++) {
    let combination_string = combination_array[i];
    // ef
    let fitted_rows = d.filter((row) => {
      let fit_bool = true;
      for (let j = 0; j < combination_string.length; j++) {
        const single_comb_answer = combination_string[j];
        switch (single_comb_answer) {
          case "e":
            fit_bool = fit_bool && is_e(row);
            break;
          case "f":
            fit_bool = fit_bool && is_f(row);
            break;
          case "a":
            fit_bool = fit_bool && is_a(row);
            break;
          case "s":
            fit_bool = fit_bool && is_s(row);
            break;
          case "p":
            fit_bool = fit_bool && is_p(row);
            break;
          case "h":
            fit_bool = fit_bool && is_h(row);
            break;
          case "n":
            fit_bool = fit_bool && is_n(row);
            break;
        }
      }
      fit_bool = fit_bool && row.DVRoles_ == combination_string.length;
      return fit_bool;
    });

    result.push({
      combination: combination_string,
      amount: fitted_rows.length,
    });
  }
  let result_filtered = result.filter((r) => r.amount > 0);

  console.log(
    "Count of existing combinations:",
    result_filtered.length,
    "(out of ",
    combination_array.length,
    " possible combinations)"
  );

  result_filtered = result_filtered.sort((a, b) => b.amount - a.amount);

  // omit "prefer not to say answer"
  result_filtered = result_filtered.filter((obj) => obj.combination != "n");

  // e only and f only
  const e_f_only_objects = result_filtered.filter(
    (obj) => obj.combination == "e" || obj.combination == "f"
  );

  // e and f combinations
  const ef_objects = result_filtered.filter((obj) =>
    obj.combination.includes("ef")
  );

  const other_objects = result_filtered.filter(
    (obj) =>
      !(
        obj.combination == "e" ||
        obj.combination == "f" ||
        obj.combination.includes("ef")
      )
  );

  console.log(e_f_only_objects, ef_objects, other_objects);

  function sum_up(arr) {
    return arr.reduce((acc, obj) => acc + obj.amount, 0);
  }

  let vis_data = [
    {
      employees_only: sum_up(
        result_filtered.filter((obj) => obj.combination == "e")
      ),
      freelancers_only: sum_up(
        result_filtered.filter((obj) => obj.combination == "f")
      ),
      employees_freelancers_and_others: sum_up(ef_objects),
      others: sum_up(other_objects),
    },
  ];

  console.log(vis_data);
});
