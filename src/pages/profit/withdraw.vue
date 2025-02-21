<template>
  <view class="withdraw-page">
    <!-- 可提现金额 -->
    <view class="available-amount">
      <text class="label">可提现金额（元）</text>
      <text class="amount">{{ availableAmount }}</text>
    </view>

    <!-- 提现金额输入 -->
    <view class="withdraw-input">
      <text class="label">提现金额</text>
      <view class="input-wrapper">
        <text class="currency">¥</text>
        <nut-input
          v-model="withdrawAmount"
          type="number"
          placeholder="请输入提现金额"
          class="amount-input"
        />
      </view>
      <text class="all-amount" @click="setMaxAmount">全部提现</text>
    </view>

    <!-- 提现方式 -->
    <view class="withdraw-method">
      <text class="section-title">提现方式</text>
      <nut-radio-group v-model="selectedMethod">
        <nut-cell>
          <nut-radio label="1">
            <view class="method-item">
              <image src="/static/wechat-pay.png" class="method-icon" />
              <text>微信零钱</text>
            </view>
          </nut-radio>
        </nut-cell>
        <nut-cell>
          <nut-radio label="2">
            <view class="method-item">
              <image src="/static/bank-card.png" class="method-icon" />
              <text>银行卡</text>
            </view>
          </nut-radio>
        </nut-cell>
      </nut-radio-group>
    </view>

    <!-- 提现说明 -->
    <view class="withdraw-notice">
      <text class="notice-title">提现说明</text>
      <text class="notice-item">1. 单笔提现金额不得低于1元</text>
      <text class="notice-item">2. 提现金额将在1-3个工作日内到账</text>
      <text class="notice-item">3. 如遇到问题请联系客服</text>
    </view>

    <!-- 提现按钮 -->
    <nut-button type="primary" block class="submit-btn" @click="handleSubmit">
      确认提现
    </nut-button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Taro from '@tarojs/taro';

const availableAmount = ref('1280.00');
const withdrawAmount = ref('');
const selectedMethod = ref('1');

// 设置最大提现金额
const setMaxAmount = () => {
  withdrawAmount.value = availableAmount.value;
};

// 提交提现申请
const handleSubmit = () => {
  if (!withdrawAmount.value) {
    Taro.showToast({
      title: '请输入提现金额',
      icon: 'none'
    });
    return;
  }

  if (Number(withdrawAmount.value) < 1) {
    Taro.showToast({
      title: '提现金额不能小于1元',
      icon: 'none'
    });
    return;
  }

  if (Number(withdrawAmount.value) > Number(availableAmount.value)) {
    Taro.showToast({
      title: '提现金额不能大于可提现金额',
      icon: 'none'
    });
    return;
  }

  // TODO: 调用提现API
  console.log('提现申请', {
    amount: withdrawAmount.value,
    method: selectedMethod.value
  });

  Taro.showToast({
    title: '提现申请已提交',
    icon: 'success',
    duration: 2000
  }).then(() => {
    setTimeout(() => {
      Taro.navigateBack();
    }, 2000);
  });
};
</script>

<style lang="scss">
.withdraw-page {
  padding: 16px;
  background-color: #f5f5f5;

  .available-amount {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 16px;
    text-align: center;

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

  .withdraw-input {
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;

    .label {
      font-size: 14px;
      color: #333;
      margin-bottom: 12px;
      display: block;
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      padding-bottom: 8px;

      .currency {
        font-size: 24px;
        color: #333;
        margin-right: 8px;
      }

      .amount-input {
        flex: 1;
        font-size: 24px;
      }
    }

    .all-amount {
      font-size: 14px;
      color: #1989fa;
      margin-top: 8px;
      text-align: right;
      display: block;
    }
  }

  .withdraw-method {
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;

    .section-title {
      font-size: 14px;
      color: #333;
      margin-bottom: 12px;
      display: block;
    }

    .method-item {
      display: flex;
      align-items: center;

      .method-icon {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
    }
  }

  .withdraw-notice {
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 24px;

    .notice-title {
      font-size: 14px;
      color: #333;
      margin-bottom: 12px;
      display: block;
    }

    .notice-item {
      font-size: 12px;
      color: #666;
      line-height: 1.6;
      display: block;
    }
  }

  .submit-btn {
    margin-top: 24px;
  }
}
</style>