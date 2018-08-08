<style>
body,html,.el-header,.el-main,.el-footer{
  padding:0;
  margin: 0;
  font-family: -apple-system, "PingFangSC",'Microsoft YaHei',BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
  font-size: 62.5%;
  background: #fff;
}
a{
  color:inherit;
  text-decoration: none;
}
a:hover{
  color:#FFAE19;
}
ul,ol{
  list-style: none;
}
</style>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

