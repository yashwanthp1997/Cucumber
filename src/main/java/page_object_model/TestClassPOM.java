package page_object_model;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestClassPOM {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Training_b6b.01.16\\Desktop\\Browser Drivers\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver=new ChromeDriver();
		Pageclass obj=new Pageclass(driver);
		driver.get("http://demowebshop.tricentis.com");
		driver.manage().window().maximize();
		obj.click_lgnlnk();
		obj.enter_username();
		obj.enter_password();
		obj.login();
		obj.logout();

	}

}
