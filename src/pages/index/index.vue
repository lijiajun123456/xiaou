<template>
  <div>
    <van-nav-bar title="首页" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-tabs v-model="active">
      <van-tab title="热门推荐">
        <van-card
          v-for="item in 10"
          :key="item"
          price="2.00"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #footer>
            <van-button type="primary" size="small" icon="cart-o"></van-button>
          </template>
        </van-card>
      </van-tab>

      <van-tab title="发现新品">发现新品</van-tab>
      <van-tab title="所有商品">所有商品</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { requestBanner } from "../../utils/request";
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    GetBanner() {
      requestBanner().then(data => {});
    }
  },

  mounted() {
    this.GetBanner();
  }
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-tabs {
  margin-bottom: 50px;
}
</style>