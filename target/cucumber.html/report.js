$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/demo1.feature");
formatter.feature({
  "line": 1,
  "name": "login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User enter username and password",
  "description": "",
  "id": "login-feature;user-enter-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the given page is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter lalitha as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters Password123 as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user will finds a TestMeApp homepage",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});