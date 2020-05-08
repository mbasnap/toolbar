<template>
  <div class="register">
      <h1>Register to get a work</h1>
      <div class="row">
        <div class="register__form form">
          <h2>Attention! After successful registration and alert, update the list of users in the block from the top</h2>
          <app-input class="register__input" label="Name" placeholder="Your name"/>
          <app-input class="register__input" label="Email" placeholder="Your email"/>
          <app-input class="register__input" label="Phone number" placeholder="+380 XX XXX XX XX"
          validate="Еnter phone number in open format"/>
          <app-select class="register__select" title="Select your position" :active="0"
          :items="['Frontend developer', 'Backend developer', 'Designer', 'QA']"/>
          <app-input class="register__input" label="Photo" placeholder="Upload your photo">
              <div class="register__browse">Browse</div>
          </app-input>
        </div>
      </div>
      <div class="row">
        <div class="register__btn btn">Sing up now</div>
      </div>
  </div>
</template>

<script>
import { AppInput, AppSelect } from '@/widgets'
export default {
    components: { AppInput, AppSelect }
}
</script>

<style lang="scss" scoped>
.register{
    height: 100%;
    width: 100%;
    text-align: center;
    h1{
        letter-spacing: 3px;
        color: #212529;
        font-family: "Open Sans";
        font-size: 50px;
        font-weight: 400;
        margin-bottom: 18px;
    }
    h2{
        margin: 0px 0px 29px 0px;
        color: #4c4b4b;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
    &__form{
        width: 470px;
        margin: 0px auto;
    }
    &__input{
        margin: 0px auto;
        margin-bottom: 24px;
    }
    &__select{
        margin: 0px auto;
        margin-bottom: 22px;
    }
    &__browse{
        margin: -4px -3px;
        background-color: #f8f7f5;
        border-left: 1px solid #d4d9de;
        flex: 1 1 22%;
        text-align: center;
        line-height: 34px;
        padding: 0px 15px;
    }
    &__btn{
        margin: 0px auto;
        margin-top: 16px;
    }
}
@media (max-width:768px){
    .register{
        h1{
            font-size: 40px;
        }
    }
}
@media (max-width:640px){
    .register{
        h1{
            font-size: 30px;
            letter-spacing: 0;
        }
    }
}
</style>