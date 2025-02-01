<template>
  <view class="index-view">

    <nut-cell title="申请数量" desc="1件"></nut-cell>
    <nut-cell title="退款金额" desc="￥6.92"></nut-cell>

    <nut-cell title="退款原因" :desc="desc[val-1]" @click="show = true"></nut-cell>
    <nut-popup v-model:visible="show" position="bottom" closeable round :style="{ height: '30%' }">
      <nut-radio-group v-model="val">
        <nut-radio label="1" shape="button">重量不足</nut-radio>
        <nut-radio label="2" shape="button">商品破损|压坏|脏污</nut-radio>
        <nut-radio label="3" shape="button">商品过期</nut-radio>
      </nut-radio-group>
    </nut-popup>

    <nut-cell title="补充描述（必填）">
      <nut-textarea limit-show :max-length="500" :min-length="5" placeholder="请输入您的退款原因，最多可输入500字"/>
      <nut-uploader url="https://xxxx"></nut-uploader>
    </nut-cell>

    <nut-button type="primary">提交</nut-button>

  </view>
</template>
<script setup lang="ts">
import {ref} from "vue";

const show = ref(false);
const val = ref(1);

const desc = ['重量不足', '商品破损|压坏|脏污', '商品过期']

</script>
