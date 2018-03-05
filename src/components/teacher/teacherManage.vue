<template>
  <div class="tc_manage">
      <el-breadcrumb class="pancel" separator="/">
        <el-breadcrumb-item :to="{ path: '/menu/teacher' }">讲师管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加讲师</el-breadcrumb-item>
      </el-breadcrumb>
      <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="姓名">
        <el-input v-model="form.name" placeholder="请填写姓名"></el-input>
    </el-form-item>
    <el-form-item label="昵称">
        <el-input v-model="form.nickname"></el-input>
    </el-form-item>
    <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
    </el-form-item>
    
    <el-form-item label="入职时间">
        <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
    </el-form-item>
    <el-form-item label="讲师类型">
        <el-select v-model="form.region" placeholder="请选择讲师类型">
        <el-option label="普通僵尸" value="1"></el-option>
        <el-option label="导师" value="2"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="性别">
        <el-radio-group v-model="form.resource">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
        </el-radio-group>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">添加讲师</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>
<script>
 export default {
    data() {
      return {
        form: {
          name: '',
          nickname:'',
          email:'',
          password: '',
          date1: '',
          date2: '',
          region:'普通僵尸',
          resource: ''
        }
      }
    },
    methods: {
      onSubmit() {
          var  fm = this.form;
          if(fm.name.trim().length<1){
              this.$message.error('亲爱的，请您填写一下“姓名”可好，爱你啊么么哒'); 
              return;
          }
          if(fm.nickname.trim().length<1){
              this.$message.error('亲爱的，请您填写一下“昵称”可好，爱你啊么么哒'); 
              return;
          }
          if(fm.email.trim().length<1){
              this.$message.error('亲爱的，请您填写一下“邮箱”可好，爱你啊么么哒'); 
              return;
          }
          if(fm.password.trim().length<1){
              this.$message.error('亲爱的，请您填写一下“密码”可好，爱你啊么么哒'); 
              return;
          }
          if(fm.date1.toString().trim().length<1 || fm.date2.toString().trim().length<1){
              this.$message.error('亲爱的，请您填写一下“时间”可好，爱你啊么么哒'); 
              return;
          }
         
         
          if(fm.region>2){
              this.$message.error('亲爱的，请您填写一下“类型”可好，爱你啊么么哒'); 
              return;
          }
          if(fm.resource.trim().length<1){
              this.$message.error('亲爱的，请您填写一下“性别”可好，爱你啊么么哒'); 
              return;
          }
          
          const y = fm.date1.getFullYear();
          const m = (fm.date1.getMonth()+1).toString().padStart(2,0);
          const d = (fm.date1.getDate()).toString().padStart(2,0);
          const h = (fm.date2.getHours()).toString().padStart(2,0);
          const mon = (fm.date2.getMinutes()).toString().padStart(2,0);
          const s = (fm.date2.getSeconds()).toString().padStart(2,0);
         
          let  time = `${y}-${m}-${d} ${h}:${mon}:${s}`
          var gender = 1
          if(fm.resource=='男'){
              gender = 1;
          }else{
              gender = 2;
          }
          
          this.$http.post('addTeacher',
          {name:fm.name,password:fm.password,nickname:fm.nickname,email:fm.email,entrytime:time,gender:gender},{emulateJSON:true}).then(function(res){
              if(res.body.status==0){
                  this.$message({
                    message: '添加成功',
                    type: 'success'
                  });
              }
          })
          
      }
    }
  }
</script>
<style scoped lang="scss">
.el-main{
    text-align:left;
    .el-col-2{
        text-align: center;
    }
}
.el-form{
    width: 100%;
    margin-top: 10px;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    border-radius:5px;
    text-align: left;
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

</style>


