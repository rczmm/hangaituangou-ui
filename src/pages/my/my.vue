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
      <nut-grid-item text="待支付" @click="navToOrder(1)">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="dingdan-quanbudingdan"
                   :size="25" color="#FF9F7F"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="待取货" @click="navToOrder(2)">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="daiquhuodingdan"
                   :size="25" color="#B5D8F0"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="待评价" @click="navToOrder(3)">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="dingdan-quanbudingdan"
                   :size="25" color="#E6A4E2"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="全部订单" @click="navToOrder(4)">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="dingdan-quanbudingdan"
                   :size="25" color="#AEC6CF"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="退款|售后" @click="navToOrder(5)">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="dingdan-quanbudingdan"
                   :size="25" color="#FFB5B5"></icon-font>
      </nut-grid-item>
    </nut-grid>

    <nut-divider/>

    <nut-grid :column-num="5">
      <nut-grid-item text="天天抽奖" @click="navToDraw">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="choujiang"
                   :size="25" color="#FFD700"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="成为团长" @click="navToReport">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="wode"
                   :size="25" color="#98FB98"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="意见反馈" @click="navToFeedBack">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="wode"
                   :size="25" color="#87CEEB"></icon-font>
      </nut-grid-item>
      <nut-grid-item text="我是团长" @click="navToManage">
        <icon-font font-class-name="iconfont" class-prefix="icon" name="wode"
                   :size="25" color="#DDA0DD"></icon-font>
      </nut-grid-item>
    </nut-grid>

    <nut-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"> 为您推荐</nut-divider>

    <nut-fixed-nav v-model:visible="visible" type="right" :position="{ top: '400px' }" :nav-list="navList"/>

    <nut-tabs v-model="value" auto-height type="smile" title-scroll>
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
import {onMounted, reactive, ref} from "vue";
import './my.scss'
import Taro from "@tarojs/taro";
import CardList from "../../components/CardList/CardList.vue";

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
  {key: '1', title: '最新', content: 'Content of Tab 1', category: '蔬菜瓜果'},
  {key: '2', title: '最热', content: 'Content of Tab 1', category: '蔬菜瓜果'}
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


const navToOrder = (number: number) => {
  Taro.navigateTo({
    url: `/pages/order/order?type=${number}`
  })
}

const navToDraw = () => {
  Taro.navigateTo({
    url: '/pages/draw/draw'
  })
}

const navToReport = () => {
  Taro.navigateTo({
    url: '/pages/report/report'
  })
}

const navToFeedBack = () => {
  Taro.navigateTo({
    url: '/pages/feedback/feedback'
  })
}

const navToManage = () => {
  Taro.navigateTo({
    url: '/pages/manage/manage'
  })
}

</script>
