<template>
  <view class="details">
    <!-- 轮播图片   -->
    <view class="swiper_view">
      <!--  轮播图 -->
      <nut-swiper :auto-play="3000" loop direction="vertical" style="height: 400px">
        <nut-swiper-item v-for="(item, index) in product.imagePath" :key="index" style="height: 400px">
          <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false"/>
        </nut-swiper-item>
      </nut-swiper>
    </view>

    <!-- 商品其他信息，名称 价格等   -->
    <view class="product_details_card">
      <!--      商品价格-->
      <view class="product_price">
        <text>￥{{ product.price }}</text>
        <text class="member-price">会员价 ￥{{ Math.floor(product.price * 0.9) }}</text>
      </view>
      <!-- 商品名称     -->
      <view class="product_name">
        <text>{{ product.name }}</text>
      </view>
      <!--      商品描述-->
      <view class="product_desc">
        <text>{{ product.desc }}</text>
      </view>
      <!-- 商品标签-->
      <view class="product_tag">
        <nut-tag v-for="(tag, index) in product.tags" :key="index" :type="'danger'" :size="'big'" :shape="'circle'">
          {{ tag }}
        </nut-tag>
      </view>
      <!-- 自提点-->
      <view class="product_position">
        <text>自提点：{{ product.position }}</text>
      </view>
      <view class="product_time">
        <text>{{ product.time }}</text>
      </view>

    </view>


    <!-- 选购指南 -->
    <view class="product_guide">
      <text>选购指南</text>
      <nut-steps direction="vertical" class="guide_step" :current="4">
        <nut-step title="在线下单">
          <template #content>
            <text>每天23点之前可选购明日送达的产品，23点后选购商品后天送达。预售品送货时间以订单页面为准</text>
          </template>
        </nut-step>
        <nut-step title="物流配送">
          <template #content>
            <text>物流会将您下单时提示的配送时间，配送到您下单所选的团长门店。</text>
          </template>
        </nut-step>
        <nut-step title="门店自提">
          <template #content>
            <text>每天16点提货(团长不同，提货时间可能会有差异，详见社群通知)。</text>
          </template>
        </nut-step>
        <nut-step title="售后无忧">
          <template #content>
            <text>若购买的商品有问题，可联系团长处理，部分商品需联系平台处理。若购买后商家缺货，平台将及时退款。</text>
          </template>
        </nut-step>
      </nut-steps>
    </view>

    <nut-divider>最新评论</nut-divider>

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
    <view class="buy_view">
      <!-- 商品规格选择   -->
      <nut-cell :title="`加入购物车`" desc="" @click="base = true"></nut-cell>
      <nut-sku
        v-model:visible="base"
        :sku="data.sku"
        :goods="data.goods"
        @selectSku="selectSku"
        @clickBtnOperate="clickBtnOperate"
        @close="close"
        :btnOptions="['buy', 'cart']"
      >
      </nut-sku>
    </view>
  </view>
</template>

<script setup lang="ts">

import {onMounted, reactive, ref} from "vue";

import './details.scss'
import Taro from "@tarojs/taro";


interface ID {
  value: string
}

interface Product {
  id: string;
  name: string;
  price: number;
  tags: string[];
  imagePath: string[];
  desc: string;
  position: string;
  time: string;
}

const id = ref<ID | null>(null);

const product = reactive<Product>({
  id: '',
  name: '',
  price: 0,
  tags: [],
  imagePath: [],
  desc: '',
  position: '',
  time: ''
})

onMounted(
  async () => {
    const currentInstance = Taro.getCurrentInstance();
    const idParam = currentInstance.router?.params?.id;
    id.value = idParam ? {value: idParam} : null;
    console.log('id', id.value)
    // 数据模拟
    product.imagePath = [
      "https://img.alicdn.com/bao/uploaded/i2/248584509/O1CN016VbQtE1jBAtgBlfK8_!!248584509.jpg",
      "https://img.alicdn.com/bao/uploaded/i4/10550225/O1CN01LVR7dE1DX69dLmZ89_!!4611686018427386833-0-item_pic.jpg",
      "https://img.alicdn.com/bao/uploaded/i3/6000000002169/O1CN019LhT7k1RtS6FaRSDb_!!6000000002169-0-mia.jpg",
      "https://img.alicdn.com/bao/uploaded/i4/2218687872616/O1CN01WmCXoN1VCB6xB630g_!!0-item_pic.jpg"
    ]
    product.name = '华为 Mate 30 Pro'
    product.price = 4599
    product.tags = ['热销', '新品']
    product.desc = '华为 Mate 30 Pro 5G手机，双模5G全网通，AI变焦双摄，AI超级夜景'
    product.position = '星际一号转运中心'
    product.time = '明日16:00前到达自提点'
    console.log('product', product)
    if (id.value) {
      try {
        // 根据 ID 请求商品数据
        const res = await Taro.request({
          url: `/api/products/${id.value}`, // 替换为你的 API 地址
        });
        product.id = res.data.id;
        product.imagePath = res.data.imagePath;
      } catch (error) {
        console.error('获取商品信息失败：', error);
        Taro.showToast({
          title: '加载失败',
          icon: 'none',
        });
        return {id, product}
      }
    } else {
      Taro.showToast({
        title: '商品ID不存在',
        icon: 'none',
      });
    }
  }
)


const requestData = {
  "Sku": [
    {
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
    "images": [
      {
      "smallImgUrl": "",
      "bigImgUrl": "",
      "imgUrl": "https://img.alicdn.com/bao/uploaded/i4/2215591096345/O1CN01nmLEUl1wk40usQUSa_!!2215591096345.png"
    }, {
      "smallImgUrl": "",
      "bigImgUrl": "",
      "imgUrl": "https://img.alicdn.com/bao/uploaded/i2/1872056186/O1CN015t42YU1vZF6NR74Q9_!!1872056186.jpg"
    }, {
      "smallImgUrl": "",
      "bigImgUrl": "",
      "imgUrl": "https://img.alicdn.com/bao/uploaded/i1/2206849860376/O1CN011mINcr1EeFsUuBzDV_!!0-item_pic.jpg"
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

// 切换规格类目
const selectSku = (ss) => {
  const {sku, skuIndex, parentSku, parentIndex} = ss
  console.log('点击了规格类目', sku, skuIndex, parentSku, parentIndex)
  if (sku.disable) return false
  data.value.sku[parentIndex].list.forEach((s) => {
    s.active = s.id == sku.id
  })
  data.value.goods = {
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

const base = ref(false)
</script>

