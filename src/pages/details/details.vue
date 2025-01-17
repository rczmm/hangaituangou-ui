<template>
  <view class="details">
    <!--  轮播图 -->
    <nut-swiper :auto-play="3000" loop direction="vertical" style="height: 150px">
      <nut-swiper-item v-for="(item, index) in swiperList" :key="index" style="height: 150px">
        <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false"/>
      </nut-swiper-item>
    </nut-swiper>

    <!-- 商品其他信息，名称 价格等   -->


    <!-- 列表   -->
    <!-- 带有追评的评论   -->
    <nut-comment
      imagesRows="multi"
      :images="cmt.images"
      :videos="cmt.videos"
      :info="cmt.info"
      :follow="cmt.follow"
      @clickImages="clickImages"
    ></nut-comment>

    <!-- 悬浮导航   -->
    <nut-fixed-nav v-model:visible="visible" :position="{ top: '70px' }" :nav-list="navList"/>


    <!-- 商品规格选择   -->
    <nut-cell :title="`基础用法`" desc="" @click="base = true"></nut-cell>
    <nut-sku
      v-model:visible="base"
      :sku="data.sku"
      :goods="data.goods"
      @selectSku="selectSku"
      @clickBtnOperate="clickBtnOperate"
      @close="close"
    ></nut-sku>

  </view>
</template>

<script setup lang="ts">


import Taro from '@tarojs/taro'
import {onMounted, ref} from "vue";

let cmt = ref({})
onMounted(() => {
  Taro.request({
    url: 'https://storage.360buyimg.com/nutui/3x/comment_data.json', //仅为示例，并非真实的接口地址
    success: function (res) {
      cmt.value = res.data.Comment
    }
  })
})
const clickImages = (imgs) => {
  console.log('进行图片展示', imgs)
}

const swiperList = ref([
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
])

</script>
<style scoped>

</style>
