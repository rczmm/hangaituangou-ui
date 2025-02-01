<template>

  <view class="manage-view">

    <nut-searchbar v-model="searchKey" @search="search">
      <template #rightout>
        <nut-button @click="search">搜索</nut-button>
      </template>
    </nut-searchbar>

    <!-- 订单状态筛选 -->
    <nut-tabs v-model="orderStatus">
      <nut-tab-pane title="全部"/>
      <nut-tab-pane title="待发货"/>
      <nut-tab-pane title="已完成"/>
      <nut-tab-pane title="退款/退货"/>
    </nut-tabs>

    <!-- 订单列表 -->
    <view v-for="order in filteredOrders" :key="order.id" class="order-item">
      <view>{{ order.userName }} - {{ order.totalPrice }} 元</view>
      <view v-if="order.status === '退款中'">
        <Button type="submit" @click="handleRefund(order)">处理退款</Button>
      </view>
    </view>

  </view>

</template>

<script setup lang="ts">

import {computed, ref} from "vue";

const searchKey = ref('');

const orderStatus = ref("全部");
const orders = ref([
  {id: 1, userName: "张三", totalPrice: 100, status: "已完成"},
  {id: 2, userName: "李四", totalPrice: 200, status: "退款中"},
]);

const filteredOrders = computed(() => {
  return orders.value.filter(order =>
    (orderStatus.value === "全部" || order.status === orderStatus.value) &&
    (order.userName.includes(searchKey.value) || String(order.id).includes(searchKey.value))
  );
});

const handleRefund = (order) => {
  console.log("处理退款:", order);
};

const search = () => {
  console.log("搜索:", searchKey.value);
};

defineProps()

</script>
