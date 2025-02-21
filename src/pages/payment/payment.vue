<template>
  <view class="payment-container">
    <!-- 订单信息区域 -->
    <view class="order-info">
      <view class="order-amount">
        <text class="amount-label">支付金额</text>
        <text class="amount-value">￥{{ orderAmount }}</text>
      </view>
      <view class="order-detail">
        <text class="detail-label">订单编号：</text>
        <text class="detail-value">{{ orderId }}</text>
      </view>
    </view>

    <!-- 支付二维码区域 -->
    <view class="qr-code-section">
      <view class="qr-code-wrapper">
        <!-- 暂时用空白区域替代二维码 -->
        <view class="qr-code-placeholder"></view>
      </view>
      <text class="scan-tip">请使用微信扫码支付</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Taro from '@tarojs/taro'

// 获取路由参数中的订单金额
const orderAmount = ref(0)
const orderId = ref('ORDER' + Date.now())

// 在组件挂载时获取路由参数
import { onMounted } from 'vue'

onMounted(() => {
  const params = Taro.getCurrentInstance().router?.params
  orderAmount.value = Number(params?.amount) || 0
})
</script>

<style lang="scss">
.payment-container {
  padding: 20px;
  background-color: #f8f8f8;
  min-height: 100vh;
}

.order-info {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

.order-amount {
  text-align: center;
  margin-bottom: 20px;

  .amount-label {
    font-size: 16px;
    color: #666;
    display: block;
    margin-bottom: 8px;
  }

  .amount-value {
    font-size: 32px;
    font-weight: bold;
    color: #333;
  }
}

.order-detail {
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #666;

  .detail-value {
    margin-left: 8px;
  }
}

.qr-code-section {
  background-color: #fff;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
}

.qr-code-wrapper {
  margin: 0 auto;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
}

.qr-code-placeholder {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  border-radius: 8px;
}

.scan-tip {
  font-size: 14px;
  color: #666;
}
</style>