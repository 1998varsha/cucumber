 package StepDefination;

import static org.junit.Assert.assertEquals;

import java.util.List;
import java.util.Map;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.AfterStep;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginRun {
	  WebDriver driver;
	@Given("Chrome is Opened & Login Page is displayed")
	public void chrome_is_Opened_Login_Page_is_displayed() {
		System.setProperty("webdriver.chrome.driver" ,".//Drivers//chromedriver.exe");
		driver=new ChromeDriver();
		  driver.get("http://127.0.0.1:8080/htmldb");
	}

	@When("user Enters {string} and {string}")
	public void user_Enters(String string, String string2) {
		driver.findElement(By.xpath("//*[@type='text']")).sendKeys(string);
		driver.findElement(By.xpath("//*[@type='password']")).sendKeys(string2);
	}

	@When("Click on Login button")
	public void click_on_Login_button() {
		driver.findElement(By.xpath("//*[@type='BUTTON']")).click();
	}


	@Then("Home Page should display")
	public void home_Page_should_display() {
	   assertEquals("Login Failed","Oracle",driver.getTitle());
	}
	@After
	public void after()
	{
		driver.quit();
	}
	@AfterStep   //after every test case
	public void afterStep()
	{
		System.out.println("after step");
	}
	
}
	/*
	@Then("Click on Administrator &  Click on Database Users")
	public void click_on_Administrator_Click_on_Database_Users() {
		driver.findElement(By.linkText("Administration")).click();
		driver.findElement(By.linkText("Database Users")).click();
		
	}
   @And("Click on Create")
	public void click_on_Create() {
		driver.findElement(By.xpath("/html/body/form/div[7]/table/tbody/tr/td[1]/table[1]/tbody/tr/td[2]/input")).click();
	}

	@And("user enters Username and Password and ConfirmPassword & Click on create")
	public void user_enters_Username_and_Password_and_ConfirmPassword_Click_on_create() {
		driver.findElement(By.xpath("//*[@type='text']")).sendKeys("demo");
		driver.findElement(By.xpath("//*[@type='password']")).sendKeys("demo123");
		driver.findElement(By.xpath("//*[@id=\"P2611_CONFIRM_PASSWORD\"]")).sendKeys("demo123");
		driver.findElement(By.xpath("/html/body/form/div[7]/table/tbody/tr/td[1]/table[1]/thead/tr/th[2]/input[2]")).click();
	 	}
	@When("user enters following details")
	public void user_enters_following_details(io.cucumber.datatable.DataTable dataTable) {
		List<Map<String,String>> data=dataTable.asMaps();
		List<List<String>> D=dataTable.asLists();
		driver.findElement(By.name("p_t01")).sendKeys(D.get(1).get(0));
		driver.findElement(By.name("p_t02")).sendKeys(D.get(1).get(1));
		driver.findElement(By.name("p_t03")).sendKeys(D.get(1).get(2));
	}
	
	@When("Click on create")
	public void click_on_create() {
		driver.findElement(By.xpath("/html/body/form/div[7]/table/tbody/tr/td[1]/table[1]/thead/tr/th[2]/input[2]")).click();
	}
}
*/