<template>

  <view class="report-view">
    <video
      id="video"
      src="https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
      poster="https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg"
      initial-time="0"
      :controls="true"
      :autoplay="false"
      :loop="false"
      :muted="false"
      class="video-view"
    />

    <nut-form ref="formRef" :model-value="formData">
      <nut-form-item label="联系电话">
        <nut-input v-model="formData.tel" placeholder="请输入联系电话" type="text"/>
      </nut-form-item>
      <nut-form-item label="地址">
        <nut-input v-model="formData.addr" placeholder="请输入地址" type="text"/>
      </nut-form-item>
      <nut-space style="margin: 10px">
        <nut-button size="small" type="primary" @click="submit">提交</nut-button>
      </nut-space>
    </nut-form>


  </view>

</template>

<script setup lang="ts">
import './report.scss'
import {ref} from "vue";

const formData = ref({
  tel: '',
  addr: ''
})

const formRef = ref();

const submit = () => {
  formRef.value?.validate().then(({valid, errors}) => {
    if (valid) {
      console.log('success:', formData.value)
    } else {
      console.warn('error:', errors)
    }
  })
}

</script>
