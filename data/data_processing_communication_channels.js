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

  // Q36 communication channels
  let answers = [
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

  let keys = [
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
  let results = [];

  let selected_data_set = data_set_em_only;

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
    (o) => o.DVSharingChannels_ > 0
  ).length;
  console.log("Total responses: " + total_responses_count);
});
