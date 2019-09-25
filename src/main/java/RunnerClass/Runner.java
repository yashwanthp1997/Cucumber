package RunnerClass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Feature/demo1.feature",glue= {"stepdef"},plugin= {"html:target/cucumber.html"})
public class Runner {

}
