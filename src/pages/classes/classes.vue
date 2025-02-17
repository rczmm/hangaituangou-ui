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

    <nut-tabs v-model="value" auto-height type="smile" title-scroll direction="vertical">
      <nut-tab-pane
        v-for="item in items"
        :key="item.key"
        :title="item.title"
        :pane-key="item.key"
        :click="getStateList(item.title,item.category)"
      >
        <view class="tab-content">
          <view v-if="value === item.key">
            <view v-if="item.key==='1'">
              <GoodCard :state="state"></GoodCard>
            </view>
            <view v-else-if="item.key==='2'">
              <GoodCard :state="state"></GoodCard>
            </view>
            <view v-else-if="item.key==='3'">
              <GoodCard :state="state"></GoodCard>
            </view>
          </view>
        </view>
      </nut-tab-pane>
    </nut-tabs>

    <!-- 底部去支付-->
    <view class="pay">
      <view class="pay-info">
        <view class="pay-info-left">
          <text>合计</text>
          <text>已选商品</text>
        </view>
        <view class="pay-info-right">
          <text>￥ {{ checkedPrice }}</text>
          <text>{{ checkedCount }}</text>
        </view>
      </view>
      <nut-button class="pay-btn" type="primary" @click="pay">去结算</nut-button>
    </view>
  </view>

</template>

<script setup lang="ts">
import {IconFont} from "@nutui/icons-vue";
import './classes.scss'
import {computed, onMounted, reactive, ref} from "vue";
import Taro from "@tarojs/taro";
import GoodCard from "../../components/GoodCard/GoodCard.vue";

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
  {key: '1', title: '绿叶菜', content: 'Content of Tab 1', category: '蔬菜瓜果'},
  {key: '2', title: '土豆根茎', content: 'Content of Tab 1', category: '蔬菜瓜果'},
  {key: '3', title: '我是水果', content: 'Content of Tab 1', category: '蔬菜瓜果'}
]);

const state = ref([
  {
    id: 1,
    name: "鲜豆腐皮",
    price: 20,
    count: 0
  },
  {
    id: 2,
    name: "新鲜长黄瓜",
    price: 100,
    count: 0
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

// 计算属性 获取选中商品数量
const checkedCount = computed(() => {
  return state.value.filter(item => item.count >= 1).reduce((acc, cur) => acc + cur.count, 0)
})

// 计算属性 获取选中商品总价
const checkedPrice = computed(() => {
  return state.value.filter(item => item.count >= 1).reduce((acc, cur) => acc + cur.price * cur.count, 0)
})

const pay = () => {
  console.log(state)
}

onMounted(async () => {
  getItemList(itemList[0])
  getStateList("", itemList[0].text)
})


</script>
