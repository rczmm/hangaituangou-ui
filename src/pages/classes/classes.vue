<template>
  <view class="classes-view">
    <!-- 横向滚动列表  -->
    <scroll-view :scroll-x="true" class="scroll-view" style="width: 100%">
      <view v-for="item in itemList" :key="item.id" class="scroll-item" @click="handleCategoryClick(item)">
        <icon-font font-class-name="iconfont" class-prefix="icon" :name="item.icon" :size="50"
                   color="green"></icon-font>
        <text style="font-size: 15px;">{{ item.text }}</text>
      </view>
    </scroll-view>


    <!-- tabs区域   -->
    <view class="tabs-container">
      <!-- 标签标题区域     -->
      <view class="tabs-titles">
        <view v-for="item in items" :key="item.key" class="tabs-title" :class="{'active': value === item.key}"
              @click="selectTab(item)">
          <text>{{ item.title }}</text>
        </view>
      </view>

      <!-- 内容区域     -->
      <view class="tabs-content">
        <view v-for="item in items" :key="item.key" class="tabs-content-item" :class="{'active-content': value ===
        item.key}" v-show="value === item.key">
          <GoodCard :state="getFilteredState(item)"></GoodCard>  <!-- Pass filtered state -->
        </view>
      </view>
    </view>

    <!-- 底部去支付-->
    <view class="pay">
      <view class="pay-info">
        <view class="pay-info-left">
          <text>合计</text>
          <text>已选商品</text>
        </view>
        <view class="pay-info-right">
          <text>￥ {{ checkedPrice }}</text>
          <text>{{ checkedCount }}</text>
        </view>
      </view>
      <nut-button class="pay-btn" type="primary" @click="pay">去结算</nut-button>
    </view>
  </view>

</template>

<script setup lang="ts">
import {IconFont} from "@nutui/icons-vue";
import './classes.scss'
import {computed, onMounted, reactive, ref} from "vue";
import Taro from "@tarojs/taro";
import GoodCard from "../../components/GoodCard/GoodCard.vue";

const value = ref(1)
const currentCategory = ref(''); // Add a ref to store the current category


interface Item {
  id: number;
  icon: string;
  text: string;
}

interface TabItem {
  key: number;
  title: string;
  content: string; // You might not need content if you're filtering 'state'
  category: string;
}

const itemList = reactive<Item[]>([
  {id: 1, icon: 'shucai', text: '蔬菜瓜果'},
  {id: 2, icon: 'shucai', text: '新鲜水果'},
  {id: 3, icon: 'shucai', text: '时令蔬菜'},
  {id: 4, icon: 'shucai', text: '进口水果'},
  {id: 5, icon: 'shucai', text: '叶菜类'},
  {id: 6, icon: 'shucai', text: '根茎类'},
  {id: 7, icon: 'shucai', text: '菌菇类'},
]);

const items = ref<TabItem[]>([ // Explicitly type items
  // Initial items, you can load these dynamically as well
  {key: 1, title: '绿叶菜', content: 'Content of Tab 1', category: '蔬菜瓜果'},
  {key: 2, title: '土豆根茎', content: 'Content of Tab 1', category: '蔬菜瓜果'},
  {key: 3, title: '我是水果', content: 'Content of Tab 1', category: '新鲜水果'},
  {key: 4, title: '我不是水果', content: 'Content of Tab 1', category: '新鲜水果'},
]);

const state = ref([
  // ... your initial state data
  {
    id: 1,
    name: "鲜豆腐皮",
    price: 20,
    count: 0,
    image: "https://img.alicdn.com/bao/uploaded/i4/1825742034/O1CN01UnOOCl1QtcZf9Tnf1_!!1825742034.jpg",
    category: '蔬菜瓜果',
    title: '绿叶菜'
  },
  {
    id: 2,
    name: "新鲜长黄瓜",
    price: 100,
    count: 0,
    image: "https://img.alicdn.com/bao/uploaded/i3/2217490895557/O1CN01RrKN921qv9yIKWMjB_!!2217490895557.png",
    category: '蔬菜瓜果',
    title: '土豆根茎'
  },
  {
    id: 3,
    name: "新鲜长黄瓜",
    price: 100,
    count: 0,
    image: "https://img.alicdn.com/bao/uploaded/i2/4118153402/O1CN01vM9R9p1b0AS6zm038_!!4611686018427381946-0-item_pic.jpg",
    category: '新鲜水果',
    title: '我是水果'
  },
  {
    id: 4,
    name: "新鲜长黄瓜",
    price: 100,
    count: 0,
    image: "https://img.alicdn.com/bao/uploaded/i3/374544688/O1CN01vxhKmS1kV9mm4te7X_!!4611686018427386160-2-item_pic.png",
    category: '新鲜水果',
    title: '我不是水果'
  },
  {
    id: 5,
    name: "新鲜长黄瓜",
    price: 100,
    count: 0,
    image: "https://img.alicdn.com/bao/uploaded/i1/2209960967636/O1CN01ADBET926HLOVfZ5Et_!!4611686018427387348-0-item_pic.jpg",
    category: '蔬菜瓜果',
    title: '绿叶菜'
  }
]);

// Function to filter the state based on the selected tab
const getFilteredState = (item: TabItem) => {
  return state.value.filter(s => s.category === item.category && s.title === item.title);
};

const selectTab = (item: TabItem) => {
  value.value = item.key;
  // No need to call getStateList here, we are filtering in getFilteredState
};

const handleCategoryClick = (item: Item) => {
  currentCategory.value = item.text;
  fetchTabData(item.text);
}

const fetchTabData = (category: string) => {
  // 1. Fetch Tabs
  Taro.request({
    url: 'https://api.taro-admin.com/api/v1/tabs',  // Replace with your actual API endpoint
    method: 'GET',
    data: {
      category: category,
    }
  }).then(res => {
    if (Array.isArray(res.data)) {
      items.value = res.data.map((tab, index) => ({
        key: index + 1,
        title: tab.title,
        content: '', // Content is not used anymore, replaced by filtering
        category: category
      }));

      // Set the active tab to the first one after fetching new tabs.
      if (items.value.length > 0) {
        value.value = items.value[0].key;
      }

      //2. Fetch State data after fetching tabs
      fetchStateData();
    }
  }).catch(err => {
    console.error("Error fetching tabs:", err);
  });
};

const fetchStateData = () => {
  // Fetch all state data for the current category, and filtering will be done in getFilteredState
  Taro.request({
    url: 'https://api.taro-admin.com/api/v1/state', //  API endpoint for state
    method: 'GET',
    data: {
      category: currentCategory.value, // Only fetch for the current category
      // title and page/limit are removed, fetch all relevant items for the category
    }
  }).then(res => {
    if (Array.isArray(res.data)) {
      state.value = res.data.map(item => ({
        ...item, // Spread the existing item properties
        category: currentCategory.value,  // Ensure category is set correctly
      }));
    }
  }).catch(err => {
    console.error("Error fetching state data:", err);
  });
}

// Computed properties for total count and price
const checkedCount = computed(() => {
  return state.value.filter(item => item.count >= 1).reduce((acc, cur) => acc + cur.count, 0)
})

const checkedPrice = computed(() => {
  return state.value.filter(item => item.count >= 1).reduce((acc, cur) => acc + cur.price * cur.count, 0)
})

// Payment function
const pay = () => {
  const totalAmount = checkedPrice.value
  if (totalAmount > 0) {
    Taro.navigateTo({
      url: `/pages/payment/payment?amount=${totalAmount}`
    })
  } else {
    Taro.showToast({
      title: '请先选择商品',
      icon: 'none'
    })
  }
}

onMounted(() => {
  // Initialize with the first category
  if (itemList.length > 0) {
    handleCategoryClick(itemList[0]);
  }
});

</script>
