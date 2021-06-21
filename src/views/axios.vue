<template>
  <div class="axios-container page-container">
    <div class="page-title">Axios Test Page</div>
    <div class="page-title" @click="tips">tips</div>
    <div class="user-info-container">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <el-button class="button" type="text" @click="getUserInfo"
              >发送请求
            </el-button>
          </div>
        </template>
        <div class="info-list-box" v-loading="loading">
          <div class="text item" v-if="userInfo?.name">name: {{ userInfo?.name }}</div>
          <div class="text item" v-if="userInfo?.bio">bio: {{ userInfo?.bio }}</div>
          <div class="text item" v-if="userInfo?.blog">blog: {{ userInfo?.blog }}</div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { ElMessage } from 'element-plus'
import { userLogin } from '../api'

console.log(userLogin)
export default defineComponent({
  name: 'Axios',
  setup() {
    const userInfo: Ref = ref(null)
    const loading = ref(false)
    const getUserInfo = () => {
      loading.value = true
      userLogin()
        .then((response) => {
          console.log('response: ', response.data)
          userInfo.value = response.data
          loading.value = false
        })
        .catch((error) => {
          // console.log(this)
          ElMessage.error(error)
          loading.value = false
          console.error(error)
        })
    }
    return {
      userInfo,
      loading,
      getUserInfo
    }
  },
  methods: {
    tips() {
      this.$message.error('tips')
    }
  }
})
</script>
<style scoped lang="scss">
.axios-container {
  .user-info-container {
    display: flex;
    justify-content: center;
    width: 100%;
    .info-list-box {
      padding: 10px;
      .text {
        font-size: 14px;
      }
      .item {
        margin-bottom: 18px;
      }
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .box-card {
      width: 480px;
    }
  }
}
</style>
