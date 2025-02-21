<template>
  <view class="index-view">
    <!-- 商品列表 -->
    <view class="goods-list">
      <view class="goods-item" v-for="item in orderItems" :key="item.id">
        <view class="goods-info">
          <text class="goods-name">{{ item.name }}</text>
          <text class="goods-price">￥{{ item.price }}</text>
          <text class="goods-quantity">x{{ item.quantity }}</text>
        </view>
      </view>
    </view>

    <nut-cell title="订单总金额" :desc="`￥${totalPrice}`"></nut-cell>
    <nut-cell title="退款金额">
      <nut-input v-model="refundAmount" type="number" placeholder="请输入退款金额" />
    </nut-cell>

    <nut-cell title="退款原因" :desc="desc[val - 1]" @click="show = true"></nut-cell>
    <nut-popup v-model:visible="show" position="bottom" closeable round :style="{ height: '30%' }">
      <nut-radio-group v-model="val">
        <nut-radio label="1" shape="button">重量不足</nut-radio>
        <nut-radio label="2" shape="button">商品破损|压坏|脏污</nut-radio>
        <nut-radio label="3" shape="button">商品过期</nut-radio>
        <nut-radio label="4" shape="button">其他原因</nut-radio>
      </nut-radio-group>
    </nut-popup>

    <nut-cell title="补充描述（必填）">
      <nut-textarea v-model="remark" limit-show :max-length="500" :min-length="5" placeholder="请输入退款说明，最多可输入500字" />
      <nut-uploader v-model="uploadFiles" url="https://xxxx" maximum="3" multiple :preview-type="image"></nut-uploader>
    </nut-cell>

    <nut-button type="primary" class="submit-btn" @click="handleSubmit">确认退款</nut-button>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Taro from "@tarojs/taro";

const show = ref(false);
const val = ref(1);
const desc = ['重量不足', '商品破损|压坏|脏污', '商品过期', '其他原因'];

const orderId = ref('');
const totalPrice = ref(0);
const refundAmount = ref('');
const remark = ref('');
const uploadFiles = ref([]);
const orderItems = ref([
  { id: 1, name: "苹果", price: 50, quantity: 2 },
  { id: 2, name: "香蕉", price: 25, quantity: 2 }
]);

onMounted(() => {
  const params = Taro.getCurrentInstance().router?.params;
  if (params) {
    orderId.value = params.orderId as string;
    totalPrice.value = Number(params.totalPrice);
    // 这里应该根据orderId获取订单详情
    // 模拟数据
    orderItems.value = [
      { id: 1, name: "苹果", price: 50, quantity: 2 },
      { id: 2, name: "香蕉", price: 25, quantity: 2 }
    ];
  }
});

const handleSubmit = () => {
  if (!refundAmount.value) {
    Taro.showToast({
      title: '请输入退款金额',
      icon: 'none'
    });
    return;
  }

  if (Number(refundAmount.value) > totalPrice.value) {
    Taro.showToast({
      title: '退款金额不能大于订单金额',
      icon: 'none'
    });
    return;
  }

  if (!remark.value) {
    Taro.showToast({
      title: '请输入退款说明',
      icon: 'none'
    });
    return;
  }

  // 提交退款申请
  console.log('提交退款申请', {
    orderId: orderId.value,
    refundAmount: refundAmount.value,
    reason: desc[val.value - 1],
    remark: remark.value,
    images: uploadFiles.value
  });

  // 提交成功后返回上一页
  Taro.showToast({
    title: '退款申请已提交',
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
.index-view {
  padding: 16px;

  .goods-list {
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;

    .goods-item {
      margin-bottom: 12px;

      &:last-child {
        margin-bottom: 0;
      }

      .goods-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .goods-name {
          flex: 1;
          font-size: 14px;
          color: #333;
        }

        .goods-price {
          font-size: 14px;
          color: #ff4d4f;
          margin: 0 16px;
        }

        .goods-quantity {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }

  .submit-btn {
    margin-top: 24px;
    width: 100%;
  }
}
</style>
