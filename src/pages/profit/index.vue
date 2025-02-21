<template>
  <view class="profit-page">
    <!-- 收益统计卡片 -->
    <view class="profit-stats">
      <view class="total-profit">
        <text class="label">总收益(元)</text>
        <text class="amount">{{ totalProfit }}</text>
      </view>
      <view class="stats-row">
        <view class="stat-item">
          <text class="label">今日收益(元)</text>
          <text class="amount">{{ todayProfit }}</text>
        </view>
        <view class="stat-item">
          <text class="label">本月收益(元)</text>
          <text class="amount">{{ monthProfit }}</text>
        </view>
      </view>
    </view>

    <!-- 提现按钮 -->
    <nut-button type="primary" block class="withdraw-btn" @click="handleWithdraw">
      提现
    </nut-button>

    <!-- 收益明细列表 -->
    <view class="profit-list">
      <view class="list-header">
        <text class="title">收益明细</text>
      </view>
      <nut-cell-group>
        <nut-cell v-for="item in profitList" :key="item.id" class="profit-item">
          <template #title>
            <view class="profit-info">
              <text class="order-id">订单号：{{ item.orderId }}</text>
              <text class="profit-amount">+{{ item.amount }}元</text>
            </view>
          </template>
          <template #desc>
            <view class="profit-detail">
              <text class="time">{{ item.time }}</text>
              <text class="status">{{ item.status }}</text>
            </view>
          </template>
        </nut-cell>
      </nut-cell-group>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Taro from '@tarojs/taro';

// 收益数据
const totalProfit = ref('1280.00');
const todayProfit = ref('128.00');
const monthProfit = ref('680.00');

// 收益明细列表
const profitList = ref([
  {
    id: 1,
    orderId: 'DD20230601001',
    amount: '12.80',
    time: '2023-06-01 12:30:45',
    status: '已结算'
  },
  {
    id: 2,
    orderId: 'DD20230601002',
    amount: '25.60',
    time: '2023-06-01 14:20:30',
    status: '已结算'
  },
  {
    id: 3,
    orderId: 'DD20230601003',
    amount: '18.40',
    time: '2023-06-01 16:45:15',
    status: '待结算'
  }
]);

// 处理提现
const handleWithdraw = () => {
  Taro.navigateTo({
    url: '/pages/profit/withdraw'
  });
};
</script>

<style lang="scss">
.profit-page {
  padding: 16px;
  background-color: #f5f5f5;

  .profit-stats {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 16px;

    .total-profit {
      text-align: center;
      margin-bottom: 20px;

      .label {
        font-size: 14px;
        color: #666;
      }

      .amount {
        display: block;
        font-size: 32px;
        font-weight: bold;
        color: #333;
        margin-top: 8px;
      }
    }

    .stats-row {
      display: flex;
      justify-content: space-between;

      .stat-item {
        flex: 1;
        text-align: center;

        .label {
          font-size: 12px;
          color: #666;
        }

        .amount {
          display: block;
          font-size: 18px;
          color: #333;
          margin-top: 4px;
        }
      }
    }
  }

  .withdraw-btn {
    margin-bottom: 16px;
  }

  .profit-list {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;

    .list-header {
      padding: 16px;
      border-bottom: 1px solid #eee;

      .title {
        font-size: 16px;
        font-weight: bold;
        color: #333;
      }
    }

    .profit-item {
      .profit-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .order-id {
          font-size: 14px;
          color: #333;
        }

        .profit-amount {
          font-size: 16px;
          color: #f60;
          font-weight: bold;
        }
      }

      .profit-detail {
        display: flex;
        justify-content: space-between;
        margin-top: 4px;

        .time {
          font-size: 12px;
          color: #999;
        }

        .status {
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
}
</style>