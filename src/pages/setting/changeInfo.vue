<template>
	<div class="main">
		<div class="header border-bottom">
  	  <img @click="handleBack" class="back" src="/static/img/back.png">
  	  <h1 class="title">修改信息</h1>
      <span class="save" @click="onSubmit" plain>保存</span>
    </div>
    <div class="content">
      <div class="header-info">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <p class="changeTxt">
            <span>
              修改头像
            </span>
          </p>
        </el-upload>
      </div>
      <div class="content-info">
        <el-form ref="form" :model="form" label-width="1rem">
          <el-form-item label="昵称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="生日">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="签名">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      imageUrl: window.localStorage.userImg,
      form: {
        name: '',
        date1: '',
        sex: '',
        desc: ''
      }
    }
  },
  methods: {
    handleBack () {
      this.$router.go(-1)
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    onSubmit () {
      console.log(this.form.name)
      console.log(this.form.date1.toLocaleDateString())
      console.log(this.form.sex)
      console.log(this.form.desc)
      axios.get('/common/userInfo.html',
        {
          id: window.localStorage.userId,
          name: this.form.name,
          birth: this.form.date1.toLocaleDateString(),
          sex: this.form.sex,
          desc: this.form.desc
        }).then(this.handleLoginSucc.bind(this))
      .catch(this.handleLoginErr.bind(this))
    },
    handleLoginSucc (res) {
      if (res.data.result) {
        this.$notify({
          title: '修改成功',
          type: 'success',
          duration: 1000,
          onClose: function () {
            this.$router.push('/mine')
          }.bind(this)
        })
      }
    },
    handleLoginErr () {
      this.$notify.error({
        duration: 1000,
        title: '发送失败'
      })
    }
  }
}
</script>

<style scoped>
	.main {
		background: #fff;
		height: 100vh;
    display: flex;
    flex-direction: column;
	}
	.header {
  	position: relative;
    height: .88rem;
    line-height: .88rem;
    width:100%;
    background: #fff;
  }
	.back {
		position:absolute;
	  left:.17rem;
	  top:.25rem;
	  width:.25rem;
	  height:.41rem;
	} 
  .save {
    position:absolute;
    right:.17rem;
    top: 0;
    color: #25a4bb;
  }
	.title{
	  font-size:.32rem;
	  width:100%;
	  text-align: center;
 	}
  .content {
    flex: 1;
  }
  .header-info {
    background: url(../../../static/img/bg.jpg) no-repeat center;
    background-size: 90% 100%;
    height: 3.5rem;
    padding-top: 1rem; 
    margin-bottom: .2rem;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-top: 1rem;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar-uploader {
    display: flex;
    justify-content: center;
  }
  .el-icon-plus, .avatar {
    height: 2rem;
    width: 2rem;
    line-height: 2rem;
    border-radius: 50%;
    overflow: hidden;
    background: #eee;
  }
  .changeTxt {
    text-align: center;
    margin-top: .6rem;
  }
  .changeTxt span {
    background: rgba(255,255,255,.5);
    font-size: .32rem;
    padding: .1rem .2rem;
    border-radius: .1rem;
    border:.02rem dashed #eee;
    color:#000;
  }
  .el-upload {
    margin-top: 1rem!important;
  }
  .el-form-item {
    margin-bottom: .2rem;
  }
</style>