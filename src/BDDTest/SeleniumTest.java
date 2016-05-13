//Selenium interpretation of Cucumber steps

package BDDTest;

import java.util.concurrent.TimeUnit;
import static org.junit.Assert.*;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;

public class SeleniumTest {

    private WebDriver driver;
    private String baseUrl;
    private String browserName;    
    private String browserVersion;
    
    public void setUp() throws Exception {
	    driver = new FirefoxDriver();

	    baseUrl = "http://gcloud-todos.appspot.com/examples/angularjs/#/";
	    driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	    driver.manage().window().maximize();
	    Capabilities caps = ((RemoteWebDriver) driver).getCapabilities();
	    browserName = caps.getBrowserName();
	    browserVersion = caps.getVersion();
	    System.out.println("Automated test run. We’re running on "+browserName+" "+browserVersion);
     }

     public void tearDown() {
    	 driver.quit();
     }

    public void gotoToDoMVCPage(){
    	driver.get(baseUrl);
     }

    public void addTask(int arg1){
        driver.findElement(By.id("new-todo")).clear();
        driver.findElement(By.id("new-todo")).sendKeys("task"+arg1);
        driver.findElement(By.id("new-todo")).sendKeys(Keys.RETURN);
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }
 
    public void checkTaskOnPage(int arg1){
        assertEquals("task"+arg1, driver.findElement(By.xpath("//ul[@id='todo-list']/li/form/input")).getAttribute("value"));
    }
    
    public void completeTask(){
    	driver.findElement(By.xpath("(//input[@type='checkbox'])[2]")).click();
    }
    
    public void checkCompletedTaskOnPage(){
        assertEquals(true, driver.findElement(By.xpath("(//input[@type='checkbox'])[2]")).isSelected());
    }

    public void deleteTask(){
    	Actions action = new Actions(driver);
    	action.moveToElement(driver.findElement(By.xpath("//*[@id='todo-list']/li[2]/div/label"))).build().perform();
    	driver.findElement(By.xpath("//ul[@id='todo-list']/li[2]/div/button")).click();
    }
    
    public void checkDeletedTask(int arg1){
    	assertNotEquals("task"+arg1, driver.findElement(By.xpath("//ul[@id='todo-list']/li/form/input")).getAttribute("value"));
    }
    
    public void showActiveTask(){
    	driver.findElement(By.linkText("Active")).click();
    }
    
    public void showCompletedTask(){
    	driver.findElement(By.linkText("Completed")).click();
    }

}
