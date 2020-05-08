<template>
    <div class="acquanted">
        <div class="acquanted__header">Let's get acquainted</div>
        <div class="acquanted__content">
            <div class="acquanted__img">
            <img src="../assets/img/acquainted-img.png" alt="">
            </div>
            <div class="acquanted__text">
            <div class="acquanted__text__title">I am cool frontend developer</div>
            <div class="acquanted__text__content">
                <p>{{p1}}</p>
                <p>{{p2}}</p>
                <!-- <p>We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.</p> -->
                <!-- <p>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice into HTML5/CSS3.</p> -->
            </div>
            <div class="btn-flat">
                <a href="#">Sing up now</a>
            </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
  data(){
    return{
      p1: 'We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.',
      p2: 'If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3.'
    }
  }

}
</script>

<style lang="scss" scoped>
.acquanted{
  display: flex;
  flex-direction: column;
  &__header{
    letter-spacing: 3px;
    margin: 0px auto;
    color: #212529;
    font-family: "Open Sans";
    font-size: 50px;
    font-weight: 400;
    line-height: 50px;
  }
  &__content{
    display: flex;
    margin-top: 68px;
  }
  &__img{
    flex: 0 0 33.333%;
    img{
      max-width: 100%;
    }
  }
  &__text{
    margin-left: 30px;
    position: relative;
    &__title{
      letter-spacing: 1.8px;
      color: #212529;
      font-family: "Open Sans";
      font-size: 24px;
      font-weight: 400;
      line-height: 30px;
    }
    &__content{
      margin-top: 17px;
      color: #4c4b4b;
      font-family: "Open Sans";
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      p{
        margin: 20px 0px;
      }
    }
  }
}
@media (max-width:768px){
  .acquanted{
    &__content{
      padding-left: 30px;
    }    
  }
}
@media (max-width:360px){
  .acquanted{
    &__content{
      padding: 0px 15px;
      margin: 32px 0px 0px;
      flex-direction: column;
    }
    &__header{
      font-size: 30px;
      letter-spacing: 0;
      // text-align: center;
    }
    &__text{
      margin: 40px 0px 0px;
      text-align: center;
      &__title{
        letter-spacing: 0;
      }
      &__content{
        p{
          text-align: left;
          margin: 13px 0px;
        }
      }
    }
  }
}
</style>