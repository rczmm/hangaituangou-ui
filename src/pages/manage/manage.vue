<template>
  <text style="margin-left: 20px;font-size: 20px;">我的功能</text>
  <view class="manage-view">
    <view class="manage" @click="navToManage">
      <text>订单</text>
    </view>
    <view class="profit" @click="navToProfit">
      <text>收益</text>
    </view>
  </view>

</template>

<script setup lang="ts">
import Taro from '@tarojs/taro';

const navToManage = () => {
  Taro.navigateTo({
    url: '/pages/OrderManage/OrderManage'
  })
}

const navToProfit = () => {
  Taro.navigateTo({
    url: '/pages/profit/index'
  })
}





</script>

<style lang="scss">
.manage-view {
  padding: 16px;
  background-color: #f5f5f5;
  display: flex;
  height: 100vh;
}
.manage{
  background-color: rgb(255, 255, 255);
  padding: 40px;
  margin-right: 30px;
  border-radius: 20px;
  height: 50px
}

.profit{
  background-color: rgb(255, 255, 255);
  padding: 40px;
  border-radius: 20px;
  height: 50px
}

</style>
