<template>
  <div class="home">
    <div class="container">
      <home-banner class="home__banner"></home-banner>
      <home-acquanted class="home__acquanted"></home-acquanted>
      <home-users class="home__users"></home-users>
      <home-register class="home__register"></home-register>
    </div>
  </div>
</template>

<script>
import HomeBanner from '@/components/HomeBanner'
import HomeAcquanted from '@/components/HomeAcquanted'
import HomeUsers from '@/components/HomeUsers'
import HomeRegister from '@/components/HomeRegister'
  function ibg() {
    let ibg = document.querySelectorAll(".ibg")
    for (var i = 0; i < ibg.length; i++) {
      if(ibg[i].querySelector('img')){
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
      }
    }
  }
export default {
  mounted(){
    ibg()    
  },
  name: 'Home',
  components: { HomeBanner, HomeAcquanted, HomeUsers, HomeRegister }
}
</script>

<style lang="scss" scoped>
.home{
  &__acquanted{
    margin: 160px 30px;
  }
  &__users{
    background-color: #f9f9f3;
    padding: 160px 0px 110px;
  }
  &__register{
    padding: 160px 0px 163px;
  }
}
@media (max-width:768px){
  .home{
    &__acquanted{
      margin: 119px 30px;
    }
    &__users{
      padding: 120px 0px;
    }
    &__register{
      padding: 115px 0px;
    }
  }
}
@media (max-width:640px){
  .home{
    &__acquanted{
      margin: 80px 15px;
    }
    &__users{
      padding: 80px 15px;
    }
    &__register{
      padding: 80px 15px;
    }
  }
}
</style>
