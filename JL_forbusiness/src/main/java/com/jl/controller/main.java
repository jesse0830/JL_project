package com.jl.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class main {
    @RequestMapping("/test")
    @ResponseBody
    public String index(){
        return "JesseYoung";
    }
}
