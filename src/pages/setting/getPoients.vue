<template>
	<div class="main">
		<div class="header border-bottom">
  	  <img @click="handleBack" class="back" src="/static/img/back.png">
  	  <h1 class="title">打分</h1>
    </div>
		<div class="block">
		  <span class="demonstration">{{text}}</span>
		  <el-rate
			  v-model="value"
			  show-text
			  allow-half
			  @change="change">
			</el-rate>
			<el-button type="warning" v-show="showbtn" class="btn" @click="goRouter">去反馈</el-button>
			<el-button type="primary" v-show="!showbtn" class="btn" @click="submit" plain>提交</el-button>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      value: null,
      text: '请给我们评个星吧',
      showbtn: true,
      points: 0
    }
  },
  methods: {
    handleBack () {
      this.$router.go(-1)
    },
    change (e) {
      this.points = e
      if (e <= 3) {
        this.text = '用的不爽,请点击跳转反馈页面进行反馈，我们尽快改进！'
        this.showbtn = true
      } else {
        this.text = '谢谢支持，我们会继续努力的~！'
        this.showbtn = false
      }
    },
    goRouter () {
      this.$router.push('/goFeedback')
    },
    submit () {
      axios.get('/score/add.html',
        {
          params: {
            point: this.points
          }
        }).then(this.handleSucc.bind(this))
          .catch(this.handleErr.bind(this))
    },
    handleSucc (res) {
      if (res.data.result) {
        this.$message({
          message: '提交成功！',
          duration: 1000,
          type: 'success',
          center: true,
          onClose: () => {
            this.$router.push('/mine')
          }
        })
      }
    },
    handleErr () {
      this.$notify.error({
        title: '发送失败',
        duration: 1000
      })
    }
  }
}
</script>

<style scoped>
	.main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: #fff;
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
	.title{
	  font-size:.32rem;
	  width:2.4rem;
	  margin:0 auto;
	  text-align:center;
 	}
 	.block {
 		flex: 1;
 		display: flex;
 		flex-direction: column;
 		align-items: center;
 		padding:0 1rem;
 	}
 	.demonstration {
 		margin-top: 3rem;
 		font-style: .34rem;
 		margin-bottom: .2rem;
 		line-height: .4rem;
    height: .8rem;
 		text-align: center;
 	}
 	.btn {
 		margin-top: 1rem;
 	}
</style>	