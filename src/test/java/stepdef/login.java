package stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class login {
	WebDriver driver=null;
	 
	
	@Given("^user will open the application$")
	public void user_will_open_the_application(){
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Training_b6b.01.16\\Desktop\\Browser Drivers\\chromedriver_win32\\chromedriver.exe");
		   driver=new ChromeDriver();
		   driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		   driver.manage().window().maximize();
	}

	@When("^user click on the signin link$")
	public void user_click_on_the_signin_link(){
		driver.findElement(By.xpath("//a[@href='login.htm']")).click();
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String arg1, String arg2){
		driver.findElement(By.id("userName")).sendKeys(arg1);
		driver.findElement(By.id("password")).sendKeys(arg2);
}

	@Then("^Message displayes login successfully$")
	public void message_displayes_ligin_successfully(){
		driver.findElement(By.xpath("//input[@name='Login']")).click();
	    System.out.println("Login successfully");
	}
}
