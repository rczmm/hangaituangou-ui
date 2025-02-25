<template>
  <view class="index">

    <!-- 搜索框   -->
    <nut-searchbar v-model="val" @search="navToSearch(val)">
      <template #leftout> 涵盖团购</template>
    </nut-searchbar>

    <!-- 通知栏   -->
    <nut-noticebar class="notice-card" :text="text" close-mode scrollable/>
    
    <!--  轮播图 -->
    <nut-swiper
      :auto-play="3000"
      loop
      direction="horizontal"
      pagination-visible
      :frequency="1000"
      :rows="4"
      :top="20"
      :speeds="7000"
      style="width: 90%; margin: 0 auto; border-radius: 12px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); overflow: hidden;"
    >
      <nut-swiper-item v-for="(item, index) in swiperList" :key="index" style="height: 150px">
        <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false"/>
      </nut-swiper-item>
    </nut-swiper>

    <view class="back-view">
      <nut-divider :style="{ color: '#FFB6C1', borderColor: '#FFB6C1', padding: '0 12px', margin: '15px 0' }"> 最新评论</nut-divider>

      <!-- 弹幕区域  -->
      <view style="position: relative; height: 150px" class="danmu-view">
        <nut-barrage 
          class="barrage-item" 
          ref="barrageRef" 
          :danmu="list"
          :style="{
            '--nutui-barrage-font-size': '16px',
            '--nutui-barrage-font-weight': '500',
            '--nutui-barrage-font-family': 'Arial, sans-serif',
            '--nutui-barrage-item-background': 'rgba(255, 182, 193, 0.2)',
            '--nutui-barrage-item-padding': '6px 12px',
            '--nutui-barrage-item-border-radius': '20px',
            '--nutui-barrage-z-index': '100',
            '--nutui-barrage-animation-duration': '8s',
            '--nutui-barrage-lane-height': '36px',
            '--nutui-barrage-item-color': 'linear-gradient(to right, #FF69B4, #FFB6C1)',
            '--nutui-barrage-item-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)'
          }"
        ></nut-barrage>
      </view>

      <!-- 栅栏布局   -->
      <view class="grid-view">
        <nut-grid class="grid-card">
          <nut-grid-item text="蔬菜豆品" @click="navToCate" class="grid-item">
            <icon-font font-class-name="iconfont" class-prefix="icon" name="shucai"
                       :size="25" color="green"></icon-font>
          </nut-grid-item>
          <nut-grid-item text="水果鲜花" @click="navToCate">
            <icon-font font-class-name="iconfont" class-prefix="icon" name="shuiguopingguo"
                       :size="25" color="pink"></icon-font>
          </nut-grid-item>
          <nut-grid-item text="休闲零食" @click="navToCate">
            <icon-font font-class-name="iconfont" class-prefix="icon" name="lingshi"
             :size="25" color="#FF69B4"></icon-font>
          </nut-grid-item>
          <nut-grid-item text="粮油调味" @click="navToCate">
            <icon-font font-class-name="iconfont" class-prefix="icon" name="a-tiaoliaotiaoweipin"
             :size="25" color="#FFB6C1"></icon-font>
          </nut-grid-item>
          <nut-grid-item text="酒水饮料" @click="navToCate">
            <icon-font font-class-name="iconfont" class-prefix="icon" name="shipinyinliao"
             :size="25" color="#DB7093"></icon-font>
          </nut-grid-item>
          <nut-grid-item text="肉蛋水产" @click="navToCate">
            <icon-font font-class-name="iconfont" class-prefix="icon" name="shengxian-roulei"
             :size="25" color="#FF69B4"></icon-font>
          </nut-grid-item>
          <nut-grid-item text="个护清洁" @click="navToCate">
            <icon-font font-class-name="iconfont" class-prefix="icon" name="gehu"
             :size="25" color="#FFB6C1"></icon-font>
          </nut-grid-item>
          <nut-grid-item text="日用百货" @click="navToCate">
            <icon-font font-class-name="iconfont" class-prefix="icon" name="daily-necessities"
             :size="25" color="#DB7093"></icon-font>
          </nut-grid-item>
        </nut-grid>
      </view>
    </view>

    <!--标签区域-->
    <view class="scroll-view">
      <view class="scroll-item">
        <IconFont font-class-name="iconfont" class-prefix="icon" name="choujiang"
                  :size="25" color="#FF69B4" class="scroll-icon"></IconFont>
        <text class="scroll-text"> 天天抽奖</text>
      </view>
      <view class="scroll-item">
        <IconFont font-class-name="iconfont" class-prefix="icon" name="qiandao"
                  :size="25" color="#FFB6C1" class="scroll-icon"></IconFont>
        <text class="scroll-text"> 签到领鸡蛋</text>
      </view>
      <view class="scroll-item">
        <IconFont font-class-name="iconfont" class-prefix="icon" name="fenlei"
                  :size="25" color="#DB7093" class="scroll-icon"></IconFont>
        <text class="scroll-text"> 领卷立减</text>
      </view>
      <view class="scroll-item">
        <IconFont font-class-name="iconfont" class-prefix="icon" name="shouye_o"
                  :size="25" color="#FF69B4" class="scroll-icon"></IconFont>
        <text class="scroll-text"> 团购厨神</text>
      </view>
      <view class="scroll-item">
        <IconFont font-class-name="iconfont" class-prefix="icon" name="gouwuche"
                  :size="25" color="#FFB6C1" class="scroll-icon"></IconFont>
        <text class="scroll-text"> 今天吃什么</text>
      </view>
      <view class="scroll-item">
        <IconFont font-class-name="iconfont" class-prefix="icon" name="wode"
                  :size="25" color="#DB7093" class="scroll-icon"></IconFont>
        <text class="scroll-text"> 生鲜答题</text>
      </view>
    </view>

    <nut-divider :style="{ color: '#FFB6C1', borderColor: '#FFB6C1', padding: '0 12px', margin: '15px 0' }"> 最新上架</nut-divider>
    <!-- 列表  -->
    <scroll-view
      :scroll-y="true"
      style="height: 500px"
      @scrolltolower="handleScroll"
    >
      <CardList :items="state">
      </CardList>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {IconFont} from "@nutui/icons-vue";
import './index.scss';
import CardList from "../../components/CardList/CardList.vue";
import Taro from '@tarojs/taro';

const text = ref('欢迎来到涵盖团购！')

const barrageRef = ref()
const list = ref([
  "今天的橙子也太新鲜了吧！水分超足！",
  "上次团的牛肉丸子，孩子特别喜欢，这次又来囤货了！",
  "感谢团长组织，价格比超市便宜好多！",
  "这个牌子的纸巾一直用，团购价真香！",
  "姐妹们，冲鸭！今晚的冰淇淋不要错过！",
  "刚收到货，蔬菜都很新鲜，包装也很好！",
  "团长辛苦啦！每天都帮我们找好物！",
  "自从有了社区团购，再也不用跑超市啦，真方便！",
  "这个酸奶味道不错，推荐大家试试！",
  "这次的鸡蛋好大个，物超所值！",
  "团购的零食到货啦，今晚追剧有着落了！",
  "谁抢到今晚的榴莲了？羡慕！",
  "上次买的苹果脆甜多汁，这次再回购！",
  "小区团购群真是个宝藏，每天都有惊喜！",
  "感谢团长推荐，这个洗衣液去污力超强！",
  "今晚的烤肠也太诱人了吧，赶紧下单！",
  "最近都在团购，省了不少钱呢！",
  "团长人超好，每次都耐心解答我们的问题！",
  "自从加入团购群，生活幸福感都提升了！",
  "期待下次的团购活动，希望能有更多好物！"
])

const getDanmuList = async () => {
  const res = await Taro.request({
    url: 'https://api.vvhan.com/api/morning',
    method: 'GET'
  })
  list.value = [...list.value, ...res.data]
}

const val = ref('')

const navToCate = () => {
  Taro.navigateTo({
    url: '/pages/classes/classes'
  })
}

const navToSearch = (val: string) => {
  Taro.navigateTo({
    url: `/pages/search/index?key=${val}`
  })
}


const swiperList = ref([
  'https://img.alicdn.com/imgextra/i3/O1CN017Z2XUL1nnQ94i2MTP_!!6000000005134-0-tps-846-472.jpg',
  'https://img.alicdn.com/imgextra/i1/O1CN01YGUXOM1k5VKBPo5J3_!!6000000004632-2-tps-846-472.png',
  'https://img.alicdn.com/imgextra/i3/O1CN01Sf6dER1zbJ3uVQ0lE_!!6000000006732-0-tps-846-472.jpg'
])

const state = ref(
  [
    {
      id: 1,
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

const getSwiperImage = async () => {
  try {
    const response = await Taro.request({
      url: 'https://api.taro-admin.com/api/v1/swiper',
      method: 'GET'
    })
    swiperList.value = response.data
  } catch (error) {
    console.log(error)
  }
}

// 定义响应式变量
const currentPage = ref(1);
const limit = 10;

const getStateList = async () => {
  try {
    const response = await Taro.request({
      url: 'https://api.taro-admin.com/api/v1/state',
      method: 'GET',
      data: {
        page: currentPage,
        limit: limit
      }
    })
    state.value = [...state.value, ...response.data];
  } catch (error) {
    console.log(error)
  }
}

// 处理滚动事件的函数
const handleScroll = () => {
  // 判断是否滚动到了底部
  console.log("触发了滑动事件")
  getStateList();

};

onMounted(() => {
  getSwiperImage()
  getStateList()
  getDanmuList()
})

</script>
