<template>
    <div>
        <img :src="avatar" alt="">
        <input type="file" @change="changeImg($event)" ref="imgfiles">
        <button @click="edit">保存</button>
       
    </div>
</template>
<script>
export default {
    data(){
        return {
            avatar:''
        }
    },
    methods:{
        edit(){
            var image = new FormData();
            
            image.append('avatar',this.$refs.imgfiles.files[0])

            this.$http.post('postImg',image,{headers: {
              "Content-Type": "multipart/form-data"
            }}).then(function(res){
                console.log(res)
                if(res.body.status == 0){
                    this.$http.get('getImg').then(function(res){
                        console.log(res.body)
                       
                        var url = "http://localhost:2000/public/"+res.body[0].img_url
                        this.$store.commit('editImg',url)
                    })
                }
            })
            
        },
        changeImg(e){
            var reader = new FileReader();
            console.log(e.target.files[0])
            reader.readAsDataURL(e.target.files[0])
            var _this = this;
            reader.onload = function(){
                _this.avatar = reader.result;
                console.log(reader.result)
            }
        }
    }
   
}
</script>
<style>

</style>


