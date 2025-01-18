<template>
  <view class="details">

    <view class="a">
      <!--  轮播图 -->
      <nut-swiper :auto-play="3000" loop direction="vertical" style="height: 150px">
        <nut-swiper-item v-for="(item, index) in swiperList" :key="index" style="height: 150px">
          <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false"/>
        </nut-swiper-item>
      </nut-swiper>
    </view>
    <!-- 商品其他信息，名称 价格等   -->


    <!-- 列表   -->
    <!-- 带有追评的评论   -->

    <view class="card-comment"
          style="margin-top: 100px; border-radius: 25px;background-color: red ;width: 80%;"

    >
      <nut-comment
        imagesRows="multi"
        :images="cmt.images"
        :videos="cmt.videos"
        :info="cmt.info"
        :follow="cmt.follow"
        @clickImages="clickImages"
      ></nut-comment>

    </view>


    <!-- 悬浮导航   -->
    <nut-fixed-nav v-model:visible="visible" :position="{ top: '70px' }" :nav-list="navList"/>


    <!-- 商品规格选择   -->
    <!--    <nut-cell :title="`基础用法`" desc="" @click="base = true"></nut-cell>-->
    <!--    <nut-sku-->
    <!--      v-model:visible="base"-->
    <!--      :sku="data.sku"-->
    <!--      :goods="data.goods"-->
    <!--      @selectSku="selectSku"-->
    <!--      @clickBtnOperate="clickBtnOperate"-->
    <!--      @close="close"-->
    <!--    ></nut-sku>-->

  </view>
</template>

<script setup lang="ts">

import {ref} from "vue";

const clickImages = (imgs) => {
  console.log('进行图片展示', imgs)
}

const cmt = ref(
  {
    "videos": [{
      "mainUrl": "https://img.300hu.com/4c1f7a6atransbjngwcloud1oss/3a5abb98377496264567160833/imageSampleSnapshot/1604738160_777980391.100_1344.jpg",
      "videoUrl": "https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/3a5abb98377496264567160833/v.f30.mp4?source=1&h265=v.f1022_h265.mp4"
    }],
    "images": [{
      "smallImgUrl": "",
      "bigImgUrl": "",
      "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/153847/3/5051/62777/5fa65e01Ec88cecb9/36ba206949050b39.jpg"
    }, {
      "smallImgUrl": "",
      "bigImgUrl": "",
      "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/131794/19/15190/57841/5fa65e03E75c12ef1/0d1ac3a87ff9e398.jpg"
    }, {
      "smallImgUrl": "",
      "bigImgUrl": "",
      "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/155091/12/4926/68141/5fa65e03E9d8c5120/9c71b6e49f1eb3c3.jpg"
    }, {
      "smallImgUrl": "",
      "bigImgUrl": "",
      "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/138774/29/13635/70364/5fa65e04E1669ad70/c97839098a18d92e.jpg"
    }, {
      "smallImgUrl": "",
      "bigImgUrl": "",
      "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/120265/1/17811/70109/5fa65e05Eb23a84e3/e156fc1d316922c4.jpg"
    }, {
      "smallImgUrl": "",
      "bigImgUrl": "",
      "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/120265/1/17811/70109/5fa65e05Eb23a84e3/e156fc1d316922c4.jpg"
    }, {
      "smallImgUrl": "",
      "bigImgUrl": "",
      "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/155091/12/4926/68141/5fa65e03E9d8c5120/9c71b6e49f1eb3c3.jpg"
    }, {
      "smallImgUrl": "",
      "bigImgUrl": "",
      "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/138774/29/13635/70364/5fa65e04E1669ad70/c97839098a18d92e.jpg"
    }, {
      "smallImgUrl": "",
      "bigImgUrl": "",
      "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/138774/29/13635/70364/5fa65e04E1669ad70/c97839098a18d92e.jpg"
    }],
    "info": {
      "content": "产品包装：塑料瓶，但是能接受，也很喜欢。",
      "nickName": "星***_",
      "score": 5,
      "avatar": "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png",
      "time": "2021-09-09",
      "size": "雪域白【碎屏险套装】全网通；8G+256【12期免息】",
      "replay": 23,
      "like": 1
    },
    "follow": {
      "days": 128,
      "content": "12月份开始用，用到现在，我的脸干的不行，一天都紧紧巴巴，打算换套别的用，不知道是不是不合适，还是假的呢！",
      "images": ["//img30.360buyimg.com/imagetools/jfs/t1/120265/1/17811/70109/5fa65e05Eb23a84e3/e156fc1d316922c4.jpg"]
    }
  }
)

const swiperList = ref([
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
])

</script>
<style scoped>

</style>
