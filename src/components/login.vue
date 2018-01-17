<template>
  <div class="login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <div class="Avatar">
        <img src="http://static.botue.com/images/avatar/5a41ece62e3e7.jpg" alt="">
      </div>
      <el-form-item label="账号" prop="age">
        <el-input v-model.number="ruleForm2.age"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          callback();
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          
            this.$http.post('login',{user_name:this.ruleForm2.age,password:this.ruleForm2.pass},{emulateJSON:true,withCredentials:true}).then((res)=>{
              console.log(res.body.tip)
             
              if(res.body.tip==0){
                this.$alert(res.body.message, '登陆提示')
              }else{
                this.$router.push({path:'/menu'})
              }
              
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  width:100%;
  height:100%;
}
.login{
  width:100%;
  height:100%;
  background:#2f4050;
   overflow: hidden;
}
.el-form{
  width:500px;
  margin:200px auto;
  background:#fff;
  padding: 100px 20px 40px 20px;
  position: relative;
 
}
.Avatar{
  width:100px;
  height: 100px;
  border-radius: 100%;
  overflow: hidden;
  border:10px solid #ccc;
  box-shadow: #2f4050 1px 0px 1px;
  position: absolute;
  top:-50px;
  left: 50%;
  transform: translate(-50%)
}
.Avatar img{
  width:100px;
  height:100px;
}
</style>
