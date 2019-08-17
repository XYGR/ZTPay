<template>
  <div class="page sub-page">
    <app-header title="详情"></app-header>
    <app-scroll>
      <div class="particulars">
        <h2>互动圈升级维护公告</h2>
        <p>智投金服2019-07-18 14:00 公告</p>
        <div class="explain">
          <p>尊敬的向上用户:</p>
          <p>您好！</p>
          <p>向上互动圈将于今日（7月18日）起进行升级维护，期间可能会出现互动圈无法访问等情况，届时请您不必当心，耐心等待;升级成功时间将另行通知。</p>
        </div>
        <p>由此给您带来的不便敬请谅解。</p>
        <p>如您有任何疑问请联系在线客服或拨打客服热线:4000-688-166。</p>
        <div class="er">
          <img src="../../../assets/mine/erweima.png" alt />
          <p>扫一扫加小美微信好友</p>
          <p>了解更多详情</p>
        </div>
      </div>
    </app-scroll>
  </div>
</template>

<script>
import AppHeader from "../../../components/AppHeader";
import AppScroll from "../../../components/AppScroll";
export default {
  name: "Notice",
  components: {
    [AppHeader.name]: AppHeader,
    [AppScroll.name]: AppScroll
  }
};
</script>

<style lang="scss" scoped>
.particulars {
  padding: 0 0.5333rem;
  box-sizing: border-box;
  h2 {
    font-size: 32px;
    line-height: 70px;
    font-weight: 700;
  };
  p{
      font-size: 24px;
      line-height: 48px;
      font-weight: 700;
  };
  .explain{
      margin: 80px 0 100px 0;
      p{
          line-height: 48px;
      }
  };
  .er{
      img{
          margin: 0 auto;
          margin-top: 100px;
      };
      p{
          text-align: center;
      }
  }
}
</style>