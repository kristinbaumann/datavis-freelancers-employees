console.log("Start");

const fs = require("fs");

function is_fr(el) {
  return el.DVRoles_Freelance != "";
}

function is_em(el) {
  return el.DVRoles_Employee != "";
}

function is_ac(el) {
  return el.DVRoles_Academic != "";
}

function is_st(el) {
  return el.DVRoles_Student != "";
}

fs.readFile("data_2021_main_dvs-soti_v1.1.json", (err, data) => {
  if (err) throw err;
  const d = JSON.parse(data);

  // Roles in general
  let res = {
    fr: d.filter((e) => is_fr(e)).length,
    em: d.filter((e) => is_em(e)).length,
    ac: d.filter((e) => is_ac(e)).length,
    st: d.filter((e) => is_st(e)).length,
    fr_em: d.filter((e) => is_fr(e) & is_em(e)).length,
    fr_ac: d.filter((e) => is_fr(e) & is_ac(e)).length,
    fr_st: d.filter((e) => is_fr(e) & is_st(e)).length,
    em_ac: d.filter((e) => is_em(e) & is_ac(e)).length,
    em_st: d.filter((e) => is_em(e) & is_st(e)).length,
    ac_st: d.filter((e) => is_ac(e) & is_st(e)).length,
    fr_em_ac: d.filter((e) => is_fr(e) & is_em(e) & is_ac(e)).length,
    fr_st_ac: d.filter((e) => is_fr(e) & is_st(e) & is_ac(e)).length,
    fr_em_st: d.filter((e) => is_fr(e) & is_st(e) & is_em(e)).length,
    em_st_ac: d.filter((e) => is_em(e) & is_st(e) & is_ac(e)).length,
    fr_em_ac_st: d.filter((e) => is_fr(e) & is_em(e) & is_st(e) & is_ac(e))
      .length,
  };

  console.log(res);

  // Freelancer Roles
  let responses = [
    "Analyst",
    "Scientist",
    "Engineer",
    "Developer",
    "Journalist",
    "Designer",
    "Cartographer",
    "Teacher",
    "Leadership",
    "None",
  ];
  let roleResults = [];

  let data_set = d.filter((e) => is_fr(e));

  for (let i = 0; i < responses.length; i++) {
    let response = responses[i];

    roleResults[response] = data_set.filter(
      (obj) => obj.RoleAsFreelance === response
    ).length;
  }
  //console.log(roleResults);

  // Q17 Who do you make vis for? difference between freelancer only and freelance with employment

  let data_set_fr_only = d.filter((e) => is_fr(e) & (e.DVRoles_ == 1));
  let data_set_fr_em = d.filter((e) => is_fr(e) & is_em(e));
  let data_set_em_only = d.filter((e) => is_em(e) & (e.DVRoles_ == 1));
  let audience_results = [];

  let responses_audience = [
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

  let keys = [
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

  for (let i = 0; i < responses_audience.length; i++) {
    let response = responses_audience[i];

    audience_results[keys[i]] = data_set_em_only.filter(
      (obj) => obj[keys[i]] === response
    ).length;
  }
  // console.log(audience_results);

  // total responses for subgroup
  let c = data_set_em_only.filter((o) => o.AudienceEmployee_ > 0).length;
  // console.log(c);

  // Q15 and Q22 choice of tools compare between freelancers and employees

  let toolChoiceFreelanceResponses = [
    "I’m able to choose my own tools",
    "Clients choose the tool(s) and it causes no problems",
    "Clients choose the tool(s) and it causes some problems",
    "Clients choose the tool(s) and it causes major problems",
  ];
  let toolChoiceFreeResults = [];

  for (let i = 0; i < toolChoiceFreelanceResponses.length; i++) {
    let response = toolChoiceFreelanceResponses[i];

    toolChoiceFreeResults[response] = d.filter(
      (obj) => obj.ToolsChoiceFreelance === response
    ).length;
  }
  // console.log(toolChoiceFreeResults);

  let r = d.filter((o) => o.ToolsChoiceFreelance != "").length;
  // console.log(r);

  let toolChoiceEmployeeResponses = [
    "I’m able to choose my own tools",
    "We have a set list of tools we’re expected to use for data visualization and this causes no problems",
    "We have a set list of tools we’re expected to use for data visualization and it causes some problems",
    "We have a set list of tools we’re expected to use for data visualization and this causes major problems",
  ];
  let toolChoiceEmResults = [];

  for (let i = 0; i < toolChoiceEmployeeResponses.length; i++) {
    let response = toolChoiceEmployeeResponses[i];

    toolChoiceEmResults[response] = d.filter(
      (obj) => obj.ToolsChoiceEmployee === response
    ).length;
  }
  // console.log(toolChoiceEmResults);
  r = d.filter((o) => o.ToolsChoiceEmployee != "").length;
  // console.log(r);

  // Q34 technologies, compare

  let responses_tools = [
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

  let keys_tools = [
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
  let tools_results = [];

  for (let i = 0; i < responses_tools.length; i++) {
    let response = responses_tools[i];

    tools_results[keys_tools[i]] = data_set_em_only.filter(
      (obj) => obj[keys_tools[i]] === response
    ).length;
  }
  // console.log(tools_results);

  r = data_set_fr_only.filter((o) => o.ToolsForDV_ > 0).length;
  // console.log(r);

  // Q36 vis communication compare between frees and ems

  let responses_channel = [
    "Embedded in a tool",
    "Dashboard",
    "Scrollytelling",
    "Static web page",
    "Interactive notebook",
    "Document or report",
    "Presentations",
    "Email",
    "Newspaper or magazine",
    "Peer reviewed journal publication",
    "Physical handout or Printed on paper",
    "Physical medium other than printed on paper",
    "Augmented or Virtual reality",
    "Installation",
    "App",
    "Video",
    "Social media",
    "Other (please specify)",
  ];

  let keys_channel = [
    "DVSharingChannels_EmbeddedInTool",
    "DVSharingChannels_Dashboard",
    "DVSharingChannels_Scrollytelling",
    "DVSharingChannels_StaticWebPage",
    "DVSharingChannels_InteractiveNotebook",
    "DVSharingChannels_DocumentOrReport",
    "DVSharingChannels_Presentations",
    "DVSharingChannels_Email",
    "DVSharingChannels_NewspaperorMagazine",
    "DVSharingChannels_PeerReviewedJournal",
    "DVSharingChannels_PrintedOnPaper",
    "DVSharingChannels_OtherPhysicalMedium",
    "DVSharingChannels_VRorAR",
    "DVSharingChannels_Installation",
    "DVSharingChannels_App",
    "DVSharingChannels_Video",
    "DVSharingChannels_SocialMedia",
    "DVSharingChannels_Other__",
  ];
  let channel_results = [];

  for (let i = 0; i < responses_channel.length; i++) {
    let response = responses_channel[i];

    channel_results[keys_channel[i]] = data_set_em_only.filter(
      (obj) => obj[keys_channel[i]] === response
    ).length;
  }
  // console.log(channel_results);

  // total responses for subgroup
  let v = data_set_em_only.filter((o) => o.DVSharingChannels_ > 0).length;
  // console.log(v);
});
