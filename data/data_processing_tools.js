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

  // general data sets
  let data_set_general = d;
  let data_set_fr_all = d.filter((e) => is_fr(e));
  let data_set_fr_only = d.filter((e) => is_fr(e) & (e.DVRoles_ == 1));
  let data_set_fr_without_em = d.filter((e) => is_fr(e) & !is_em(e));
  let data_set_fr_and_em = d.filter((e) => is_fr(e) & is_em(e));
  let data_set_em_all = d.filter((e) => is_em(e));
  let data_set_em_only = d.filter((e) => is_em(e) & (e.DVRoles_ == 1));

  // Q34 technologies, compare

  let answers = [
    "ArcGIS",
    "D3.js",
    "Angular",
    "Datawrapper",
    "Excel",
    "Flourish",
    "ggplot2",
    "Gephi",
    "Google Data Studio",
    "Highcharts",
    "Illustrator",
    "Java",
    "Leaflet",
    "Mapbox",
    "kepler.gl",
    "Observable",
    "Plotly",
    "Power BI",
    "PowerPoint",
    "Python",
    "QGIS",
    "Qlik",
    "R",
    "React",
    "Tableau",
    "Vega",
    "Vue",
    "Web Components",
    "WebGL",
    "Pen & paper",
    "Physical materials (other than pen and paper)",
    "Canvas",
    "P5/Processing",
    "Other (please specify)",
  ];

  let keys = [
    "ToolsForDV_ArcGIS",
    "ToolsForDV_D3",
    "ToolsForDV_Angular",
    "ToolsForDV_Datawrapper",
    "ToolsForDV_Excel",
    "ToolsForDV_Flourish",
    "ToolsForDV_ggplot2",
    "ToolsForDV_Gephi",
    "ToolsForDV_GoogleDataStudio",
    "ToolsForDV_Highcharts",
    "ToolsForDV_Illustrator",
    "ToolsForDV_Java",
    "ToolsForDV_Leaflet",
    "ToolsForDV_Mapbox",
    "ToolsForDV_KeplerGL",
    "ToolsForDV_Observable",
    "ToolsForDV_Plotly",
    "ToolsForDV_PowerBI",
    "ToolsForDV_PowerPoint",
    "ToolsForDV_Python",
    "ToolsForDV_QGIS",
    "ToolsForDV_Qlik",
    "ToolsForDV_R",
    "ToolsForDV_React",
    "ToolsForDV_Tableau",
    "ToolsForDV_Vega",
    "ToolsForDV_Vue",
    "ToolsForDV_WebComponents",
    "ToolsForDV_WebGL",
    "ToolsForDV_PenPaper",
    "ToolsForDV_PhysicalMaterials",
    "ToolsForDV_Canvas",
    "ToolsForDV_P5orProcessing",
    "ToolsForDV_Other__",
  ];
  let results = [];

  let selected_data_set = data_set_fr_all;

  for (let i = 0; i < answers.length; i++) {
    let answer = answers[i];

    // results[keys[i]] = selected_data_set.filter(
    //   (obj) => obj[keys[i]] === answer
    // ).length;

    results.push(
      selected_data_set.filter((obj) => obj[keys[i]] === answer).length
    );
  }
  console.log(results);

  // total responses for subgroup freelance
  let total_responses_count = selected_data_set.filter(
    (o) => o.ToolsForDV_ > 0
  ).length;
  console.log("Total responses: " + total_responses_count);
});
