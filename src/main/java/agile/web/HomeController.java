package agile.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/* Created by Jason Cui on 2017-09-20.*/
@Controller
public class HomeController {

    @RequestMapping("/")
    public ModelAndView homeView() {
        return new ModelAndView("index");
    }

    @GetMapping("/hello")
    @ResponseBody
    public String helloResponse() {
        return "hello";
    }
}
