$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/tagdemo.feature");
formatter.feature({
  "line": 3,
  "name": "ECommerce Application",
  "description": "",
  "id": "ecommerce-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 36,
  "name": "Buy a product with cash payment",
  "description": "",
  "id": "ecommerce-application;buy-a-product-with-cash-payment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@SmokeTest"
    },
    {
      "line": 35,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 40,
  "name": "Buy a product with CC payment",
  "description": "",
  "id": "ecommerce-application;buy-a-product-with-cc-payment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@SmokeTest"
    },
    {
      "line": 39,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});