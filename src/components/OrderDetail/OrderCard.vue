<template>
  <!-- 结构调整 -->
  <view class="order-view">
    <image :src="data.img" class="product-image"/>
    <view class="content-main">
      <view class="tags-list">
        <text class="tag-item" v-for="tag in data.tags">{{ tag }}</text>
      </view>
      <text class="product-title">{{ data.title }}</text>
      <view class="bottom-area">
        <view class="price-group">
          <text class="real-price">实付 ￥{{ data.price }}</text>
          <text class="sub-price">共{{ data.num }}件 ￥{{ data.oldPrice }}/件</text>
        </view>
        <nut-button type="danger" class="action-btn" @click="navToReturnGood(data.id)">申请退款</nut-button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">

import './OrderCard.scss'
import Taro from "@tarojs/taro";

defineProps(
  {
    data: {
      type: Object,
      default: () => {
        return {
          img: '',
          title: '',
          tags: [],
          price: 0,
          oldPrice: 0,
          num: 0
        }
      }
    }
  }
)

const navToReturnGood = (id: string) => {
  Taro.navigateTo({
    url: `/pages/returnGood/index?id=${id}`
  })
}


</script>
