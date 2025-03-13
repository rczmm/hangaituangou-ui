<template>
  <view class="merchant-page">
    <view class="header">
      <text class="header-title">商家中心</text>
    </view>

    <view class="stats">
      <view class="stat-item">
        <text class="stat-label">今日销量</text>
        <text class="stat-value">{{ todaySales }}</text>
      </view>
      <view class="stat-item">
        <text class="stat-label">今日货款 (元)</text>
        <text class="stat-value">{{ todayRevenue }}</text>
      </view>
    </view>

    <nut-tabs v-model="activeTab" @click="tabClicked">
      <nut-tab-pane title="商品管理">
        <product-management :products="products" @add="addProduct" @update="updateProduct" @delete="deleteProduct"/>
      </nut-tab-pane>
      <nut-tab-pane title="退货管理">
        <return-management :returns="returns" @resolve="resolveReturn"/>
      </nut-tab-pane>
    </nut-tabs>
  </view>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import Taro from '@tarojs/taro';
import ProductManagement from "../../components/Merchant/ProductManagement.vue";
import ReturnManagement from "../../components/Merchant/ReturnManagement.vue";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface Return {
  id: number;
  productId: number;
  productName: string; // Include product name for display
  quantity: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
}

// --- Data ---
const activeTab = ref(0);
const todaySales = ref(0); // Example data
const todayRevenue = ref(0); // Example data


const products = ref<Product[]>([
  {id: 1, name: '商品A', price: 10, stock: 50},
  {id: 2, name: '商品B', price: 25, stock: 20},
]);

const addProduct = (newProduct: Omit<Product, 'id'>) => {
  const id = products.value.length > 0 ? Math.max(...products.value.map(p => p.id)) + 1 : 1;
  products.value.push({id, ...newProduct});
  Taro.showToast({title: '添加成功', icon: 'success'});
};

const updateProduct = (updatedProduct: Product) => {
  const index = products.value.findIndex(p => p.id === updatedProduct.id);
  if (index !== -1) {
    products.value[index] = updatedProduct;
    Taro.showToast({title: '更新成功', icon: 'success'});
  }
};

const deleteProduct = (productId: number) => {
  const index = products.value.findIndex(p => p.id === productId);
  if (index !== -1) {
    products.value.splice(index, 1);
    Taro.showToast({title: '删除成功', icon: 'success'});
  }
};


const returns = ref<Return[]>([
  {id: 1, productId: 1, productName: '商品A', quantity: 2, reason: '质量问题', status: 'pending'},
  {id: 2, productId: 2, productName: '商品B', quantity: 1, reason: '尺码不符', status: 'pending'},
]);

const resolveReturn = (returnId: number, newStatus: 'approved' | 'rejected') => {
  const returnItem = returns.value.find(r => r.id === returnId);
  if (returnItem) {
    returnItem.status = newStatus;
    Taro.showToast({title: `退货${newStatus === 'approved' ? '已同意' : '已拒绝'}`, icon: 'success'});
  }
};

// --- Computed ---
const tabClicked = (title: string, index: number) => {
  console.log(title, index)
}

// --- Lifecycle Hooks ---
onMounted(() => {
  // Simulate fetching data from an API
  // In a real app, you'd replace these with actual API calls
  Taro.showLoading({title: '加载中...', mask: true});

  setTimeout(() => {
    todaySales.value = 15; // Example
    todayRevenue.value = 250.50; // Example
    Taro.hideLoading();
  }, 1000);
});

</script>

<style lang="scss">
.merchant-page {
  .header {
    background-color: #409eff;
    color: white;
    padding: 20px;
    text-align: center;

    .header-title {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .stats {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: #f8f8f8;

    .stat-item {
      text-align: center;

      .stat-label {
        font-size: 14px;
        color: #666;
      }

      .stat-value {
        font-size: 18px;
        font-weight: bold;
        color: #333;
      }
    }
  }
}
</style>
