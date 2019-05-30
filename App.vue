<template>
  <div id="app">
      <section class="el-header">
      
        <TestMenu />
      </section>
      <section class="el-main"> 
      <TestSelect />
      </section>
      <section class="el-main"> 
      <TestTable />
      </section>
  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'*/
import TestTable from './components/table.vue'
import TestMenu from './components/menu.vue'
import TestSelect from './components/select.vue'
export default {
  name: 'app',
  components: {
    TestTable,
    TestMenu,
    TestSelect
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
