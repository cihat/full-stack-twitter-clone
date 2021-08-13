<script>
const axios = require('axios')

export default {
  name: 'WhoFollow',
  data() {
    return {
      userData: {
        firstName: null,
        lastName: null,
        pictureUrl: null,
        userId: null
      }
    }
  },
  created() {
    axios
      .get('https://randomuser.me/api/')
      .then((response) => {
        // handle success
        const value = [...response.data.results][0]
        // console.log(value);
        this.userData.firstName = value.name.first
        this.userData.lastName = value.name.last
        this.userData.pictureUrl = value.picture.medium
        this.userData.userId = value.id.name
      })
      .catch((error) => {
        // handle error
        console.log(error)
      })
      .then(() => {
        // console.log(this.userData);
      })
  }
}
</script>

<template>
  <div id="who-follow">
    <h1>Who to follow</h1>
    <div class="people">
      <div class="container">
        <img :src="userData.pictureUrl" alt="" />
        <div class="name">
          <h3 class="name">
            {{ userData.firstName + ' ' + userData.lastName }}
          </h3>
          <h4 class="username" v-show="userData.userId">
            @{{ userData.userId }}
          </h4>
        </div>
      </div>
      <button>Follow</button>
    </div>
    <div class="people">
      <div class="container">
        <img
          src="https://100k-faces.glitch.me/random-image"
          class="avatar-image"
          alt=""
        />
        <div class="name">
          <h3>McFly</h3>
          <h4>@levraimcfly</h4>
        </div>
      </div>
      <button>Follow</button>
    </div>
    <div class="people">
      <div class="container">
        <img :src="userData.pictureUrl" alt="" />
        <div class="name">
          <h3 class="name">
            {{ userData.firstName + ' ' + userData.lastName }}
          </h3>
          <h4 class="username" v-show="userData.userId">
            @{{ userData.userId }}
          </h4>
        </div>
      </div>
      <button>Follow</button>
    </div>
    <h4 class="show-more">Show more</h4>
  </div>
</template>

<style scoped lang="scss">
#who-follow {
  position: sticky;
  top: 1rem;
  width: 350px;
  margin-top: 0.2rem;
  margin-bottom: 24px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f6f8fa;
  border-radius: 12px;

  h1 {
    font-weight: 900;
    font-size: 19px;
    line-height: 22.27px;
    color: #000;
    padding: 12px 16px;
  }

  .people {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border-top: 1px solid rgba(0, 0, 0, 0.08);

    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-right: 2rem;
      img {
        margin-right: 8px;
        border-radius: 50%;
        width: 48px;
        height: 48px;
      }
      div.name {
        h3 {
          font-weight: 700;
          font-size: 17px;
          line-height: 17.58px;
        }

        h4 {
          color: #828282;
          font-size: 14px;
          line-height: 16px;
        }
      }
    }

    button {
      cursor: pointer;
      color: #1da1f2;
      background-color: inherit;
      line-height: 18px;
      font-size: 15px;
      font-weight: 700;
      border: 1px solid #1da1f2;
      box-sizing: border-box;
      border-radius: 59px;
      width: 77px;
      height: 30px;
      margin-right: 1rem;
    }
    button:hover {
      border: 1px solid #fff;
      background-color: #1da1f2;
      color: #fff;
      border: 1px solid #fff;

      transition: 1s color, 1s background-color, 1s border;
    }
    button:active {
      outline: none;
      border: none;
    }
    button:focus {
      outline: 0;
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
    border-top: 1px solid rgba(0, 0, 0, 0.08);

    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
}
</style>