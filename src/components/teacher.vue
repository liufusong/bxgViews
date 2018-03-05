<template>
  <div class="teacherList">
      <el-breadcrumb class="pancel" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">讲师管理</el-breadcrumb-item>
        <el-breadcrumb-item>讲师列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="pancel addt">
          <el-button type="success" size="small" @click="manage">添加讲师</el-button>
      </div>
      <el-card class="box-card" size="small">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="编号"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="nickname" label="昵称"></el-table-column>
            <el-table-column prop="gender" label="性别"></el-table-column>
            <el-table-column prop="phone" label="手机号码"></el-table-column>
            <el-table-column prop="birthday" label="出生日期"></el-table-column>
            <el-table-column prop="email" label="邮箱"></el-table-column>
            <el-table-column prop="entrytime" width="200" label="入职日期"></el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">启用</el-button>
                </template>
            </el-table-column>
            
        </el-table>
      </el-card>
      <div ref="tc_info" style="display:none;">
         <ul id="tc_info">
             <li v-for="(item,key,index) in teachercon" :key="index">
                 <div>{{key}}</div>
                 <div>{{item}}</div>
             </li>
         </ul>
      </div>
  </div>
</template>
<script>
export default {
   data() {
      return {
        tableData: [],
        teachercon:{},
        input5:''
      }
    },
    methods:{
        getTeacherList(){
            this.$http.get('techerList').then(res=>{
                
                this.tableData = res.body 
                console.log(this.tableData)
            })
        },
        manage(){
            this.$router.push('/menu/teacherManage')
        },
        teacherInfo(){
            return this.$refs.tc_info.innerHTML
        },
        getTcInfo(id){
            this.$http.get('getTcInfo/'+id).then(function(res){
                 console.log(res)
                 this.teachercon = res.body.data[0];
                 console.log(this.teachercon)
                 const that = this;
                 setTimeout(function(){
                     that.$alert(that.teacherInfo(), '标题名称', {
                        confirmButtonText: '确定',
                        dangerouslyUseHTMLString: true
                    });
                 })
                 
            })
        },
        handleClick(row){
            console.log(row.id)
            this.getTcInfo(row.id)
            
        }
    },
    created(){
        console.log(this)
        this.getTeacherList();
    },
    mounted(){
        // this.teacherInfo()
    }
}
</script>
<style lang="scss">
.el-message-box__btns button:nth-child(2){
    display: none;
}
.el-message-box{
    width:800px;
}
.cell{
    text-align: center;
}
.teacherList .el-breadcrumb{
    width: 100%;
    height: 40px;
    
    
}
.pancel{
    width:100%;
    height:40px;
    background: #fff;
    border-radius: 5px;
    line-height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
}
.addt{
    margin: 10px 0;
    text-align: right;
    padding-right: 10px;
    padding-left: 0;
}

.el-main{
    line-height: 0;
}
.input-with-select{
   margin-bottom: 10px;
}


.el-input-group{
    width:40%;
    float: left;
}
#tc_info{
    width:100%;
    list-style: none;
}
#tc_info li{
    width:33.33333%;
    text-align: center;
    line-height: 40px;
    float: left;
    color:#fff;
}
#tc_info li div:nth-child(1){
    background: #666;
}
#tc_info li div:nth-child(2){
    background: #999;
    min-height:40px;
}

</style>


