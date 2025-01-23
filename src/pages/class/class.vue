<template>

  <!-- 横向滚动列表  -->
  <view class="scroll-view">
    <view class="scroll-item">
      <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                 :size="50" color="green"></icon-font>
      <text style="font-size: 15px;">蔬菜瓜果</text>
    </view>
    <view class="scroll-item">
      <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                 :size="50" color="green"></icon-font>
      <text style="font-size: 15px;">蔬菜瓜果</text>
    </view>
    <view class="scroll-item">
      <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                 :size="50" color="green"></icon-font>
      <text style="font-size: 15px;">蔬菜瓜果</text>
    </view>
    <view class="scroll-item">
      <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                 :size="50" color="green"></icon-font>
      <text style="font-size: 15px;">蔬菜瓜果</text>
    </view>
    <view class="scroll-item">
      <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                 :size="50" color="green"></icon-font>
      <text style="font-size: 15px;">蔬菜瓜果</text>
    </view>
    <view class="scroll-item">
      <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                 :size="50" color="green"></icon-font>
      <text style="font-size: 15px;">蔬菜瓜果</text>
    </view>
    <view class="scroll-item">
      <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                 :size="50" color="green"></icon-font>
      <text style="font-size: 15px;">蔬菜瓜果</text>
    </view>
  </view>

  <nut-tabs v-model="value" type="smile" title-scroll direction="vertical">
    <nut-tab-pane
      v-for="item in items"
      :key="item.key"
      :title="item.title"
      :pane-key="item.key"
    >
      <CardList :items="state">
      </CardList>
    </nut-tab-pane>
  </nut-tabs>

</template>

<script setup lang="ts">
import {IconFont} from "@nutui/icons-vue";

import './class.scss'
import {ref} from "vue";
import CardList from "../../components/CardList/CardList.vue";

const value = ref('1')

const items = ref([
  {key: '1', title: 'Tab 1', content: 'Content of Tab 1'},
  {key: '2', title: 'Tab 1', content: 'Content of Tab 1'},
  {key: '3', title: 'Tab 1', content: 'Content of Tab 1'},
  {key: '4', title: 'Tab 1', content: 'Content of Tab 1'}
]);

const state = ref([
  {
    imgUrl:
      '//gw.alicdn.com/bao/uploaded/i3/1624565934/O1CN01RTTRFy1thoztFTvWl_!!0-item_pic.jpg_300x300q90.jpg',
    title: '法式复古玫瑰ins少女心床裙款田园风小碎花床上四件套全棉纯棉1.5',
    price: '258',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
    tags: ['生鲜', '热销', '大卖']
  }
  , {
    imgUrl:
      'https://gw.alicdn.com/bao/uploaded/i1/1752732599/TB25KZZobRkpuFjSspmXXc.9XXa_!!1752732599.jpg_300x300q90.jpg',
    title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
    tags: ['生鲜', '热销', '大卖']
  }, {
    imgUrl:
      'https://gw.alicdn.com/bao/uploaded/i4/675424149/TB2TnxOtHGYBuNjy0FoXXciBFXa_!!675424149.jpg_300x300q90.jpg',
    title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
    tags: ['生鲜', '热销', '大卖']
  }, {
    imgUrl:
      'https://gw.alicdn.com/bao/uploaded/i4/2567464382/O1CN01fsFDN91iF083IAhd4_!!2567464382.jpg_300x300q90.jpg',
    title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
    tags: ['生鲜', '热销', '大卖']
  }, {
    imgUrl:
      'https://gw.alicdn.com/bao/uploaded/i1/666394908/O1CN01GCqy2e1m7uRXspfYu_!!666394908.jpg_300x300q90.jpg',
    title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
    tags: ['生鲜', '热销', '大卖']
  }, {
    imgUrl:
      'https://gw.alicdn.com/bao/uploaded/i3/4134777374/O1CN01bp7zZv24LLBu9m19M_!!4134777374-0-lubanu-s.jpg_300x300q90.jpg',
    title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
    tags: ['生鲜', '热销', '大卖']
  }, {
    imgUrl:
      'https://gw.alicdn.com/bao/uploaded/i4/1852297523/O1CN01RBHkqS25RaHOtKYO0_!!0-item_pic.jpg_300x300q90.jpg',
    title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
    tags: ['生鲜', '热销', '大卖']
  }, {
    imgUrl:
      'https://gw.alicdn.com/bao/uploaded/i1/1088183089/O1CN01ZjaYLq1Ygo4uVSSCX_!!1088183089.jpg_300x300q90.jpg_.webp',
    title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
    tags: ['生鲜', '热销', '大卖']
  }
])


</script>
