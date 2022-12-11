package com.vue.vuebackend.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.ademo.domain.Article;
import com.example.ademo.mapper.ArticleMapper;
import com.example.ademo.service.IArticleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 *
 * @author : Frank.Ren
 * @version : 1.0
 * @Project : ademo
 * @Package : com.example.ademo.service.Impl
 * @createTime : 2022/12/1 20:10
 * @Email : sc19lr@leeds.ac.uk
 * @github : https://github.com/frankRenlf
 * @Description :
 */
@Service
@Slf4j
public class ArticleServiceImpl extends ServiceImpl<ArticleMapper,Article> implements IArticleService {

    @Autowired
    private ArticleMapper articleMapper;

    @Override
    public Article mySelectById(Integer id) {
        return articleMapper.mySelectById(id);
    }

    @Override
    public List<Article> myList(String order) {
        return articleMapper.myList(order);
    }

    @Override
    public Integer myInsert(Article article) {
        articleMapper.myInsert(article);
        return article.getArticleId();
    }

    @Override
    public Integer myRemoveById(Integer id) {
        return articleMapper.myRemoveById(id);
    }

    @Override
    public Integer myUpdate(Article article) {
        return articleMapper.myUpdate(article);
    }
}
