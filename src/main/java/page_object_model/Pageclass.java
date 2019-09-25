package page_object_model;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Pageclass {
	WebDriver driver;
	By lgnlnk=By.linkText("Log in");
	By uname=By.id("Email");
	By pwd=By.id("Password");
	By lgnbtn=By.xpath("//input[@value='Log in']");
	By lgt=By.xpath("//a[@href='/logout']");
	
	public Pageclass(WebDriver driver) {
		this.driver=driver;
	}
	public void click_lgnlnk() {
		driver.findElement(lgnlnk).click();
	}
	public void enter_username() {
		driver.findElement(uname).sendKeys("aravind.guggilla57@gmail.com");
	}
	public void enter_password() {
		driver.findElement(pwd).sendKeys("aravind");
	}
	public void login() {
		driver.findElement(lgnbtn).click();
	}
	public void logout() {
		driver.findElement(lgt).click();
	}

}
