<template>

  <view class="search-view">

    <nut-searchbar></nut-searchbar>

    <view class="search-list">
      <view class="search-item" v-for="item in searchList" :key="item.id">
        <image class="search-item-image"
               :src="item.image" alt="1"></image>
        <view class="search-item-info">
          <view class="search-item-title">
            <text>{{ item.title }}</text>
          </view>
          <view class="search-item-price">
            <nut-price :price="item.price" symbol="￥" size="normal"/>
          </view>
          <view class="search-item-tags" v-for="tag in item.tags">
            <text>{{ tag }}</text>
          </view>
        </view>
      </view>
    </view>


  </view>


</template>

<script setup lang="ts">
import './index.scss';
import {ref} from "vue";

const searchList = ref([
  {
    id: 1,
    title: '我是标题',
    price: 100,
    tags: ['冷藏'],
    image: 'https://i0.hdslb.com/bfs/archive/61abe3e1e46506665815a1c35491f9025fb003a4.jpg'
  }, {
    id: 1,
    title: '我是标题',
    price: 100,
    tags: ['冷藏'],
    image: 'https://i0.hdslb.com/bfs/archive/61abe3e1e46506665815a1c35491f9025fb003a4.jpg'
  }, {
    id: 1,
    title: '我是标题',
    price: 100,
    tags: ['冷藏'],
    image: 'https://i0.hdslb.com/bfs/archive/61abe3e1e46506665815a1c35491f9025fb003a4.jpg'
  }, {
    id: 1,
    title: '我是标题',
    price: 100,
    tags: ['冷藏'],
    image: 'https://i0.hdslb.com/bfs/archive/61abe3e1e46506665815a1c35491f9025fb003a4.jpg'
  }, {
    id: 1,
    title: '我是标题',
    price: 100,
    tags: ['冷藏'],
    image: 'https://i0.hdslb.com/bfs/archive/61abe3e1e46506665815a1c35491f9025fb003a4.jpg'
  }, {
    id: 1,
    title: '我是标题',
    price: 100,
    tags: ['冷藏'],
    image: 'https://i0.hdslb.com/bfs/archive/61abe3e1e46506665815a1c35491f9025fb003a4.jpg'
  }, {
    id: 1,
    title: '我是标题',
    price: 100,
    tags: ['冷藏'],
    image: 'https://i0.hdslb.com/bfs/archive/61abe3e1e46506665815a1c35491f9025fb003a4.jpg'
  }, {
    id: 1,
    title: '我是标题',
    price: 100,
    tags: ['冷藏'],
    image: 'https://i0.hdslb.com/bfs/archive/61abe3e1e46506665815a1c35491f9025fb003a4.jpg'
  }
])


</script>
