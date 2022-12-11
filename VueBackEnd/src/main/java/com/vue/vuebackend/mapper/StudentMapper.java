package com.vue.vuebackend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.vue.vuebackend.domain.Student;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 *
 * @author : Frank.Ren
 * @version : 1.0
 * @Project : springboot-1
 * @Package : com.frank.springboot1.dao
 * @createTime : 2022/11/19 14:38
 * @Email : sc19lr@leeds.ac.uk
 * @github : https://github.com/frankRenlf
 * @Description :
 */
@Mapper
public interface StudentMapper extends BaseMapper<Student> {



}
