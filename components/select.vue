<template>
    <div id="select">
        <el-row :gutter="0">
            <el-col :span="12">
        <el-select v-model="value" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >
            </el-option>
        </el-select>
        </el-col>
        <el-col :span="10" >
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="1" offset="1" >
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
}
</script>
<style> 
    .el-row{
        float: left;
    }
    
</style>
