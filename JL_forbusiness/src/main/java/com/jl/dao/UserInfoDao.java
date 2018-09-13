package com.jl.dao;

import com.jl.entity.UserInfoBean;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface UserInfoDao {
    public ArrayList<UserInfoBean> getUserInfo();
}
