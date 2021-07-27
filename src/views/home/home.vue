<template>
    <div class="app-home">
        <ul class="app-home-list">
            <li class="app-home-list-item">
            <a-divider orientation="left"> 
                <span class="title">置顶文</span>
                <span class="posted-time">2020-03-12</span>
            </a-divider>
            <div class="article-detail content">
                <p>这是文章主体</p>
            </div>
            <div class="list-item-others">
                <a-icon type="message" />
                <span :style="{marginRight:'5px'}">31</span>
                <a-icon type="eye" />
                <span :style="{marginRight:'5px'}">2261</span>
                <a-divider type="vertical" />
                <a-icon type="tags" theme="filled" />
                <a-tag color="pink"> pink </a-tag>
                <a-tag color="red"> red </a-tag>
                <a-divider type="vertical" />
                <a-icon type="folder" />
                <a-tag color="pink"> pink </a-tag>
                <a-tag color="red"> red </a-tag>
            </div>
            </li>
        </ul>
        <ul class="preview">
            <a-divider orientation="center"> 快速导航 </a-divider>
            <li><a href="/article/92">置顶文</a></li>
            <li><a href="/article/90">用 node 写命令行工具</a></li>
            <li><a href="/article/89">实现 ssh 免密登陆服务器</a></li>
            <li>
                <a href="/article/88">利用 github webhooks 实现自动化部署</a>
            </li>
            <li><a href="/article/87"> React Hooks 笔记</a></li>
            <li><a href="/article/86">Koa 中间件机制</a></li>
            <li><a href="/article/76">koa-react-ssr 学习</a></li>
            <li>
                <a href="/article/74">如何用 es6+ 写出优雅的 js 代码</a>
            </li>
            <li><a href="/article/30">实现简易的 VUE-MVVM</a></li>
            <li><a href="/article/64">webpack - 入门篇</a></li>
        </ul>
        <div class="app-pagination">
            <a-pagination v-model="current" :total="50" show-less-items />
        </div>
        </div>
</template>