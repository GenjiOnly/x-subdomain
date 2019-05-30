<template>
    <div id = "menu">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">查询系统</el-menu-item>
          <el-menu-item index="2">任务管理</el-menu-item>
          <el-menu-item index="3">白名单</el-menu-item>
        </el-menu>
    <div class="line"></div>

    </div>    
</template>
