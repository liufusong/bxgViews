<template>
  <div style="height:100%;">
     <el-container>
        <el-aside width="200px">
          <div class="header">
            <img src="http://static.botue.com/images/avatar/5a5dbad453cc3.jpg" alt="">
            <p>前端学院</p>
          </div>
          <ul class="menu">
           
              <router-link to="/menu/home" tag="li">
                  <i class="fa fa-dashboard"></i>
                  仪表盘
              </router-link>
            
              <router-link to="/menu/teacher" tag="li">
                  <i class="fa fa-dashboard"></i>
                  讲师管理
              </router-link>
           
              <router-link to="/menu/list" tag="li">
                  <i class="fa fa-dashboard"></i>
                  分类管理
              </router-link>
            
              <router-link to="/menu/class" class="active" tag="li">
                  <i class="fa fa-dashboard"></i>
                  课程管理
              </router-link>
            
          </ul>
        </el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>
<script>
export default {
  created(){
    this.islogin()
  },
  methods:{
    islogin(){
      // this.$http.get('islogin').then(function(res){
      //   console.log(res)
      // })
    }
  }
}
</script>
<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    background: #2f4050;
   
  }
  .el-aside .header{
    background: #243443
  }
  .el-aside .header img{
    height: 60px;
    width:60px;
    border-radius: 100px;
    margin:20px auto 20px auto;
  }
  .el-aside .header p{
    text-align: center;
    color: #B3C0D1;
    padding-bottom: 20px;
  }
 .el-aside .menu{
   margin-top: 15px;
 }
  .el-aside .menu li{
    line-height: 40px;
    text-align: left;
    padding-left:15px;
     text-decoration: none;
    color: #fff;
    cursor: pointer;
  }
  .el-aside .menu li.router-link-active{
    background: #243443;
  }
  

  



  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
     
  }
  .el-container{
    height:100%;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
   
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>


