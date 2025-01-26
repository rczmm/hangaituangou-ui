<template>
  <view class="classes-view">
    <!-- 横向滚动列表  -->
    <scroll-view :scroll-x="true" class="scroll-view" style="width: 100%">
      <view
        v-for="item in itemList"
        :key="item.id"
        class="scroll-item"
        @click="getItemList(item)"
      >
        <icon-font
          font-class-name="iconfont"
          class-prefix="icon"
          :name="item.icon"
          :size="50"
          color="green"
        ></icon-font>
        <text style="font-size: 15px;">{{ item.text }}</text>
      </view>
    </scroll-view>

    <nut-tabs v-model="value" type="smile" title-scroll direction="vertical">
      <nut-tab-pane
        v-for="item in items"
        :key="item.key"
        :title="item.title"
        :pane-key="item.key"
        @onclick="getStateList(item.title,item.category)"
      >
        <view class="tab-content">
          <view v-if="value === item.key">
            <view v-if="item.key==='1'">
              <CardList :items="state"></CardList>
            </view>
            <view v-else-if="item.key==='2'">
              <CardList :items="state"></CardList>
            </view>
            <view v-else-if="item.key==='3'">
              <CardList :items="state"></CardList>
            </view>
          </view>
        </view>
      </nut-tab-pane>
    </nut-tabs>
  </view>

</template>

<script setup lang="ts">
import {IconFont} from "@nutui/icons-vue";

import './classes.scss'
import {onMounted, reactive, ref} from "vue";
import CardList from "../../components/CardList/CardList.vue";
import Taro from "@tarojs/taro";

const value = ref('1')

interface Item {
  id: number;
  icon: string;
  text: string;
}

const itemList = reactive<Item[]>([
  {id: 1, icon: 'shengdanbingqilin', text: '蔬菜瓜果'},
  {id: 2, icon: 'shengdanbingqilin', text: '新鲜水果'},
  {id: 3, icon: 'shengdanbingqilin', text: '时令蔬菜'},
  {id: 4, icon: 'shengdanbingqilin', text: '进口水果'},
  {id: 5, icon: 'shengdanbingqilin', text: '叶菜类'},
  {id: 6, icon: 'shengdanbingqilin', text: '根茎类'},
  {id: 7, icon: 'shengdanbingqilin', text: '菌菇类'},
]);

const items = ref([
  {key: '1', title: 'Tab 1', content: 'Content of Tab 1', category: '蔬菜瓜果'},
  {key: '2', title: 'Tab 1', content: 'Content of Tab 1', category: '蔬菜瓜果'}
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

const getStateList = (title: string, category: string) => {
  Taro.request({
    url: 'https://api.taro-admin.com/api/v1/state',
    method: 'GET',
    data: {
      category: category,
      title: title,
      page: 1,
      limit: 10
    }
  }).then(res => {
    state.value = res.data;
  })
  console.log('getStateList', title)
}

const getItemList = (item: Item) => {
  console.log('点击了：', item.text);
  Taro.request({
    url: 'https://api.taro-admin.com/api/v1/state',
    method: 'GET',
    data: {
      title: item.text,
      page: 1,
      limit: 10
    }
  }).then(res => {
    items.value = res.data;
  })
}

onMounted(async () => {
  getItemList(itemList[0])
  getStateList("", itemList[0].text)
})


</script>
