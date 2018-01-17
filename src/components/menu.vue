<template>
  <div style="height:100%;">
     <el-container>
        <el-aside width="200px" v-if="show">
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
          <el-header>
            <a href="javascript:;" @click="asideShow" class="navbar-brand">
                <i class="fa fa-navicon"></i>
            </a>
            <ul>
              <li>
                  <a href="/profile">
                      <i class="fa fa-user"></i>
                      个人中心
                  </a>
                </li>
                <li>
                    <a href="javascript:;" id="logout">
                        <i class="fa fa-sign-out"></i>
                        退出
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-tasks"></i>
                    </a>
                </li>
            </ul>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>
<script>
export default {
  data(){
    return {
      show:true
    }
  },
  created(){
    // this.islogin()
  },
  methods:{
    asideShow(){
      this.show=!this.show
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
    background: #243443;
    
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
  
  .el-header{
    text-align: left;
  }
  .el-header>a{
    
    display: inline-block;
    float: left;
  }
  .el-header ul{
    float:right;
    list-style: none;
  }
  .el-header ul li{
    float: left;
    margin-left: 25px;
  }
  .el-header ul li a{
    color:  #337ab7;
    text-decoration: none;
  }
  .el-header ul li a i{  
    background: none;
    color: #337ab7;
    padding: 0;
  }
  .el-header a i{
    padding:10px;
    background: #5cb85c;
    border-radius:5px;
    color: #fff;
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


