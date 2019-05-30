<template>
    <div id="table">
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="domain"
        label="域名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="页面名称">
      </el-table-column>
      <el-table-column
        prop="url"
        label="链接">
      </el-table-column>
      <el-table-column
        prop="html_size"
        label="页面大小">
        </el-table-column>
      <el-table-column
        prop="html_status"
        label="状态码">
      </el-table-column>
      <el-table-column
        prop="time"
        sortable
        label="插入时间">
        </el-table-column>
        <el-table-column
        prop="whitelist"
        label="白名单">
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    </div>    
</template>
<script>
    export default {
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            }
        },
        data() {
            return {
            tableData: [{
                id: '1',
                domain: 'www.baidu.com',
                title: '百度',
                url:'https://www.baidu.com',
                html_size:'4443',
                html_status:'200',
                time:'2019-05-28',
                whitelist:'是'
            }, {
                id: '2',
                domain: 'www.baidu.com',
                title: '百度',
                url:'https://www.baidu.com',
                html_size:'4443',
                html_status:'200',
                time:'2019-05-28',
                whitelist:'是'
            }, {
                id: '3',
                domain: 'www.baidu.com',
                title: '百度',
                url:'https://www.baidu.com',
                html_size:'4443',
                html_status:'200',
                time:'2019-05-27',
                whitelist:'是'
            }, {
                id: '4',
                domain: 'www.baidu.com',
                title: '百度',
                url:'https://www.baidu.com',
                html_size:'4443',
                html_status:'200',
                time:'2019-05-28',
                whitelist:'是'
            }]
            }
        }
    }
</script>
