<template>

  <view class="order-container">

    <nut-searchbar
      placeholder="请输入搜索内容"
    />

    <nut-tabs v-model="value" type="smile" title-scroll>
      <nut-tab-pane
        v-for="item in items"
        :key="item.key"
        :title="item.title"
        :pane-key="item.key"
        @onclick="getStateList(item.title,item.title)"
      >
        <view class="tab-content">
          <view v-if="value === item.key">
            <view v-if="item.key==='1'">
              <OrderList :items="state"></OrderList>
            </view>
            <view v-if="item.key==='2'">
              <OrderList :items="state"></OrderList>
            </view>
            <view v-if="item.key==='3'">
              <OrderList :items="state"></OrderList>
            </view>
            <view v-if="item.key==='4'">
              <OrderList :items="state"></OrderList>
            </view>
            <view v-if="item.key==='5'">
              <OrderList :items="state"></OrderList>
            </view>
          </view>
        </view>
      </nut-tab-pane>
    </nut-tabs>


  </view>


</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import Taro from "@tarojs/taro";
import './order.scss';
import OrderList from "../../components/OrderList/OrderList.vue";

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
  {key: '1', title: '全部订单', content: 'Content of Tab 1'},
  {key: '2', title: '待支付', content: 'Content of Tab 1'},
  {key: '3', title: '待取货', content: 'Content of Tab 1'},
  {key: '4', title: '待评价', content: 'Content of Tab 1'},
  {key: '5', title: '退款|售后', content: 'Content of Tab 1'}
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
