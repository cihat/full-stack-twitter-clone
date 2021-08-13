<script>
import SideBarRightSearch from '@/components/SideBarRight/SideBarRightSearch'
import Icons from '@/components/Icons'

export default {
  components: {
    SideBarRightSearch,
    Icons
  }
}
</script>

<template>
  <div class="side-bar-right-trend">
    <side-bar-right-search />
    <div class="trends">
      <div class="title">
        <span>Trends for you</span>
        <icons icon="settings" />
      </div>
      <div class="trend">
        <div class="content">
          <p class="rank">Politics · Trending</p>
          <h4 class="caption">#istanbulsozlesmesiyasatir</h4>
          <p class="tweet-number">82M Tweets</p>
        </div>
        <icons icon="three-dot" class="section" />
      </div>
      <div class="trend">
        <div class="content">
          <p class="rank">Politics · Trending</p>
          <h4 class="caption">#ırkcılık</h4>
          <p class="tweet-number">40M Tweets</p>
        </div>
        <icons icon="three-dot" class="section" />
      </div>
      <div class="trend">
        <div class="content">
          <p class="rank">Politics · Trending</p>
          <h4 class="caption">#adalet</h4>
          <p class="tweet-number">70M Tweets</p>
        </div>
        <icons icon="three-dot" class="section" />
      </div>
      <div class="trend">
        <div class="content">
          <p class="rank">Politics · Trending</p>
          <h4 class="caption">#128milyardolarnerede</h4>
          <p class="tweet-number">40M Tweets</p>
        </div>
        <icons icon="three-dot" class="section" />
      </div>
      <div class="trend">
        <div class="content">
          <p class="rank">Politics · Trending</p>
          <h4 class="caption">#ekonomi</h4>
          <p class="tweet-number">100M Tweets</p>
        </div>
        <icons icon="three-dot" class="section" />
      </div>
      <div class="trend">
        <div class="content">
          <p class="rank">Politics · Trending</p>
          <h4 class="caption">#egitim</h4>
          <p class="tweet-number">46M Tweets</p>
        </div>
        <icons icon="three-dot" class="section" />
      </div>
      <h4 class="show-more">Show more</h4>
    </div>
  </div>
</template>

<style scoped lang="scss">
.side-bar-right-trend {
  max-width: 350px;
  width: 350px;
  margin-top: 0.2rem;
  margin-bottom: 24px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .trends {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background: #f6f8fa;
    position: sticky;
    top: 15px;

    .title {
      padding: 4px 16px;
      display: flex;
      cursor: pointer;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      padding-bottom: 12px;
      font-weight: 800;

      span {
        font-weight: 900;
        font-size: 20px;
        line-height: 22.27px;
        color: #000;
      }

      svg {
        width: 22px;
        height: 22px;
        padding: 0.5rem;
        box-sizing: content-box;
        border-radius: 50%;

        &:hover {
          background-color: rgba(#1da1f2, 0.2);
        }
      }
    }

    .trend {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      cursor: pointer;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
      padding-left: 20px;
      padding-right: 20px;

      .section {
        border-radius: 50%;
        box-sizing: content-box;
        padding: .5rem;
        &:hover {
          background-color: rgba(#1da1f2, 0.1);
          fill: #1da1f2;
        }
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        * {
          margin-bottom: 4px;
        }
        .rank {
          line-height: 14px;
          font-size: 12px;
          font-weight: 400;
          color: rgb(91, 112, 131);
        }
        .caption {
          font-size: 15px;
          line-height: 17.58px;
          font-weight: 700;
          color: #333;
        }

        .tweet-number {
          font-size: 14px;
          line-height: 16.41px;
          color: rgb(91, 112, 131);
        }
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.03);
      }
    }

    h4.show-more {
      color: #1da1f2;
      text-align: center;
      font-weight: 500;
      font-size: 14px;
      line-height: 16.41px;
      cursor: pointer;
      padding: 16px;
      text-align: left;
      font-weight: 300;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.03);
      }
    }
  }
}
</style>