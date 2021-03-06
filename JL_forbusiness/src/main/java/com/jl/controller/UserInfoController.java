package com.jl.controller;

import com.jl.entity.UserInfoBean;
import com.jl.service.UserInfoService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

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

    @RequestMapping("/login")
    @ResponseBody
    public boolean login(HttpServletRequest request, HttpServletResponse response) throws IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        String userName = StringUtils.trimToEmpty(request.getParameter("username"));
        String passWord = StringUtils.trimToEmpty(request.getParameter("password"));
        int count = userInfoService.startLogin(userName,passWord);
        if(count > 0){
            return true;
        }
        return false;
    }

    @RequestMapping("/register")
    @ResponseBody
    public Object register(HttpServletRequest request, HttpServletResponse response) throws IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        String userName = StringUtils.trimToEmpty(request.getParameter("username"));
        String passWord = StringUtils.trimToEmpty(request.getParameter("password"));

        int count = userInfoService.register(userName,passWord);
        Map<String,Object> resultMap = new HashMap<String, Object>();
        if(count > 0){
            resultMap.put("result",true);
            resultMap.put("message","注册成功");
            return resultMap;
        }
        else{
            if(count == -1){
                resultMap.put("result",false);
                resultMap.put("message","注册失败，用户名已存在");
                return resultMap;
            }
            resultMap.put("result",false);
            resultMap.put("message","注册失败");
            return resultMap;
        }

    }
}

