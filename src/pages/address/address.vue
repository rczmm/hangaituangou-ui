<template>
  <nut-address-list
    :data="data"
    swipe-edition
    show-bottom-button
    @edit-icon="editClick"
    @del-icon="delClick"
    @click-item="clickItem"
    @swipe-del="delClickSwipe"
    @add="addAddress"
    :data-options="dataOptions"
  >
  </nut-address-list>
</template>

<script setup lang="ts">

import {reactive, ref} from "vue";

const data = ref([
  {
    testid: 3,
    testaddressName: '姓名',
    phone: '123****4567',
    defaultAddress: false,
    fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
  },
  {
    testid: 4,
    testaddressName: '姓名',
    phone: '123****4567',
    defaultAddress: true,
    fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
  }
])
const dataOptions = reactive({
  id: 'testid',
  addressDetail: 'testaddressDetail',
  addressName: 'testaddressName'
})
const clickItem = () => {
  console.log('Click To Address')
}
const delClick = () => {
  console.log('Click To Delete')
}
const editClick = () => {
  console.log('Click To Edit')
}

const delClickSwipe = () => {
  console.log('Click On DelClickSwipe')
}
const addAddress = () => {
  console.log('Click To Add')
}

</script>
