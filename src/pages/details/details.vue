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

    <view class="card-comment">
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
    <nut-cell :title="`基础用法`" desc="" @click="base = true"></nut-cell>
    <nut-sku
      style="background-color: red"
      v-model:visible="base"
      :sku="data.sku"
      :goods="data.goods"
      @selectSku="selectSku"
      @clickBtnOperate="clickBtnOperate"
      @close="close"
    ></nut-sku>

  </view>
</template>

<script setup lang="ts">

import {ref} from "vue";

import './details.scss'


const requestData = {
  "Sku": [{
    "id": 1,
    "name": "颜色",
    "list": [{"name": "亮黑色", "id": 100016015112, "active": true, "disable": false}, {
      "name": "釉白色",
      "id": 100016015142,
      "active": false,
      "disable": false
    }, {"name": "秘银色", "id": 100016015078, "active": false, "disable": false}, {
      "name": "夏日胡杨",
      "id": 100009064831,
      "active": false,
      "disable": false
    }, {"name": "秋日胡杨", "id": 100009064830, "active": false, "disable": false}]
  }, {
    "id": 2,
    "name": "版本",
    "list": [{"name": "8GB+128GB", "id": 100016015102, "active": true, "disable": false}, {
      "name": "8GB+256GB",
      "id": 100016015122,
      "active": false,
      "disable": false
    }]
  }, {
    "id": 3,
    "name": "版本",
    "list": [{"name": "4G（有充版）", "id": 100016015103, "active": true, "disable": false}, {
      "name": "5G（有充版）",
      "id": 100016015123,
      "active": false,
      "disable": false
    }, {"name": "5G（无充版）", "id": 100016015104, "active": true, "disable": true}, {
      "name": "5G（无充）质保换新版",
      "id": 100016015125,
      "active": false,
      "disable": false
    }]
  }],
  "Goods": {
    "skuId": "100016015112",
    "price": "4599.00",
    "imagePath": "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/210630/17/8651/208682/618a5bd6Eddc8ea0e/b5e55e1a03bc0126.jpg!q80.dpg.webp"
  },
  "imagePathMap": {
    "100016015112": "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/210630/17/8651/208682/618a5bd6Eddc8ea0e/b5e55e1a03bc0126.jpg!q80.dpg.web",
    "100016015142": "//img14.360buyimg.com/n4/jfs/t1/216079/14/3895/201095/618a5c0cEe0b9e2ba/cf5b98fb6128a09e.jpg",
    "100016015078": "//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg",
    "100009064831": "//img14.360buyimg.com/n4/jfs/t1/203247/8/14659/237368/618a5c87Ecc968774/b0bb25331e5e2d1a.jpg",
    "100009064830": "//img14.360buyimg.com/n4/jfs/t1/160950/40/25098/234168/618a5cb9E65ba975e/7f8f93ea7767a51b.jpg"
  }
}


const data = ref({
  sku: requestData.Sku,
  goods: requestData.Goods
})


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

// 切换规格类目
const selectSku = (ss) => {
  const {sku, skuIndex, parentSku, parentIndex} = ss
  if (sku.disable) return false
  requestData.sku[parentIndex].list.forEach((s) => {
    s.active = s.id == sku.id
  })
  requestData.goods = {
    skuId: sku.id,
    price: '4599.00',
    imagePath: '//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg'
  }
}
// 底部操作按钮触发
const clickBtnOperate = (op) => {
  console.log('点击了操作按钮', op)
}
// 关闭商品规格弹框
const close = () => {
}

</script>
<style scoped>

</style>
