<template>
	<div class="main">
		<div class="header border-bottom">
  	  <img @click="handleBack" class="back" src="/static/img/back.png">
  	  <h1 class="title">反馈</h1>
  	  <span class="submit-btn" @click="submitInfo" plain>提交</span>
    </div>
		<el-input
		  type="textarea"
		  :rows="5"
		  placeholder="请输入反馈内容，最多200字"
		  v-model="textarea"
		  resize="none"
		  :maxlength = '200'>
		</el-input>
		<p class="yourContact">留下您的联系方式:</p>
		<el-input placeholder="请输入内容（必填）" v-model="phone" class="contact">
	    <template slot="prepend">手机</template>
	  </el-input>
	  <el-input placeholder="请输入内容" v-model="wechat" class="contact">
	    <template slot="prepend">微信</template>
	  </el-input>
	  <el-input placeholder="请输入内容" v-model="QQ" class="contact">
	    <template slot="prepend">企鹅</template>
	  </el-input>
	</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      textarea: '',
      QQ: '',
      wechat: '',
      phone: '',
      submitSucc: false
    }
  },
  methods: {
    handleBack () {
      this.$router.go(-1)
    },
    submitInfo () {
      if (this.textarea && this.phone) {
        axios.get('/common/feedback.html',
          {
            text: this.textarea,
            phone: this.phone,
            QQ: this.QQ || null,
            wechat: this.wechat || null
          }).then(this.handleSucc.bind(this))
            .catch(this.handleErr.bind(this))
      } else {
        alert('请填写完整')
      }
    },
    handleSucc (res) {
      if (res.data.result) {
        this.$notify({
          title: '发送成功',
          type: 'success',
          duration: 1000,
          onClose: function () {
            this.$router.push('/mine')
          }.bind(this)
        })
      }
    },
    handleErr () {
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
	.submit-btn {
		position:absolute;
	  right:.17rem;
	  top:0; 
	} 
	.title{
	  font-size:.32rem;
	  width:2.4rem;
	  margin:0 auto;
	  text-align:center;
 	}
 	.yourContact {
		margin-top: .4rem;
		text-indent: .1rem;
		line-height: .8rem;
 	}
 	.contact {
 		margin-bottom: .2rem;
 	}
  .el-message {
    width: 100%!important;
  }
  .alertBox {
    position: absolute;
    top: 1rem;
  }
</style>