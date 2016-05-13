		@Runme
    Feature: Testing ToDoMVC

    Scenario: Add a new todo
    Given I am on the ToDoMVC page
    When I add task1 onto todo list
    Then task1 should be displayed on the todo list
    
    Scenario: Mark a todo as completed
    Given I am on the ToDoMVC page
    When I mark task1 as complete
    Then task1 should be ticked
    
    Scenario: Delete a todo
    Given I am on the ToDoMVC page
    When I add task2 onto todo list
    And I add task3 onto todo list
    And I remove task2 list
    Then task2 should not be on the list

    Scenario: View only Active todos
    Given I am on the ToDoMVC page
    When I click on active link
    Then task3 should be displayed on the todo list

    Scenario: View only Completed todos
    Given I am on the ToDoMVC page
    When I click on completed link
    Then task1 should be displayed on the todo list