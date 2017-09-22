package agile.web;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/* Created by Jason Cui on 2017-09-20.*/
@Controller
public class HomeController {

    private Log log = LogFactory.getLog(HomeController.class);


    @RequestMapping("/")
    public ModelAndView indexView() {
        log.info("render index page");
        return new ModelAndView("index");
    }

    @RequestMapping("/home")
    public ModelAndView homeView() {
        log.info("render home page");
        return new ModelAndView("index");
    }

    @RequestMapping("/hello")
    @ResponseBody
    public String helloResponse() {
        return "hello";
    }
}
