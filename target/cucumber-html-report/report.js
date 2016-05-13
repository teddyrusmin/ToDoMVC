$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featureFiles/test.feature");
formatter.feature({
  "line": 2,
  "name": "Testing ToDoMVC",
  "description": "",
  "id": "testing-todomvc",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Runme"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Add a new todo",
  "description": "",
  "id": "testing-todomvc;add-a-new-todo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the ToDoMVC page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add task1 onto todo list",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "task1 should be displayed on the todo list",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.i_am_on_the_ToDoMVC_page()"
});
formatter.result({
  "duration": 17070640851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "StepDefs.i_add_task_onto_todo_list(int)"
});
formatter.result({
  "duration": 1248679605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    }
  ],
  "location": "StepDefs.task_should_be_displayed_on_the_todo_list(int)"
});
formatter.result({
  "duration": 52322109,
  "status": "passed"
});
formatter.after({
  "duration": 4230096066,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Mark a todo as completed",
  "description": "",
  "id": "testing-todomvc;mark-a-todo-as-completed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on the ToDoMVC page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I mark task1 as complete",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "task1 should be ticked",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.i_am_on_the_ToDoMVC_page()"
});
formatter.result({
  "duration": 9148032494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    }
  ],
  "location": "StepDefs.i_mark_task_as_complete(int)"
});
formatter.result({
  "duration": 1971520943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    }
  ],
  "location": "StepDefs.task_should_be_ticked(int)"
});
formatter.result({
  "duration": 67539233,
  "status": "passed"
});
formatter.after({
  "duration": 548370162,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Delete a todo",
  "description": "",
  "id": "testing-todomvc;delete-a-todo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am on the ToDoMVC page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I add task2 onto todo list",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I add task3 onto todo list",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I remove task2 list",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "task2 should not be on the list",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.i_am_on_the_ToDoMVC_page()"
});
formatter.result({
  "duration": 7119318403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "StepDefs.i_add_task_onto_todo_list(int)"
});
formatter.result({
  "duration": 1175498548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "StepDefs.i_add_task_onto_todo_list(int)"
});
formatter.result({
  "duration": 620686523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "StepDefs.i_remove_task_list(int)"
});
formatter.result({
  "duration": 383320333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 4
    }
  ],
  "location": "StepDefs.task_should_not_be_on_the_list(int)"
});
formatter.result({
  "duration": 145131013,
  "status": "passed"
});
formatter.after({
  "duration": 544632722,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "View only Active todos",
  "description": "",
  "id": "testing-todomvc;view-only-active-todos",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I am on the ToDoMVC page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on active link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "task3 should be displayed on the todo list",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.i_am_on_the_ToDoMVC_page()"
});
formatter.result({
  "duration": 7517011690,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_click_on_active_link()"
});
formatter.result({
  "duration": 1193426765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 4
    }
  ],
  "location": "StepDefs.task_should_be_displayed_on_the_todo_list(int)"
});
formatter.result({
  "duration": 155502756,
  "status": "passed"
});
formatter.after({
  "duration": 488370470,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "View only Completed todos",
  "description": "",
  "id": "testing-todomvc;view-only-completed-todos",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I am on the ToDoMVC page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on completed link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "task1 should be displayed on the todo list",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.i_am_on_the_ToDoMVC_page()"
});
formatter.result({
  "duration": 7075166012,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_click_on_completed_link()"
});
formatter.result({
  "duration": 1266064372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    }
  ],
  "location": "StepDefs.task_should_be_displayed_on_the_todo_list(int)"
});
formatter.result({
  "duration": 125255817,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[task1]\u003e but was:\u003c[Added Item at 13/05/2016 10:14]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat BDDTest.SeleniumTest.checkTaskOnPage(SeleniumTest.java:47)\r\n\tat BDDTest.StepDefs.task_should_be_displayed_on_the_todo_list(StepDefs.java:38)\r\n\tat ✽.Then task1 should be displayed on the todo list(featureFiles/test.feature:29)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 525012059,
  "status": "passed"
});
});