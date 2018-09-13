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
    public ArrayList<UserInfoBean> getUserInfoService(){
        return userInfoDao.getUserInfo();
    }
}

