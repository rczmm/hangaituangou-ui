<template>
  <view class="review-container">
    <view class="goods-info">
      <image :src="orderInfo.imageUrl" class="goods-image" />
      <view class="goods-detail">
        <text class="goods-title">{{ orderInfo.title }}</text>
        <text class="goods-price">¥{{ orderInfo.price }}</text>
      </view>
    </view>

    <view class="review-form">
      <view class="rating-section">
        <text class="section-title">商品评分</text>
        <nut-rate v-model="rating" />
      </view>

      <view class="content-section">
        <text class="section-title">评价内容</text>
        <nut-textarea
          v-model="content"
          placeholder="请输入您的评价内容"
          :maxlength="200"
          :rows="4"
        />
      </view>

      <view class="image-upload">
        <text class="section-title">上传图片</text>
        <nut-uploader
          url="https://api.example.com/upload"
          v-model:file-list="imageList"
          maximum="4"
          multiple
        >
        </nut-uploader>
      </view>

      <view class="tags-section">
        <text class="section-title">评价标签</text>
        <view class="tags-container">
          <nut-tag
            v-for="(tag, index) in tags"
            :key="index"
            :type="tag.selected ? 'primary' : 'default'"
            @click="toggleTag(index)"
          >
            {{ tag.text }}
          </nut-tag>
        </view>
      </view>
    </view>

    <view class="submit-section">
      <nut-button type="primary" block @click="submitReview">提交评价</nut-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import Taro from '@tarojs/taro';

// 评分
const rating = ref(5);

// 评价内容
const content = ref('');

// 图片列表
const imageList = ref([]);

// 评价标签
const tags = reactive([
  { text: '物超所值', selected: false },
  { text: '质量很好', selected: false },
  { text: '服务周到', selected: false },
  { text: '包装精美', selected: false },
  { text: '物流快速', selected: false },
]);

// 订单信息
const orderInfo = reactive({
  imageUrl: '',
  title: '',
  price: ''
});

// 切换标签选中状态
const toggleTag = (index: number) => {
  tags[index].selected = !tags[index].selected;
};

// 提交评价
const submitReview = () => {
  const selectedTags = tags.filter(tag => tag.selected).map(tag => tag.text);
  
  const reviewData = {
    rating: rating.value,
    content: content.value,
    images: imageList.value,
    tags: selectedTags
  };

  console.log('提交评价:', reviewData);
  
  // 这里添加提交评价的接口调用
  Taro.showToast({
    title: '评价提交成功',
    icon: 'success',
    duration: 2000
  });

  // 延迟返回上一页
  setTimeout(() => {
    Taro.navigateBack();
  }, 2000);
};

// 获取订单信息
const getOrderInfo = (orderId: string) => {
  // 这里添加获取订单信息的接口调用
  console.log('获取订单信息:', orderId);
  // 模拟数据
  orderInfo.imageUrl = 'https://img.example.com/product.jpg';
  orderInfo.title = '商品标题';
  orderInfo.price = '99.00';
};

onMounted(() => {
  const instance = Taro.getCurrentInstance();
  const orderId = instance?.router?.params?.orderId;
  if (orderId) {
    getOrderInfo(orderId);
  }
});
</script>

<style lang="scss">
.review-container {
  padding: 20px;
  background-color: #f8f8f8;

  .goods-info {
    display: flex;
    padding: 15px;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 20px;

    .goods-image {
      width: 80px;
      height: 80px;
      border-radius: 4px;
    }

    .goods-detail {
      margin-left: 15px;
      flex: 1;

      .goods-title {
        font-size: 14px;
        color: #333;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      .goods-price {
        font-size: 16px;
        color: #ff4400;
        margin-top: 8px;
      }
    }
  }

  .review-form {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;

    .section-title {
      font-size: 16px;
      color: #333;
      margin-bottom: 10px;
      display: block;
    }

    .rating-section,
    .content-section,
    .image-upload,
    .tags-section {
      margin-bottom: 20px;
    }

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
  }

  .submit-section {
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
  }
}
</style>