<template>
  <view class="manage-view">
    <nut-searchbar v-model="searchKey" @search="search">
      <template #rightout>
        <nut-button @click="search">搜索</nut-button>
      </template>
    </nut-searchbar>

    <!-- 订单状态筛选 -->
    <nut-tabs v-model="orderStatus" @change="handleTabChange">
      <nut-tab-pane title="全部" value="全部"/>
      <nut-tab-pane title="待发货" value="待发货"/>
      <nut-tab-pane title="已完成" value="已完成"/>
      <nut-tab-pane title="退款/退货" value="退款中"/>
    </nut-tabs>

    <!-- 收益按钮 -->
    <view class="profit-button">
      <nut-button type="primary" size="small" @click="navToProfit">查看收益</nut-button>
    </view>

    <!-- 订单列表 -->
    <view v-for="order in filteredOrders" :key="order.id" class="order-item">
      <view class="order-info">
        <view class="order-header">
          <text class="order-id">订单号：{{ order.id }}</text>
          <text class="order-status">{{ order.status }}</text>
        </view>
        <view class="user-info">
          <text class="user-name">{{ order.userName }}</text>
          <text class="total-price">￥{{ order.totalPrice }}</text>
        </view>
      </view>
      <view class="action-buttons">
        <nut-button 
          type="primary" 
          size="small"
          @click="handleRefund(order)"
          v-if="order.status === '退款中'"
        >处理退款</nut-button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Button as NutButton } from '@nutui/nutui-taro';
import Taro from "@tarojs/taro";

const searchKey = ref('');
const orderStatus = ref("全部");
const orders = ref([
  {id: 1001, userName: "张三", totalPrice: 100, status: "已完成", items: [
    {id: 1, name: "苹果", price: 50, quantity: 2},
    {id: 2, name: "香蕉", price: 25, quantity: 2}
  ]},
  {id: 1002, userName: "李四", totalPrice: 200, status: "退款中", items: [
    {id: 3, name: "橙子", price: 100, quantity: 2}
  ]},
  {id: 1003, userName: "王五", totalPrice: 150, status: "待发货", items: [
    {id: 4, name: "葡萄", price: 75, quantity: 2}
  ]},
]);

const filteredOrders = computed(() => {
  return orders.value.filter(order =>
    (orderStatus.value === "全部" || order.status === orderStatus.value) &&
    (order.userName.includes(searchKey.value) || String(order.id).includes(searchKey.value))
  );
});

const handleRefund = (order) => {
  Taro.navigateTo({
    url: `/pages/returnGood/returnForm?orderId=${order.id}&totalPrice=${order.totalPrice}`
  });
};

const search = () => {
  console.log("搜索:", searchKey.value);
};

const handleTabChange = (value) => {
  orderStatus.value = value;
};

const navToProfit = () => {
  Taro.navigateTo({
    url: '/pages/profit/profit'
  });
};
</script>

<style lang="scss">
.manage-view {
  padding: 16px;

  .profit-button {
    margin: 16px 0;
    text-align: right;
  }

  .order-item {
    margin: 16px 0;
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .order-info {
      flex: 1;

      .order-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;

        .order-id {
          color: #666;
          font-size: 14px;
        }

        .order-status {
          color: #1890ff;
          font-size: 14px;
        }
      }

      .user-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .user-name {
          font-size: 16px;
          font-weight: 500;
        }

        .total-price {
          color: #ff4d4f;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }

    .action-buttons {
      margin-left: 16px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
