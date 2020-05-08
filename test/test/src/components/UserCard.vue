<template>
  <div class="user">
    <div class="user__body">
      <!-- <div class="user__img"> -->
        <img :src="value.img" alt="">
      <!-- </div> -->
        <div class="user__name">{{ value.name }}</div>
        <p>{{ value.post }}</p>
        <p>{{ value.email }}</p>
        <p>{{ value.phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { value: Object },
}
</script>

<style lang="scss" >
.user{
  text-align: center;
  font-family: "Open Sans";
  &__body{
    width: 200px;
    height: 100%;
    padding: 10px;
    margin: 0px auto;
  }
  img{
    width: 70px;
    height: 70px;
    margin: 0px auto;
    border: 2px solid #ffffff;
    // background-color: #3a5384;
    border-radius: 35px;
  }
  &__name{
    margin: 20px 0px;
    color: #212529;
    font-size: 24px;
    font-weight: 400;
  }
  p{
    color: #4c4b4b;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;    
  }
}
</style>