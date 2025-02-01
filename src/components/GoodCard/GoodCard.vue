<template>

  <view class="good-list">

    <view class="good-item" v-for="(item, index) in state" :key="index">
      <!-- 商品图片 -->
      <view class="good-image" @click="navToDetail(item)">
        <image
          src="https://img.alicdn.com/bao/uploaded///asearch.alicdn.com/bao/uploaded/O1CN01QlOWmD1loDsfA1o08_!!2203907254865.jpg_460x460q90.jpg_.webp"
          mode="aspectFill"/>
      </view>
      <!-- 商品信息       -->
      <view class="good-info">
        <text class="good-name">{{ item.name }}</text>
        <nut-price class="good-price" :price="item.price" symbol="￥" size="normal"/>

        <view class="quantity-control">
          <nut-button v-if="item.count!=0" class="minus" @click="countComputed(item,'minus')">-</nut-button>
          <text v-if="item.count!=0" class="count">{{ item.count }}</text>
          <nut-button v-if="item.count!=0" class="plus" @click="item.count++">+</nut-button>
          <nut-button v-if="item.count==0" class="plus" @click="item.count++">
            <IconFont font-class-name="iconfont" class-prefix="icon" name="shengdanzhuangshi"
                      :size="25" color="red"></IconFont>
          </nut-button>
        </view>

      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import './GoodCard.scss';
import {IconFont} from "@nutui/icons-vue";
import Taro from "@tarojs/taro";

interface Item {
  id: number;
  name: string;
  price: number;
  count: number;
}

defineProps<{
  state: any;
}>();

const countComputed = (item: Item, sign: string) => {
  if (sign === 'minus') {
    if (item.count >= 1) {
      return item.count--;
    } else {
      return item.count;
    }
  }
}

const navToDetail = (item: any) => {
  Taro.navigateTo({
    url: `/pages/details/details?id=${item.id}`
  })
}


</script>

