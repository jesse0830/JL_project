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

    //注册接口
    public int register(String userName,String password){

        if (checkStrIsEmpty(userName))
            return -2;

        if(checkUsernameExist(userName) > 0){
            return -1;
        }
        return userInfoDao.register(userName,password);
    }

    //检查用户名是否存在
    public int checkUsernameExist(String userName){
        return userInfoDao.checkUsernameExist(userName);
    }

    //检查用户名是否为空
    public boolean checkStrIsEmpty(String input){
        if (input == null || input.trim().length() == 0)
            return true;

        return false;
    }
}

