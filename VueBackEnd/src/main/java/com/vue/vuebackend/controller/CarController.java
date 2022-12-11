package com.vue.vuebackend.controller;


import com.vue.vuebackend.controller.utils.Result;
import com.vue.vuebackend.service.ICarService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created with IntelliJ IDEA.
 *
 * @author : Frank.Ren
 * @version : 1.0
 * @Project : ademo
 * @Package : com.example.ademo.controller
 * @createTime : 2022/12/1 20:12
 * @Email : sc19lr@leeds.ac.uk
 * @github : https://github.com/frankRenlf
 * @Description :
 */
@Slf4j
@RestController
@RequestMapping("/car")
public class CarController {
    @Autowired
    private ICarService iCarService;

    @GetMapping("/list")
    public Result getList() {
        return new Result(true, iCarService.list());
    }


}
