<template>
  <view class="page-container">
    <!-- 退货状态项 -->
    <nut-cell class="return-item" v-for="item in data" @click="navToReturnForm(item.icon)">
      <view class="icon">{{ item.icon }}</view>
      <view>
        <text class="title">{{ item.title }}</text>
        <text class="description">{{ item.description }}</text>
      </view>
    </nut-cell>

    <!-- 服务条款 -->
    <view class="service-section">
      <text class="service-title">服务保障</text>
      <text class="service-description">
        7天无理由退货，商品自收到之日起7日内，若您不满意，可申请退货退款。<br/>
        <span class="highlight">7天无理由退货有效期：2025-02-04 00时到期。</span>
      </text>
    </view>
  </view>

</template>

<script setup lang="ts">
import './index.scss';
import Taro from "@tarojs/taro";

const data = [
  {
    title: '退货退款（已提交）',
    description: '商品已提交，需先将商品返回至自提点。',
    icon: '已'
  },
  {
    title: '仅退款（待自提点）',
    description: '商品未自提，或与自提点一致只退款。',
    icon: '待'
  },
  {
    title: '仅退款（缺货/物流未送达）',
    description: '商品未送达，或缺货退款。',
    icon: '缺'
  }
]

const navToReturnForm = (icon: string) => {
  Taro.navigateTo({
    url: `/pages/returnGood/returnForm?icon=${icon}`
  })
}


</script>
