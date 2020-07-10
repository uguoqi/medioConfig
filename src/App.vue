<template>
  <div id="app">
    <div id="nav">
      <el-container>
        <el-header>
          <router-link to="/">配置媒体查询工具</router-link> 
          
        </el-header>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in this.routsList" :to="{ path: item.urls }" @click.native="removeAfterData(index)" :key="item.urls">{{item.name}}</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>设备通用显示抓取</el-breadcrumb-item>
            <el-breadcrumb-item>显示配置</el-breadcrumb-item>
            <el-breadcrumb-item>媒体查询设置</el-breadcrumb-item> -->
          </el-breadcrumb>
        <el-main>
            <router-view @changerouter="changerouterdata" ></router-view>
        </el-main>
        <el-footer>

        </el-footer>
      </el-container>
      
      <!-- <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>  -->
    </div>
    
  </div>
</template>
<script>
  export default{
    data(){
      return {
        routsList: [
          {
            name: '选择设备',
            urls: '/'
          },
          // {
          //   name: '设备信息',
          //   urls: '/equipinfo'
          // }
        ]
      }
    },
    methods: {
      //同步面包屑数据
      changerouterdata(e){
        this.routsList=e
      },
      removeAfterData(ind){
        this.routsList.splice(ind+1);
        var urls = this.routsList[ind].urls;
        this.$routes.push(urls);
      },
      pushrouters(rou){
        this.routsList.push(rou);
      }
    },
    computed: {

    },
    watch: {
      $route(to,from){
        this.routsList.forEach(function (item,index){
          if(item.urls.indexOf(from.name) > 0){
            this.routsList.splice(index);
            return false;
          }
        })
      }
    },
    mounted (){
      console.log(this.$route.params.val)
      var val = this.$route.params.val;
      console.log(val);
      
    }
  }
</script>

<style>
.el-breadcrumb .el-breadcrumb__item{
  cursor: pointer;
}
.routerList a{
  font-size: 14px;
  color:darkturquoise;
}
body{
  background-color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-size: 30px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

header{
  font-size: 24px;
  line-height: 60px;
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
