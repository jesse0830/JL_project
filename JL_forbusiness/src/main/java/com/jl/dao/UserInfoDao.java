package com.jl.dao;

import com.jl.entity.UserInfoBean;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface UserInfoDao {
    public ArrayList<UserInfoBean> getUserInfo();

//    login
    public int startLogin(@Param("userName")String userName, @Param("password")String password);

//    register
    public int register(@Param("userName")String userName, @Param("password")String password);

//    检查用户名是否存在
    public int checkUsernameExist(@Param("userName")String userName);
}
