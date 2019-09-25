$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "login_action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Successfull login with valid credentials",
  "description": "",
  "id": "login-action;successfull-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user will open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on the signin link",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Message displayes login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "login-action;successfull-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "login-action;successfull-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Lalitha",
        "Password123"
      ],
      "line": 9,
      "id": "login-action;successfull-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "name",
        "Pass"
      ],
      "line": 10,
      "id": "login-action;successfull-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Successfull login with valid credentials",
  "description": "",
  "id": "login-action;successfull-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user will open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on the signin link",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"Lalitha\" and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Message displayes login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_will_open_the_application()"
});
formatter.result({
  "duration": 10111882600,
  "status": "passed"
});
formatter.match({
  "location": "login.user_click_on_the_signin_link()"
});
formatter.result({
  "duration": 736873800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lalitha",
      "offset": 13
    },
    {
      "val": "Password123",
      "offset": 27
    }
  ],
  "location": "login.user_enters_and(String,String)"
});
formatter.result({
  "duration": 340775500,
  "status": "passed"
});
formatter.match({
  "location": "login.message_displayes_ligin_successfully()"
});
formatter.result({
  "duration": 803205200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Successfull login with valid credentials",
  "description": "",
  "id": "login-action;successfull-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user will open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on the signin link",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"name\" and \"Pass\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Message displayes login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_will_open_the_application()"
});
formatter.result({
  "duration": 9688688700,
  "status": "passed"
});
formatter.match({
  "location": "login.user_click_on_the_signin_link()"
});
formatter.result({
  "duration": 1471539300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 13
    },
    {
      "val": "Pass",
      "offset": 24
    }
  ],
  "location": "login.user_enters_and(String,String)"
});
formatter.result({
  "duration": 372061900,
  "status": "passed"
});
formatter.match({
  "location": "login.message_displayes_ligin_successfully()"
});
formatter.result({
  "duration": 323470400,
  "status": "passed"
});
});