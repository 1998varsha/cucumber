$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Oracle.feature");
formatter.feature({
  "name": "Facebook Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To Check Login Functionality with Valid Username and Valid Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Chrome is Opened \u0026 Login Page is displayed",
  "keyword": "Given "
});
formatter.step({
  "name": "user Enters \"\u003cUN\u003e\" \u0026 \"\u003cPWD\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "Home Page should display",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UN",
        "PWD"
      ]
    },
    {
      "cells": [
        "demo",
        "demo123"
      ]
    },
    {
      "cells": [
        "hr",
        "hr"
      ]
    },
    {
      "cells": [
        "sys",
        "Newuser123"
      ]
    },
    {
      "cells": [
        "system",
        "Newuser123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Check Login Functionality with Valid Username and Valid Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Chrome is Opened \u0026 Login Page is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginRun.chrome_is_Opened_Login_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user Enters \"demo\" \u0026 \"demo123\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginRun.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "Home Page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginRun.home_Page_should_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Check Login Functionality with Valid Username and Valid Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Chrome is Opened \u0026 Login Page is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginRun.chrome_is_Opened_Login_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user Enters \"hr\" \u0026 \"hr\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginRun.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "Home Page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginRun.home_Page_should_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Check Login Functionality with Valid Username and Valid Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Chrome is Opened \u0026 Login Page is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginRun.chrome_is_Opened_Login_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user Enters \"sys\" \u0026 \"Newuser123\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginRun.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "Home Page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginRun.home_Page_should_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Check Login Functionality with Valid Username and Valid Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Chrome is Opened \u0026 Login Page is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginRun.chrome_is_Opened_Login_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user Enters \"system\" \u0026 \"Newuser123\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginRun.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "Home Page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginRun.home_Page_should_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});