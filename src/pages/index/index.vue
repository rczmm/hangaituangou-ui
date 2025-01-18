<template>
  <view class="index">

    <!-- 搜索框   -->
    <nut-searchbar v-model="val">
    </nut-searchbar>

    <!-- 通知栏   -->
    <nut-noticebar :text="text"/>

    <!-- 栅栏布局   -->
    <nut-grid>
      <nut-grid-item text="蔬菜豆品">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="水果鲜花">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="休闲零食">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="粮油调味">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="酒水饮料">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="肉蛋水产">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="个护清洁">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="日用百货">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"></icon-font>
      </nut-grid-item>
    </nut-grid>

    <!-- 弹幕区域  -->
    <!-- 仅支持小程序   -->
    <view style="position: relative; height: 150px">
      <nut-barrage ref="barrageRef" :danmu="list"></nut-barrage>
    </view>

    <!--  轮播图 -->
    <nut-swiper :auto-play="3000" loop direction="vertical" style="height: 150px">
      <nut-swiper-item v-for="(item, index) in swiperList" :key="index" style="height: 150px">
        <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false"/>
      </nut-swiper-item>
    </nut-swiper>


    <!-- 瀑布流 or 列表  -->
    <CardList :items="state">
    </CardList>

  </view>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {IconFont} from "@nutui/icons-vue";
import CardList from "../../components/CardList/CardList.vue";

const text = ref('欢迎来到涵盖团购！')

const barrageRef = ref()
const list = ref(['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结-'])

const val = ref('')

const swiperList = ref([
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
])

const state = ref([{
  imgUrl:
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '378',
  shopDesc: '自营',
  delivery: '厂商配送',
  shopName: '阳澄湖大闸蟹自营店>',
  tags: ['生鲜', '热销', '大卖']
}, {
  imgUrl:
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '378',
  shopDesc: '自营',
  delivery: '厂商配送',
  shopName: '阳澄湖大闸蟹自营店>',
  tags: ['生鲜', '热销', '大卖']
}])


</script>


<style>


</style>
