<template>
	<div class="message-con">
		<div class="message-header">
      消息
      <span class="back-icon" @click="tolastrouter"></span>
    </div>
    <div class="message-tab border-bottom">
      <div class="sys-click" @click="checksystem">
        <span class="system-messages" ref="system">系统通知</span>
      </div>
      <div class="pri-click"  @click="checkprivate">
        <span class="private-letter" ref="private">私信</span>
      </div>
    </div>
    <system-messages :notice="notice" v-show="!ischeck"></system-messages>
    <private-messages :letter="letter" v-show="ischeck"></private-messages>
	</div>
</template>

<script>
import axios from 'axios'
import systemMessages from './systemMessages'
import privateMessages from './privateMessages'
export default {
  components: {
    systemMessages,
    privateMessages
  },
  data () {
    return {
      notice: [],
      letter: [],
      ischeck: false
    }
  },
  methods: {
    tolastrouter () {
      this.$router.go(-1)
    },
    getSystemData () {
      axios.get('/static/sysmessage.json')
          .then(this.handleGetSysSucc.bind(this))
          .catch(this.handleGetSysError.bind(this))
    },
    getPrivateDate () {
      axios.get('/static/primessage.json')
          .then(this.handleGetPriSucc.bind(this))
          .catch(this.handleGetPriError.bind(this))
    },
    handleGetSysSucc (res) {
      this.notice = res.data.data ? res.data.data.system : '暂无消息'
    },
    handleGetSysError () {
      console.log('失败')
    },
    handleGetPriSucc (res) {
      this.letter = res.data.data ? res.data.data.system : '暂无消息'
    },
    handleGetPriError () {
      console.log('失败')
    },
    checksystem () {
      this.ischeck = false
      this.$refs.system.style = 'font-weight: 900;border-bottom: .04rem solid #feb82f;'
      this.$refs.private.style = 'font-weight: 100;border-bottom: 0;'
    },
    checkprivate () {
      this.ischeck = true
      this.$refs.private.style = 'font-weight: 900;border-bottom: .04rem solid #feb82f;'
      this.$refs.system.style = 'font-weight: 100;border-bottom: 0;'
      this.getPrivateDate()
    }
  },
  created () {
    this.getSystemData()
  }
}
</script>

<style scoped>
	.message-con {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #fff;
  }
  .message-header {
    position: relative;
    height: .88rem;
    text-align: center;
    line-height: .88rem;
    font-size: .34rem;
    margin-bottom: .2rem;
  }
  .back-icon {
    display: inline-block;
    position: absolute;
    left: 0.2rem;
    top: .24rem;
    height: .41rem;
    width: .25rem;
    background: url(../../../static/img/back.png);
    background-size: 100% 100%;
  }
  .message-tab {
    width: 100%;
    height: .7rem;
  }
  .sys-click,.pri-click {
    float: left;
    width: 50%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
 
  .system-messages,.private-letter {
    display: inline-block;
    line-height: .66rem;
    font-size: .32rem;
    
  }
  .system-messages {
    font-weight: 900;
    border-bottom: .04rem solid #feb82f;
  }
  .scroller {
    flex:1;
    overflow: hidden;
  }
</style>