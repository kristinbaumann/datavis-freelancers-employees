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

  // console.log(res);

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

  let data_set_fr_only = d.filter((e) => is_fr(e) & (e.DVRoles_ == 1));
  let data_set_fr_without_em = d.filter((e) => is_fr(e) & !is_em(e));
  let data_set_fr_em = d.filter((e) => is_fr(e) & is_em(e));
  let data_set_em_only = d.filter((e) => is_em(e) & (e.DVRoles_ == 1));
  let data_set_em_all = d.filter((e) => is_em(e));

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
