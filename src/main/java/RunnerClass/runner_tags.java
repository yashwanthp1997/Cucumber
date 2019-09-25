package RunnerClass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome=true,features="Feature/tagdemo.feature",glue= {"stepDef"},plugin= {"html:target/tags.html"},tags= {"@SmokeTest","@End2End"})
public class runner_tags {

}
