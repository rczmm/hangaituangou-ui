<template>
  <view class="seckill-page">
    <view class="header">
      <view class="time-remaining">
        <text class="label">距离结束</text>
        <text class="time">{{ formattedRemainingTime }}</text>
      </view>
      <view v-if="!isSeckillActive" class="countdown-message">
        <text>{{ countdownMessage }}</text>
      </view>
    </view>

    <scroll-view scroll-y="true" class="product-list">
      <view v-for="product in products" :key="product.id" class="product-card">
        <image :src="product.image" mode="aspectFill" class="product-image"></image>
        <view class="product-info">
          <text class="product-name">{{ product.name }}</text>
          <view class="price-container">
            <text class="seckill-price">￥{{ product.seckillPrice }}</text>
            <text class="original-price">￥{{ product.originalPrice }}</text>
          </view>
          <view class="progress-bar-container">
            <progress :percent="product.soldPercentage" activeColor="#e93b3d" backgroundColor="#f5f5f5"
                      stroke-width="6"/>
            <text class="sold-percentage">{{ product.soldPercentage }}%</text>
          </view>
          <button
            :disabled="!isSeckillActive || product.soldPercentage >= 100"
            @click="handleBuy(product)"
            class="buy-button"
            :class="{ 'disabled-button': !isSeckillActive || product.soldPercentage >= 100 }"
          >
            {{
              isSeckillActive && product.soldPercentage < 100 ? '立即抢购' : (isSeckillActive ? '已抢完' : '即将开始')
            }}
          </button>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import {ref, computed, onMounted, onUnmounted} from 'vue';
import Taro from '@tarojs/taro';

interface Product {
  id: number;
  name: string;
  image: string;
  seckillPrice: number;
  originalPrice: number;
  soldPercentage: number;
  stock: number; // Add stock property
}

// --- Data ---
const startTime = ref<number>(Date.now() + 10000); //  10 seconds from now (for testing)
const endTime = ref<number>(Date.now() + 60000);   //  60 seconds from now (for testing)
const remainingTime = ref<number>(0);
const timer = ref<number | null>(null);
const isSeckillActive = ref(false);


const products = ref<Product[]>([
  {
    id: 1,
    name: '商品1',
    image: 'https://img.alicdn.com/bao/upload/O1CN01bPi9gl1kr8nXwLIcS_!!6000000004736-0-yinhe.jpg_460x460q90.jpg_.webp', // Replace with real image URLs
    seckillPrice: 99.9,
    originalPrice: 199.9,
    soldPercentage: 0,
    stock: 100,
  },
  {
    id: 2,
    name: '商品2',
    image: 'https://img.alicdn.com/bao/upload/O1CN01zMdwlh1mgiyBmAZFc_!!6000000004984-0-yinhe.jpg_460x460q90.jpg_.webp',
    seckillPrice: 49.9,
    originalPrice: 99.9,
    soldPercentage: 50,
    stock: 50,
  },
  {
    id: 3,
    name: '商品3',
    image: 'https://img.alicdn.com/bao/uploaded/i3/1055980043/O1CN01fCplt21CBk3wyFX0D_!!1055980043.jpg_460x460q90.jpg_.webp',
    seckillPrice: 19.9,
    originalPrice: 39.9,
    soldPercentage: 100,
    stock: 0,
  },
]);

// --- Computed Properties ---
const formattedRemainingTime = computed(() => {
  if (remainingTime.value <= 0) {
    return '00:00:00';
  }
  const hours = Math.floor(remainingTime.value / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime.value % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime.value % (1000 * 60)) / 1000);

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
});

const countdownMessage = computed(() => {
  if (remainingTime.value > 0 && !isSeckillActive.value) {
    return '秒杀即将开始，请稍等...';
  }
  return '';
});

// --- Methods ---
const updateRemainingTime = () => {
  const now = Date.now();

  if (now < startTime.value) {
    // Seckill has not started yet
    remainingTime.value = startTime.value - now;
    isSeckillActive.value = false;
  } else if (now >= startTime.value && now <= endTime.value) {
    // Seckill is active
    remainingTime.value = endTime.value - now;
    isSeckillActive.value = true;
  } else {
    // Seckill has ended
    remainingTime.value = 0;
    isSeckillActive.value = false;
    if (timer.value) {
      clearInterval(timer.value);
      timer.value = null;
    }
  }
};


const handleBuy = (product: Product) => {
  if (!isSeckillActive.value || product.soldPercentage >= 100) {
    return; // Prevent buying if seckill is not active or sold out
  }

  // Simulate buying (in a real app, this would be an API call)
  if (product.stock > 0) {
    product.stock -= 1;
    product.soldPercentage = Math.round(((products.value.find(p => p.id === product.id)!.stock / (products.value.find(p => p.id === product.id)!.stock + (product.soldPercentage / 100 * products.value.find(p => p.id === product.id)!.stock))) * 100));

    if (product.stock === 0) {
      product.soldPercentage = 100;  //Ensure it's 100% if stock runs out.
    }
    Taro.showToast({
      title: '抢购成功!',
      icon: 'success',
    });
  } else {
    product.soldPercentage = 100; // Ensure it goes to 100 if someone tries to buy out-of-stock
    Taro.showToast({
      title: '已售罄!',
      icon: 'none',
    });
  }
};

// --- Lifecycle Hooks ---
onMounted(() => {
  updateRemainingTime(); // Initial calculation
  timer.value = setInterval(updateRemainingTime, 1000);
});

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
});

</script>

<style lang="scss">
.seckill-page {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Use viewport height for full-screen */

  .header {
    background-color: #e93b3d;
    color: white;
    padding: 20px;
    text-align: center;

    .time-remaining {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;

      .label {
        font-size: 16px;
        margin-right: 10px;
      }

      .time {
        font-size: 24px;
        font-weight: bold;
      }
    }

    .countdown-message {
      font-size: 14px;
    }
  }

  .product-list {
    flex: 1; /* Allow the product list to grow and take available space */
    overflow-y: auto; /* Enable scrolling if content overflows */
    padding: 10px;

    .product-card {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      padding: 10px;

      .product-image {
        width: 140px;
        height: 140px;
        margin-right: 10px;
        border-radius: 8px;
        object-fit: cover;
      }

      .product-info {
        flex: 1;

        .product-name {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .price-container {
          display: flex;
          align-items: center;
          margin-bottom: 5px;

          .seckill-price {
            color: #e93b3d;
            font-size: 18px;
            font-weight: bold;
            margin-right: 10px;
          }

          .original-price {
            color: #999;
            text-decoration: line-through;
            font-size: 14px;
          }
        }

        .progress-bar-container {
          display: flex;
          align-items: center;
          margin-bottom: 5px;

          .sold-percentage {
            margin-left: 8px;
          }
        }

        .buy-button {
          background-color: #e93b3d;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 8px 15px;
          font-size: 16px;
          cursor: pointer;
          width: 90%;

          &.disabled-button {
            background-color: #ccc;
            cursor: not-allowed;
          }
        }
      }
    }
  }
}
</style>
