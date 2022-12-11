package com.vue.vuebackend.domain;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 *
 * @author : Frank.Ren
 * @version : 1.0
 * @Project : springboot-1
 * @Package : com.frank.springboot1.domain
 * @createTime : 2022/11/17 11:31
 * @Email : sc19lr@leeds.ac.uk
 * @github : https://github.com/frankRenlf
 * @Description :
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("userinfo")
public class User {
    @TableId("id")
    Integer userId;
    String username;
    String password;
    String photo;
    String createTime;
    String updateTime;
    Integer state;
    List<Article> list;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User(Integer userId, String username, String password, String photo, Timestamp createTime, Timestamp updateTime, Integer state) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.photo = photo;
        if (createTime != null && updateTime != null) {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            this.createTime = simpleDateFormat.format(createTime);
            this.updateTime = simpleDateFormat.format(updateTime);
        }
        this.state = state;
    }

    public void setCreateTime(Timestamp createTime) {
//        this.createTime = createTime;
        if (createTime != null) {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            this.createTime = simpleDateFormat.format(createTime);
        }
    }

    public void setUpdateTime(Timestamp updateTime) {
//        this.updateTime = updateTime;
        if (updateTime != null) {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            this.updateTime = simpleDateFormat.format(updateTime);
        }
    }
}
