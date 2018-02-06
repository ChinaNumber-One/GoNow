<template>
	<div class="main">
		<div class="header border-bottom">
  	  <img @click="handleBack" class="back" src="/static/img/back.png">
  	  <h1 class="title">修改信息</h1>
      <span class="save" @click="onSubmit" plain>保存</span>
    </div>
    <div class="content">
      <div class="header-info">
          <div class="imgPub">
            <img :src="imageUrl" alt="" class="userimg">
            <input class="file" ref="file" @change="uploading($event)" type="file" accept="image/*">
          </div>
          <p class="changeTxt">
            <span>
              修改头像
            </span>
          </p>
        
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
      pic: '',
      files: [],
      file: '',
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
    uploading (event) {
      this.file = event.target.files[0]
      var windowURL = window.URL || window.webkitURL
      this.file = event.target.files[0]
      this.imageUrl = windowURL.createObjectURL(event.target.files[0])
    },
    onSubmit () {
      let day = ''
      if (typeof this.form.date1 === 'string') {
        day = this.form.date1
      } else {
        const birth = this.form.date1.toLocaleDateString().split('/')
        if (birth[1] < 10) {
          birth[1] = '0' + birth[1]
        }
        if (birth[2] < 10) {
          birth[2] = '0' + birth[2]
        }
        day = birth.join('-')
      }
      if (this.form.name && day && this.form.sex && this.form.desc) {
        console.log(day)
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        let formdata = new FormData()
        formdata.append('userImg', this.file)
        formdata.append('id', window.localStorage.userId)
        formdata.append('nickname', this.form.name)
        formdata.append('birth', day)
        formdata.append('sex', this.form.sex)
        formdata.append('desc', this.form.desc)
        axios.post('/common/userInfo.html', formdata, config).then(this.handleLoginSucc.bind(this))
        .catch(this.handleLoginErr.bind(this))
      } else {
        this.$message({
          message: '请填写完整！',
          type: 'warning',
          center: true,
          duration: 1000
        })
      }
    },
    handleLoginSucc (res) {
      if (res.data.result) {
        this.$message({
          message: '保存成功！',
          duration: 1000,
          type: 'success',
          center: true,
          onClose: () => {
            this.$router.push('/mine')
          }
        })
      }
    },
    handleLoginErr () {
      this.$message.error({
        message: '网路错误！',
        duration: 3000,
        center: true
      })
    }
  },
  mounted () {
    this.form.name = window.localStorage.userName
    this.form.desc = window.localStorage.desc
    this.form.sex = window.localStorage.sex
    this.form.date1 = window.localStorage.birth
    console.log(this.form)
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
    background: #ffbf1c;
    height: 3.5rem;
    padding-top: 1rem; 
    margin-bottom: .2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .imgPub {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    position: relative;
    background: #fff;
  }
  .userimg {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
  .file {
    opacity: 0;
    height: 150%;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
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
    margin-top: .4rem;
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
  .el-upload__input {
    display: block;
    height: 100%;
    width: 100%;
  }
</style>