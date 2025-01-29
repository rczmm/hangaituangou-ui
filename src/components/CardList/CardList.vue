<template>
  <view class="cardList">
    <view v-for="(state, _index) in items" :key="_index" class="cardList-item">
      <nut-card
        class="card-item"
        :img-url="state.imgUrl"
        :title="state.title"
        :price="state.price"
        :vip-price="state.vipPrice"
        :shop-desc="state.shopDesc"
        :delivery="state.delivery"
        :shop-name="state.shopName"
        @click="handleClick(state.id)"
      >
        <!-- 标签列表     -->
        <template #prolist>
          <view class="card-tag-list">
            <span v-for="(tag,index) in state.tags" :key="index" class="tag">{{ tag }}</span>
          </view>
        </template>
      </nut-card>
    </view>
  </view>
</template>

<script setup>
import {defineProps} from 'vue';
import './CardList.scss'
import Taro from "@tarojs/taro";

defineProps({
  items: {
    type: Array,
    required: true
  }
});
const handleClick = id => {
  console.log('click');
  Taro.navigateTo({
    url: `../details/details?id=${id}`
  })
}


</script>

