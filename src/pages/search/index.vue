<template>

  <view class="search-view">

    <nut-searchbar></nut-searchbar>

    <GoodCard :state="state"></GoodCard>


  </view>


</template>

<script setup lang="ts">
import './index.scss';
import {reactive} from "vue";
import GoodCard from "../../components/GoodCard/GoodCard.vue";

interface Item {
  id: number;
  name: string;
  price: number;
  count: number;
  checked: boolean;
}

const state = reactive<Item[]>([
  {
    id: 1,
    name: '商品名称',
    price: 100,
    count: 10,
    checked: true
  },
  {
    id: 2,
    name: '商品名称',
    price: 100,
    count: 1,
    checked: true
  },
  {
    id: 3,
    name: '商品名称',
    price: 100,
    count: 1,
    checked: true
  },
])


</script>
