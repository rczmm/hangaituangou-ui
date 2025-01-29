<template>
  <view class="shop-list">
    <view class="shop-item" v-for="item in state">
      <!-- 左侧复选框 -->
      <view class="checkbox-wrapper" @click="toggleCheck(item)">
        <checkbox :checked="item.checked" class="custom-checkbox"/>
      </view>
      <!-- 商品图片 -->
      <view class="product-image">
        <image
          src="https://img.alicdn.com/bao/uploaded///asearch.alicdn.com/bao/uploaded/O1CN01QlOWmD1loDsfA1o08_!!2203907254865.jpg_460x460q90.jpg_.webp"
          mode="aspectFill"/>
      </view>
      <!-- 商品信息       -->
      <view class="product-info">
        <text class="product-name">商品名称商品名称商品名称商品名称商品名称</text>
        <text class="product_price">￥100.00</text>

        <view class="quantity-control">
          <nut-button class="minus" @click="countComputed(item,'minus')">-</nut-button>
          <text class="count">{{ item.count }}</text>
          <nut-button class="plus" @click="item.count++">+</nut-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import './ShopList.scss'

interface Item {
  id: number;
  name: string;
  price: number;
  count: number;
  checked: boolean;
}

defineProps<{
  state: Item[]; // 使用 Item[] 表示 Item 类型的数组
}>();

const toggleCheck = (item: Item) => {
  item.checked = !item.checked;
};

const countComputed = (item: Item, sign: string) => {
  if (sign === 'minus') {
    if (item.count > 1) {
      return item.count--;
    } else {
      return item.count;
    }
  }
}

</script>
