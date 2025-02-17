<template>

  <view class="search-view">

    <nut-searchbar></nut-searchbar>

    <view class="search-list">
      <view class="search-item">
        <image class="search-item-image"
               src="https://i0.hdslb.com/bfs/archive/61abe3e1e46506665815a1c35491f9025fb003a4.jpg" alt="1"></image>
        <view class="search-item-info">
          <view class="search-item-title">
            <text>我是标题</text>
          </view>
          <view class="search-item-price">
            <nut-price :price="100" symbol="￥" size="normal"/>
          </view>
          <view class="search-item-tags">
            <text>冷藏</text>
          </view>
        </view>
      </view>
    </view>


  </view>


</template>

<script setup lang="ts">
import './index.scss';


</script>
