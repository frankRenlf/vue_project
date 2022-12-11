package com.vue.vuebackend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.vue.vuebackend.domain.Car;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 *
 * @author : Frank.Ren
 * @version : 1.0
 * @Project : ademo
 * @Package : com.example.ademo.mapper
 * @createTime : 2022/12/1 20:01
 * @Email : sc19lr@leeds.ac.uk
 * @github : https://github.com/frankRenlf
 * @Description :
 */
@Mapper
public interface CarMapper extends BaseMapper<Car> {



}
