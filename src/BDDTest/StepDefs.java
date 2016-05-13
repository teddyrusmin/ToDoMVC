//Cucumber - BDD test steps

package BDDTest;


import cucumber.api.java.en.*;
import cucumber.api.java.After;

public class StepDefs {

    private SeleniumTest script;

    public void setUpWebDriver() throws Exception {
       script = new SeleniumTest();
       script.setUp();
       script.gotoToDoMVCPage();
    }

    public void tidyUp() {
    	script.tearDown();
    }
    
    @Given("^I am on the ToDoMVC page$")
    public void i_am_on_the_ToDoMVC_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	setUpWebDriver();
    }

    @When("^I add task(\\d+) onto todo list$")
    public void i_add_task_onto_todo_list(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	script.addTask(arg1);
    }

    @Then("^task(\\d+) should be displayed on the todo list$")
    public void task_should_be_displayed_on_the_todo_list(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	script.checkTaskOnPage(arg1);
    }

    @When("^I mark task(\\d+) as complete$")
    public void i_mark_task_as_complete(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	script.completeTask();
    }

    @Then("^task(\\d+) should be ticked$")
    public void task_should_be_ticked(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	script.checkCompletedTaskOnPage();
    }

    @When("^I remove task(\\d+) list$")
    public void i_remove_task_list(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	script.deleteTask();
    }

    @Then("^task(\\d+) should not be on the list$")
    public void task_should_not_be_on_the_list(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	script.checkDeletedTask(arg1);
    }

    @When("^I click on active link$")
    public void i_click_on_active_link() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	script.showActiveTask();
    }

    @When("^I click on completed link$")
    public void i_click_on_completed_link() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	script.showCompletedTask();
    }
    
    @After
    public void tearDown() throws Exception {
       script.tearDown();
    }

}
