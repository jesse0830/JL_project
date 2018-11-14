package com.jl.service;

import com.jl.dao.UserInfoDao;
import com.jl.entity.UserInfoBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserInfoService {
    @Autowired
    private UserInfoDao userInfoDao;
    //获取所有用户信息
    public ArrayList<UserInfoBean> getUserInfoService() {
        return userInfoDao.getUserInfo();
    }

    //登陆接口
    public int startLogin(String userName,String password) {
        return userInfoDao.startLogin(userName,password);
    }
}

