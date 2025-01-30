<template>

  <view class="feedback-view">

    <nut-cell>请选择反馈的问题类型</nut-cell>

    <nut-collapse v-model="val" accordion @change="change">
      <nut-collapse-item name="name1">
        <template #title>
          Title 1
        </template>
        Content 1
      </nut-collapse-item>
      <nut-collapse-item name="name2" title="Title 2"> Content 2</nut-collapse-item>
      <nut-collapse-item name="name3" title="Title 3"> Content 3</nut-collapse-item>
    </nut-collapse>

    <view class="desc-card">
      <nut-cell>请具体描述您的问题</nut-cell>
      <nut-textarea limit-show :max-length="200" placeholder="您填写的信息越全，问题越可有效解决哦~"/>
    </view>

    <view class="photo-card">
      <nut-cell>上传凭证</nut-cell>
      <nut-uploader url="https://xxxx" multiple maximum="5"></nut-uploader>
      <text>请上传发现问题的照片，上限五张</text>
    </view>

    <view class="contact-card">
      <nut-cell>联系方式</nut-cell>
      <nut-input placeholder="请输入您的手机号" type="number" maxlength="11"/>
      <text>手机号用来联系您理解具体情况</text>
    </view>

    <view class="submit-btn">
      <nut-button type="primary">提交反馈</nut-button>
    </view>

  </view>


</template>
<script setup lang="ts">
import {ref} from 'vue'

const val = ref(['name2', 'name3'])
const change = (modelValue: string[], name: string, status: boolean) => {
  console.log(modelValue, name, status)
}
</script>
