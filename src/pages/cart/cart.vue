<template>

  <view class="cart-container">

    <view class="title">
      <text>购物车</text>
    </view>

    <view class="address-card">
      <view class="address-info">
        <view class="address-name" @click="navToAddress">
          <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanlaorenmao"
                     :size="25" color="red"/>
          <text>最强自提点 ></text>
        </view>
        <view class="address-details">
          <text>最强自提点具体的地址</text>
          <view class="address-tag">
            <nut-tag type="danger" plain round>
              <text>明天16:00前可取货</text>
            </nut-tag>
          </view>
        </view>
      </view>
      <view class="person-info">
        <view class="person-name" @click="navToAddress">
          <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanlaorenmao"
                     :size="25" color="red"/>
          <text>张三</text>
          <text>15900000000 ></text>
        </view>
      </view>
    </view>

    <ShopList :state="state">
    </ShopList>

    <view class="pay">
      <view class="pay-info">
        <view class="pay-info-left">
          <text>合计</text>
          <text>已选商品</text>
        </view>
        <view class="pay-info-right">
          <text>￥ {{ checkedPrice }}</text>
          <text>{{ checkedCount }}</text>
        </view>
      </view>
      <nut-button class="pay-btn" type="primary" @click="pay">去结算</nut-button>
    </view>
  </view>


</template>

<script setup lang="ts">
import './cart.scss'
import {IconFont} from "@nutui/icons-vue";
import {computed, reactive} from "vue";
import Taro from "@tarojs/taro";

interface Item {
  id: number;
  name: string;
  price: number;
  count: number;
  checked: boolean;
}

const state = reactive<Item[]>([
  {
    id: 1,
    name: '商品名称',
    price: 100,
    count: 10,
    checked: true
  },
  {
    id: 2,
    name: '商品名称',
    price: 100,
    count: 1,
    checked: true
  },
  {
    id: 3,
    name: '商品名称',
    price: 100,
    count: 1,
    checked: true
  },
])

const pay = () => {
  const totalAmount = checkedPrice.value
  Taro.navigateTo({
    url: `/pages/payment/payment?amount=${totalAmount}`
  })
}

// 计算属性 获取选中商品数量
const checkedCount = computed(() => {
  return state.filter(item => item.checked).reduce((acc, cur) => acc + cur.count, 0)
})

// 计算属性 获取选中商品总价
const checkedPrice = computed(() => {
  return state.filter(item => item.checked).reduce((acc, cur) => acc + cur.price * cur.count, 0)
})

const navToAddress = () => {
  Taro.navigateTo({
    url: '/pages/address/address'
  })
}


</script>
