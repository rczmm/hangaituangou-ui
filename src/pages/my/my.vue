<template>

  <view class="my-index">

    <view class="avatar-view">
      <nut-avatar
        size="large"
        class="avatar-index"
      > 王
      </nut-avatar>
    </view>

    <nut-divider/>

    <nut-grid :column-num="5">
      <nut-grid-item text="待支付" @click="navToOrder">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="待取货">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="待评价">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="全部订单">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="退款|售后">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
    </nut-grid>

    <nut-divider/>

    <nut-grid :column-num="5">
      <nut-grid-item text="天天抽奖">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="签到领钱">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="看视频赚钱">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="看小说赚钱">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="走路赚钱">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
    </nut-grid>

    <nut-divider/>

    <nut-grid :column-num="5">
      <nut-grid-item text="自提点管理">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="联系客服">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="问卷调研">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="成为团长">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="意见反馈">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="shengdanbingqilin"
                   :size="25" color="red"></icon-font>
      </nut-grid-item>
    </nut-grid>

    <nut-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"> 为您推荐</nut-divider>

    <nut-fixed-nav v-model:visible="visible" type="right" :position="{ top: '400px' }" :nav-list="navList"/>

    <nut-tabs v-model="value">
      <nut-tab-pane title="Tab 1" pane-key="1"> Content 1</nut-tab-pane>
      <nut-tab-pane title="Tab 2" pane-key="2"> Content 2</nut-tab-pane>
      <nut-tab-pane title="Tab 3" pane-key="3"> Content 3</nut-tab-pane>
    </nut-tabs>


  </view>
</template>
<script setup lang="ts">
import {IconFont} from "@nutui/icons-vue";
import {ref} from "vue";
import './my.scss'
import Taro from "@tarojs/taro";

const value = ref('1')

const visible = ref(false)
const navList = ref([
  {
    id: 1,
    text: '首页',
    icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
  },
  {
    id: 2,
    text: '分类',
    icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
  },
  {
    id: 3,
    text: '购物车',
    num: 2,
    icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
  },
  {
    id: 4,
    text: '我的',
    icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
  }
])

const navToOrder = () => {
  Taro.navigateTo({
    url: '/pages/order/order'
  })
}


</script>
