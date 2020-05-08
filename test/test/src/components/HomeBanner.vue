<template>
  <div class="banner ibg">
        <img src="../assets/img/banner-sm.jpg" alt="">
        <div class="banner__content">
          <div class="banner__title line-clamp-3">
            Test assignment for Frontend Developer position
          </div>
          <div class="banner__text line-clamp-6">
            <span class="sm">We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.</span> 
            <span>Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens</span>
          </div>
          <div class="banner__btn btn">Sing up now</div>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.banner{
  display: flex;
  &__content{
    max-width: 56%;
    margin: 116px 0px 0px 0px;
    padding-left: 30px;
    color: #ffffff;
  }
  &__title{
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 50px;
    font-weight: 400;
    line-height: 54px;
    text-transform: uppercase;
    // @media screen and (max-width: 768px){
    //   font-size: 40px;
    //   line-height: 44px;
    // }
  }
  &__text{
    margin-top: 20px;
    letter-spacing: 1.2px;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  &__btn{
    margin: 35px 0;
  }
  
}
@media (max-width:768px){
  .banner{
    height: 500px;
    &__content{
      margin: 67px 0px 65px 0px;
    }
    &__title{
      font-size: 40px;
    }
    &__text{
      margin-top: 39px;
      span{
        display: none;
      }
      span.sm{
        display: block;
      }
    }
    &__btn{
      margin: 39px 0px 0px 0px;
    }
  }
}
@media (max-width:360px){
  .banner{
    height: 400px;
    &__content{
      margin: 67px 0px 65px 0px;
      max-width: 100%;
      text-align: center;
      padding: 5px;
    }
    &__title{
      font-size: 30px;
      line-height: 34px;
    }
    &__text{
      margin-top: 29px;
    }
    &__btn{
      margin: 29px 0px 0px 0px;
    }
  }
}
</style>