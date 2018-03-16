package com.aquariuslt.demo.web;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

    private Log log = LogFactory.getLog(HomeController.class);


    @RequestMapping("/")
    public ModelAndView indexView() {
        log.info("render index page");
        return new ModelAndView("home");
    }

    @RequestMapping("/home")
    public ModelAndView homeView() {
        log.info("render home page");
        return new ModelAndView("home");
    }

    @RequestMapping("/hello")
    @ResponseBody
    public String helloResponse() {
        return "hello";
    }
}
