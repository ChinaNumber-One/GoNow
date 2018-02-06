<template>
	<div>
		<div class="header">
			<span @click="handleBack">取消</span>
			<span>发布游记</span>
			<span @click="handlePublish">确定</span>
		</div>
		<div class="content">
			<!-- <input type="textarea" row="4" cols="10" placeholder="请输入你的游记..."> -->
			<input class="title" ref="titleWrap" type="text" placeholder="请输入您的游记标题">
			<textarea placeholder="请输入您的游记..." ref="text" cols="30" rows="5"></textarea>
		</div>
		<div class="add" >
			<!-- <div v-for="(item) in imgList">
				<img ref="imgTo" id="imgPre" :src="item.src" alt="">
			</div> -->
			<!-- 请求参数时e得写成$event -->
			<div class="imgWrap" ref="box" @click="handleDelete(index)" v-for="(item,index) in imgList">
				<img class="imgCont" :src="item" alt="">
			</div>
			<div class="add-img">
				<span>+</span>
				<input ref="file" type="file" @change="handleFile">
			</div>
		</div>
	</div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'publish',
    data () {
      return {
        imgList: [],
        imgName: [],
        files: []
      }
    },
    methods: {
      handleFile (e) {
        var file = e.target.files
        var _this = this
        var reader = null
        var leng = file.length
        for (var i = 0; i < leng; i++) {
          _this.imgName.push(file[i])
          reader = new window.FileReader()
          reader.readAsDataURL(file[i])
          reader.onload = function (e) {
            _this.imgList.push(e.target.result)
          }
        }
        console.log(this.imgName)
      },
      handleDelete (index) {
        this.imgList.splice(index, 1)
        this.imgName.splice(index, 1)
        console.log(this.imgName)
        console.log(index)
      },
      handlePublish () {
        var formData = new FormData()
        this.imgName.forEach((value, index) => {
          if (value !== null) {
            formData.append('file', value)
          }
        })
        formData.append('title', this.$refs.titleWrap.value)
        formData.append('text', this.$refs.text.value)
        formData.append('userId', window.localStorage.userId)
        axios.post('/common/publish.html', formData, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .then(this.getDiarySucc.bind(this))
        .catch(this.getDiaryErr.bind(this))
      },
      getDiarySucc (res) {
        this.$message({
          message: '发布成功！',
          duration: 1000,
          center: true,
          type: 'success',
          onClose: () => {
            this.$router.push('/mine')
          }
        })
      },
      getDiaryErr () {
        this.$message.error({
          message: '网络或服务器错误！',
          duration: 1000,
          center: true
        })
      },
      handleBack () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped lang="stylus">
	.header 
		display: flex;
		box-sizing:border-box;
		padding:0 0.2rem;
		justify-content: space-between;
		align-items: center;
		height:0.8rem;
		background: #fff;
		span:nth-of-type(1)
			font-size:.3rem
		span:nth-of-type(2)
			font-size:.36rem
		span:nth-of-type(3)
			font-size:.3rem
			width:1rem
			text-align:center
			height:.5rem
			line-height:.5rem
			background:#eee
	.content
		height:1.88rem
		margin:.32rem .2rem
		margin-right:.2rem
		margin-bottom:1rem
		.title
			height:.5rem
			width:99%
			margin-bottom:.2rem
			border:none
			border-radius:.3rem
			box-sizing:border-box
			padding:0 0.2rem
		textarea
			height:1.88rem
			width:100%
			box-sizing:border-box
			padding:.2rem .2rem
			resize:none
			overflow:hidden
			border:none
			font-size:.3rem
			margin-bottom:.2rem
	.add
		margin:0 0.2rem
		display:flex
		flex-wrap:wrap
		.add-img
			position:relative
			width:30%
			height:2.2rem
			line-height:2rem
			float:left
			background:#fff
			span
				position:absolute
				left:50%
				transform:translateX(-50%)
				font-size:1rem
			input
				position:absolute
				height:2rem
				top:50%
				transform: translateY(-50%)
				opacity:0
		.imgWrap
			width:30%
			height:2.2rem
			margin-bottom:.1rem
			margin-right:.15rem
			.imgCont
				display:block
				width:100%
				height:2.2rem
</style>