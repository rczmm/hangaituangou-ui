<template>

  <view class="cart-container">

    <view class="title">
      <text>购物车</text>
    </view>

    <view class="address-card">
      <view class="address-info">
        <view class="address-name">
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
        <view class="person-name">
          <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanlaorenmao"
                     :size="25" color="red"/>
          <text>张三</text>
          <text>15900000000 ></text>
        </view>
      </view>
    </view>

    <view class="shop-list">
      <view class="shop-item" v-for="item in state" @click="toggleCheck(item)">
        <checkbox :checked="item.checked">
          <view class="shop-info">
            <view class="shop-name">
              <text>商品名称</text>
            </view>
            <view class="shop-price">
              <text>￥100</text>
            </view>
          </view>
        </checkbox>
      </view>
    </view>

    <view class="pay">
      <nut-button type="primary" @click="pay">去结算</nut-button>
    </view>


  </view>

</template>

<script setup lang="ts">
import './cart.scss'
import {IconFont} from "@nutui/icons-vue";
import {reactive} from "vue";

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
    count: 1,
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

const toggleCheck = (item: Item) => {
  item.checked = !item.checked;
};

const pay = () => {
  console.log(state)
}

</script>
