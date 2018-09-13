package com.jl.controller;

import com.jl.entity.UserInfoBean;
import com.jl.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

@Controller
public class UserInfoController {
    @Autowired
    private UserInfoService userInfoService;

    @RequestMapping("/getUserInfo")
    @ResponseBody
    public ArrayList<UserInfoBean> selectUser(HttpServletRequest request, HttpServletResponse response) throws IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        ArrayList<UserInfoBean> arrayList = new ArrayList<UserInfoBean>();
        arrayList = userInfoService.getUserInfoService();
        return arrayList;
    }

}

