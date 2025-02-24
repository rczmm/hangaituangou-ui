<template>
  <view class="search-view">
    <!-- 搜索框区域 -->
    <view class="search-header">
      <nut-searchbar
        v-model="searchValue"
        placeholder="搜索商品"
        @search="onSearch"
        @clear="onClear"
      >
        <template #leftout>
          <icon-font font-class-name="iconfont" class-prefix="icon" name="fanhui" @click="goBack" />
        </template>
      </nut-searchbar>
    </view>

    <!-- 搜索历史 -->
    <view class="search-history" v-if="!showResults">
      <view class="section-title">
        <text>搜索历史</text>
        <icon-font
          font-class-name="iconfont"
          class-prefix="icon"
          name="shanchu"
          @click="clearHistory"
        />
      </view>
      <view class="history-tags">
        <nut-tag
          v-for="(item, index) in searchHistory"
          :key="index"
          @click="onHistoryClick(item)"
          type="primary"
          plain
        >
          {{ item }}
        </nut-tag>
      </view>

      <!-- 热门搜索 -->
      <view class="hot-search">
        <view class="section-title">
          <text>热门搜索</text>
          <icon-font font-class-name="iconfont" class-prefix="icon" name="hot" />
        </view>
        <view class="hot-tags">
          <nut-tag
            v-for="(item, index) in hotSearches"
            :key="index"
            @click="onHotClick(item)"
            type="danger"
            plain
          >
            {{ item }}
          </nut-tag>
        </view>
      </view>
    </view>

    <!-- 搜索结果 -->
    <view class="search-results" v-if="showResults">
      <GoodCard :state="searchResults" />
    </view>
  </view>
</template>

<script setup lang="ts">
import './index.scss';
import { ref, reactive } from 'vue';
import { IconFont } from '@nutui/icons-vue';
import GoodCard from '../../components/GoodCard/GoodCard.vue';
import Taro from '@tarojs/taro';

interface Item {
  id: number;
  name: string;
  price: number;
  count: number;
  checked: boolean;
}

// 搜索相关状态
const searchValue = ref('');
const showResults = ref(false);
const searchResults = reactive<Item[]>([]);

// 搜索历史
const searchHistory = ref(['水果', '零食', '生鲜', '饮料']);

// 热门搜索
const hotSearches = ref(['进口水果', '休闲零食', '乳制品', '生鲜蔬菜', '饮料']);

// 返回上一页
const goBack = () => {
  Taro.navigateBack();
};

// 搜索处理
const onSearch = (val: string) => {
  if (!val.trim()) return;
  showResults.value = true;
  // 保存搜索历史
  if (!searchHistory.value.includes(val)) {
    searchHistory.value.unshift(val);
    if (searchHistory.value.length > 10) {
      searchHistory.value.pop();
    }
  }
  // TODO: 调用搜索API
  searchResults.length = 0;
  Object.assign(searchResults, [
    {
      id: 1,
      name: `${val}搜索结果1`,
      price: 100,
      count: 10,
      checked: true
    },
    {
      id: 2,
      name: `${val}搜索结果2`,
      price: 200,
      count: 1,
      checked: true
    }
  ]);
};

// 清空搜索
const onClear = () => {
  showResults.value = false;
  searchResults.length = 0;
};

// 点击历史记录
const onHistoryClick = (item: string) => {
  searchValue.value = item;
  onSearch(item);
};

// 点击热门搜索
const onHotClick = (item: string) => {
  searchValue.value = item;
  onSearch(item);
};

// 清空历史记录
const clearHistory = () => {
  searchHistory.value = [];
};
</script>
