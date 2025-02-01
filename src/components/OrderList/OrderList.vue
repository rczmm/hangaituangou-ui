<template>

  <view class="orderList">

    <view class="orderItem" v-for="item in items" :key="item.id" @click="navToOrderDetail(item.id)">

      <view class="orderItem-header">
        <view class="orderItem-header-date">
          {{ item.date }}
        </view>
        <view class="orderItem-header-status">
          {{ item.status }}
        </view>
      </view>

      <view class="orderItem-body">
        <scroll-view class="orderItem-body-scroll" :scroll-x="true">
          <image v-for="image in item.images" :src="image" class="orderItem-body-scroll-image"/>
        </scroll-view>
        <view class="orderItem-body-info">
          共{{ item.num }}件
        </view>
      </view>

      <view class="orderItem-body-pay">

        <nut-button size="mini" type="danger">删除订单</nut-button>
        <nut-button size="mini">订单分享</nut-button>
        <nut-button size="mini" color="#7232dd">立即评价</nut-button>
        <nut-button size="mini" color="#7232dd">再次购买</nut-button>


      </view>
    </view>


  </view>


</template>

<script setup lang="ts">
import './OrderList.scss';
import {reactive} from "vue";
import Taro from "@tarojs/taro";

const items = reactive([
  {
    id: 1,
    name: 'John',
    age: 30,
    date: '2023-05-01',
    status: '已完成',
    images: [
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp'
    ],
    num: 5,
  },
  {
    id: 2,
    name: 'Jane',
    age: 28,
    date: '2023-05-02',
    status: '待取货',
    images: [
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp'
    ],
    num: 10
  }
])

const navToOrderDetail = (id: string) => {
  Taro.navigateTo({
    url: `/pages/orderDetail/orderDetail?id=${id}`
  })
}

defineProps(
  {
    items: {
      type: Array,
      default: () => []
    }
  }
)

</script>
