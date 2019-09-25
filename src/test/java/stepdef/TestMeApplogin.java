package stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestMeApplogin {
	WebDriver driver=null;

		@Given("^the given page is opened$")
		public void the_given_page_is_opened(){
		   System.setProperty("webdriver.chrome.driver", "C:\\Users\\Training_b6b.01.16\\Desktop\\Browser Drivers\\chromedriver_win32\\chromedriver.exe");
		   driver=new ChromeDriver();
		   driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		   driver.manage().window().maximize();
		   driver.findElement(By.xpath("//a[@href='login.htm']")).click();
		}

		@When("^user enter lalitha as username$")
		public void user_enter_lalitha_as_username(){
		   driver.findElement(By.id("userName")).sendKeys("Lalitha");
		}

		@When("^user enters Password(\\d+) as password$")
		public void user_enters_Password_as_password(int arg1){
			driver.findElement(By.id("password")).sendKeys("Password123");
		}

		@Then("^user will finds a TestMeApp homepage$")
		public void user_will_finds_a_TestMeApp_homepage(){
		   driver.findElement(By.name("Login")).click();
		   System.out.println("The title is:"+driver.getTitle());
		}

}
