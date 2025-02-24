<template>

  <view class="index-view">
    <view class="address-card">
      <view class="person-info">
        <IconFont font-class-name="iconfont" class-prefix="icon" name="shengdanzhuangshi"
                  :size="25" color="red"></IconFont>
        <text>张三</text>
        <text>11111111111</text>
      </view>
      <view class="address-info">
        <IconFont font-class-name="iconfont" class-prefix="icon" name="shengdanzhuangshi"
                  :size="25" color="red"></IconFont>
        <text>这是一个自提点</text>
      </view>
    </view>

    <view class="rate-card">
      <view class="rate-content">
        <text class="rate-label">订单评价</text>
        <nut-rate 
          v-model="value" 
          allow-half 
          class="rate-stars" 
          active-color="#FFB800"
          void-color="#E5E5E5"
          size="20"
          @change="handleRateChange"
        ></nut-rate>
      </view>
    </view>

    <view class="order-list">
      <view class="order-item" v-for="data in dataList">
        <OrderCard :data="data"/>
      </view>
    </view>


    <!--    <view class="question-card">-->

    <!--    </view>-->

    <!--    <view class="operator-card">-->

    <!--    </view>-->

  </view>

</template>
<script setup lang="ts">

import './orderDetail.scss';
import {IconFont} from "@nutui/icons-vue";
import {ref} from "vue";
import OrderCard from "../../components/OrderDetail/OrderCard.vue";

const value = ref(3.5);

const handleRateChange = (val: number) => {
  console.log('当前评分：', val);
  // 这里可以添加评分变化后的业务逻辑
};

const dataList = ref([
    {
      id: 1,
      title: '商品标题',
      price: '99.00',
      oldPrice: '99.01',
      img: 'https://img.alicdn.com/imgextra/i2/O1CN01l2Btbh1pTqhZlZp7w_!!0-tbCommonAudio.jpg',
      num: 1,
      tags: ['价格保护', '七天无理由退货']
    }, {
      id: 2,
      title: '商品标题',
      price: '99.00',
      oldPrice: '99.01',
      img: 'https://img.alicdn.com/imgextra/i2/O1CN01l2Btbh1pTqhZlZp7w_!!0-tbCommonAudio.jpg',
      num: 1,
      tags: ['价格保护', '七天无理由退货']
    }
  ]
)

</script>
<style lang="scss">
.rate-card {
  background: #fff;
  padding: 16px;
  margin: 12px;
  border-radius: 8px;
  
  .rate-content {
    display: flex;
    align-items: center;
    gap: 12px;
    
    .rate-label {
      font-size: 14px;
      color: #333;
      min-width: 56px;
    }
    
    .rate-stars {
      flex: 1;
    }
  }
}
</style>