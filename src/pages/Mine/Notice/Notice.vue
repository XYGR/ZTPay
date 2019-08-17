<template>
  <div>
    <div class="page sub-page">
      <app-header title="消息"></app-header>
	  <app-scroll>
      <div class="announcement">
        <router-link to="/mine/notice/detail" class="inform">
		<div class="block">
			<i>
				<img src="../../../assets/mine/laba.png" alt />
			</i>
			<h1>互动圈升级维护公告</h1>
		</div>
			
			
			<span>2109-07-18 14:00</span>
			<img src="../../../assets/mine/banner.png" alt />
		</router-link>
        <router-link to="/mine/notice/detail" class="inform">
		<div class="block">
			<i>
				<img src="../../../assets/mine/laba.png" alt />
			</i>
			<h1>互动圈升级维护公告</h1>
		</div>	
			<span>2109-07-18 14:00</span>
			<img src="../../../assets/mine/banner.png" alt />
		</router-link>
		</div>
		</app-scroll>
    </div>
	
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "../../../components/AppHeader";
import AppScroll from '../../../components/AppScroll'
export default {
  name: "Notice",
  components: {
	[AppHeader.name]: AppHeader,
	[AppScroll.name]: AppScroll
  }
};
</script>

<style lang="scss" scoped>
.announcement {
  padding: 0 0.5333rem;
  box-sizing: border-box;
  .inform {
	display: block;
    line-height: 34px;
    margin-top: 50px;
    i {
      display: inline-block;
      width: 34px;
      height: 34px;
      background: blue;
      border-radius: 50%;
      display: flex;
      align-items: center;
      img {
        margin: 0 auto;
      }
    }
    h1 {
	  display: inline-block;
      margin-left: 24px;
      font-size: 34px;
    }
  }
  span {
	  display: block;
    font-size: 20px;
    line-height: 80px;
  }
  .block{
	  display: flex;
	  align-items: center;
  }
}
</style>