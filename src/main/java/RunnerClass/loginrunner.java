package RunnerClass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Feature/login.feature",glue= {"stepdef"},plugin= {"html:target/login.html"})
public class loginrunner {

}
