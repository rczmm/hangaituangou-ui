<template>
  <view class="cardList">
    <view v-for="(state, _index) in items" :key="_index" class="cardList-item">
      <nut-card
        :img-url="state.imgUrl"
        :title="state.title"
        :price="state.price"
        :vip-price="state.vipPrice"
        :shop-desc="state.shopDesc"
        :delivery="state.delivery"
        :shop-name="state.shopName"
      >
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

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>

</style>
