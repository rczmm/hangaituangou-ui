<template>

  <view class="orderList">

    <view class="orderItem" v-for="item in items" :key="item.id" @click="navToOrderDetail(item.id)">

      <view class="orderItem-header">
        <view class="orderItem-header-date">
          {{ item.date }}
        </view>
        <view class="orderItem-header-status">
          {{ item.status }}
        </view>
      </view>

      <view class="orderItem-body">
        <scroll-view class="orderItem-body-scroll" :scroll-x="true">
          <image v-for="image in item.images" :key="image" :src="image" class="orderItem-body-scroll-image"/>
        </scroll-view>
        <view class="orderItem-body-info">
          共{{ item.num }}件
        </view>
      </view>

      <view class="orderItem-body-pay">
        <nut-button size="mini" type="danger" @click.stop="showDeleteDialog(item.id)">删除订单</nut-button>
        <nut-button size="mini" @click.stop="showShareDialog(item)">订单分享</nut-button>
        <nut-button size="mini" color="#7232dd" @click.stop="goToReview(item.id)">立即评价</nut-button>
        <nut-button size="mini" color="#7232dd" @click.stop="buyAgain(item.id)">再次购买</nut-button>
      </view>
    </view>

    <!-- 删除确认对话框 -->
    <nut-dialog
      title="确认删除"
      content="是否确认删除该订单？"
      v-model:visible="showDelete"
      @cancel="onDeleteCancel"
      @ok="onDeleteConfirm"
    />

    <!-- 分享对话框 -->
    <nut-popup position="bottom" v-model:visible="showShare">
      <view class="share-dialog">
        <view class="share-title">分享到</view>
        <view class="share-options">
          <view class="share-item" @click="shareToWechat('friend')">
            <icon-font name="weixin" size="40"></icon-font>
            <text>微信好友</text>
          </view>
          <view class="share-item" @click="shareToWechat('timeline')">
            <icon-font name="pengyouquan" size="40"></icon-font>
            <text>微信群聊</text>
          </view>
        </view>
        <view class="share-cancel" @click="closeShare">取消</view>
      </view>
    </nut-popup>

  </view>

</template>

<script setup lang="ts">
import './OrderList.scss';
import {reactive, ref} from "vue";
import Taro from "@tarojs/taro";
import {IconFont} from "@nutui/icons-vue";

const showDelete = ref(false);
const showShare = ref(false);
const currentOrderId = ref('');
const currentOrder = ref(null);

const items = reactive([
  {
    id: 1,
    name: 'John',
    age: 30,
    date: '2023-05-01',
    status: '已完成',
    images: [
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp'
    ],
    num: 5,
  },
  {
    id: 2,
    name: 'Jane',
    age: 28,
    date: '2023-05-02',
    status: '待取货',
    images: [
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp',
      'https://img.alicdn.com/bao/uploaded/i1/2528256552/O1CN01UFAAn41yGrubPBoou_!!2528256552.jpg_460x460q90.jpg_.webp'
    ],
    num: 10
  }
])

// 显示删除确认框
const showDeleteDialog = (orderId: number) => {
  currentOrderId.value = orderId;
  showDelete.value = true;
};

// 取消删除
const onDeleteCancel = () => {
  showDelete.value = false;
  currentOrderId.value = '';
};

// 确认删除
const onDeleteConfirm = () => {
  // 这里添加删除订单的接口调用
  console.log('删除订单:', currentOrderId.value);
  showDelete.value = false;
  currentOrderId.value = '';
};

// 显示分享对话框
const showShareDialog = (order: any) => {
  currentOrder.value = order;
  showShare.value = true;
};

// 关闭分享对话框
const closeShare = () => {
  showShare.value = false;
  currentOrder.value = null;
};

// 分享到微信
const shareToWechat = (type: 'friend' | 'timeline') => {
  const shareData = {
    title: '订单分享',
    path: `/pages/orderDetail/orderDetail?id=${currentOrder.value?.id}`,
    imageUrl: currentOrder.value?.images[0]
  };

  if (type === 'friend') {
    Taro.shareAppMessage(shareData);
  } else {
    Taro.shareTimeline(shareData);
  }

  closeShare();
};

// 跳转到评价页面
const goToReview = (orderId: number) => {
  Taro.navigateTo({
    url: `/pages/review/review?orderId=${orderId}`
  });
};

// 再次购买
const buyAgain = (orderId: number) => {
  Taro.navigateTo({
    url: `/pages/details/details?id=${orderId}`
  });
};

// 跳转到订单详情
const navToOrderDetail = (orderId: number) => {
  Taro.navigateTo({
    url: `/pages/orderDetail/orderDetail?id=${orderId}`
  });
};
</script>

<style lang="scss">
.share-dialog {
  padding: 20px;

  .share-title {
    text-align: center;
    font-size: 16px;
    margin-bottom: 20px;
  }

  .share-options {
    display: flex;
    justify-content: space-around;
    padding: 20px 0;

    .share-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      text {
        margin-top: 8px;
        font-size: 14px;
      }
    }
  }

  .share-cancel {
    text-align: center;
    padding: 15px 0;
    border-top: 1px solid #eee;
    color: #666;
  }
}
</style>
