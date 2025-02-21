<template>
  <view class="profit-view">
    <!-- 数据概览卡片 -->
    <view class="overview-card">
      <view class="total-profit">
        <text class="label">总收益(元)</text>
        <text class="amount">{{ totalProfit }}</text>
      </view>
      <view class="profit-stats">
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

    <!-- 提现卡片 -->
    <view class="withdraw-card">
      <view class="card-header">
        <text class="title">可提现金额</text>
        <text class="amount">￥{{ availableAmount }}</text>
      </view>
      <nut-button type="primary" block @click="handleWithdraw">提现</nut-button>
    </view>

    <!-- 收益明细列表 -->
    <view class="profit-list">
      <view class="list-header">
        <text class="title">收益明细</text>
      </view>
      <view v-for="item in profitList" :key="item.id" class="profit-item">
        <view class="item-info">
          <text class="order-id">订单号：{{ item.orderId }}</text>
          <text class="date">{{ item.date }}</text>
        </view>
        <view class="item-amount">
          <text :class="['amount', item.type === '收入' ? 'income' : 'withdraw']">{{ item.type === '收入' ? '+' : '-' }}{{ item.amount }}</text>
          <text class="type">{{ item.type }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 数据统计
const totalProfit = ref(1234.56);
const todayProfit = ref(123.45);
const monthProfit = ref(789.01);
const availableAmount = ref(456.78);

// 收益明细列表
const profitList = ref([
  { id: 1, orderId: '202401010001', date: '2024-01-01 12:34', amount: 50.00, type: '收入' },
  { id: 2, orderId: '202401010002', date: '2024-01-01 14:23', amount: 30.00, type: '收入' },
  { id: 3, orderId: '', date: '2024-01-01 16:45', amount: 100.00, type: '提现' },
]);

// 提现处理
const handleWithdraw = () => {
  console.log('提现金额:', availableAmount.value);
};
</script>

<style lang="scss">
.profit-view {
  padding: 16px;
  background-color: #f5f5f5;

  .overview-card {
    background-color: #1890ff;
    color: white;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 16px;

    .total-profit {
      text-align: center;
      margin-bottom: 20px;

      .label {
        font-size: 14px;
        opacity: 0.9;
      }

      .amount {
        display: block;
        font-size: 32px;
        font-weight: bold;
        margin-top: 8px;
      }
    }

    .profit-stats {
      display: flex;
      justify-content: space-around;

      .stat-item {
        text-align: center;

        .label {
          font-size: 12px;
          opacity: 0.9;
        }

        .amount {
          display: block;
          font-size: 18px;
          margin-top: 4px;
        }
      }
    }
  }

  .withdraw-card {
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 16px;

    .card-header {
      margin-bottom: 16px;

      .title {
        font-size: 14px;
        color: #666;
      }

      .amount {
        display: block;
        font-size: 24px;
        font-weight: bold;
        color: #333;
        margin-top: 8px;
      }
    }
  }

  .profit-list {
    background-color: white;
    border-radius: 8px;
    padding: 16px;

    .list-header {
      margin-bottom: 16px;

      .title {
        font-size: 16px;
        font-weight: 500;
        color: #333;
      }
    }

    .profit-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #f0f0f0;

      &:last-child {
        border-bottom: none;
      }

      .item-info {
        .order-id {
          display: block;
          font-size: 14px;
          color: #333;
          margin-bottom: 4px;
        }

        .date {
          font-size: 12px;
          color: #999;
        }
      }

      .item-amount {
        text-align: right;

        .amount {
          display: block;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 4px;

          &.income {
            color: #52c41a;
          }

          &.withdraw {
            color: #ff4d4f;
          }
        }

        .type {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>