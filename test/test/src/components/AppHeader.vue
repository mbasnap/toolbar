<template>
  <div class="header">
      <div class="container">
        <div class="header__body">
            <a href="#" class="header__logo">
                <img src="../assets/img/logo.svg" alt="">
            </a>
            <div :class="['header__burger', { active }]"
            @click="toggle"><span></span></div>
            <nav :class="['header__menu', { active }]">
                    <div class="header__menu__shadow"></div>
                <div class="header__menu__body">
                    <div class="header__menu__logo"></div>
                    <div class="header__menu__nav">
                        <ul class="header__list row">
                            <li><a href="#" class="header__link">About me</a></li>
                            <li><a href="#" class="header__link">Relationships</a></li>
                            <li><a href="#" class="header__link">Requirements</a></li>
                            <li><a href="#" class="header__link">Users</a></li>
                            <li><a href="#" class="header__link">Sign Up</a></li>
                        </ul>
                        <div v-show="active">
                            <ul class="header__list row">
                                <li><a href="#" class="header__link">About me</a></li>
                                <li><a href="#" class="header__link">Relationships</a></li>
                                <li><a href="#" class="header__link">Requirements</a></li>
                                <li><a href="#" class="header__link">Users</a></li>
                                <li><a href="#" class="header__link">Sign Up</a></li>
                            </ul>
                            <ul class="header__list row">
                                <li><a href="#" class="header__link">About me</a></li>
                                <li><a href="#" class="header__link">Relationships</a></li>
                                <li><a href="#" class="header__link">Requirements</a></li>
                                <li><a href="#" class="header__link">Users</a></li>
                                <li><a href="#" class="header__link">Sign Up</a></li>
                            </ul>
                            <ul class="header__list row">
                                <li><a href="#" class="header__link">About me</a></li>
                                <li><a href="#" class="header__link">Relationships</a></li>
                                <li><a href="#" class="header__link">Requirements</a></li>
                                <li><a href="#" class="header__link">Users</a></li>
                                <li><a href="#" class="header__link">Sign Up</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: { value: Boolean },
    computed: {
        active({ value }){
            return value
        }
    },
    methods: {
        toggle(){
            this.$emit('input', !this.value)
        }
    }
}
</script>

<style lang='scss' scoped>
.header{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 50;
    &__logo{
        flex: 0 0 135px;
        position: relative;
        z-index: 3;
        img{
            max-width: 100%;
            display: block;
        }
    }
    &__body{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        height: 60px;
    }
    &__list{
        position: relative;
        z-index: 2;
        li{
            margin: 0px 0px 0px 30px;
            font-family: "Open Sans";
            font-size: 19px;
            font-weight: 400;
            a{
                color: #212529;
            }
        }
    }
    &__burger{
        display: none;
        cursor: pointer;
    }
    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        // z-index: 2;
        background-color: white;
    }
}
@media (max-width:768px) {
    .header{
        &__burger{
            display: block;
            width: 30px;
            height: 20px;
            position: relative;
            z-index: 3;
            &:before,&:after{
                content: '';
                position: absolute;
                background-color: black;
                width: 100%;
                height: 2px;
                left: 0;
            }
            &:after{
                bottom: 0;
            }
            span{
                position: absolute;
                background-color: black;
                width: 100%;
                height: 2px;
                left: 0;
                top: 9px;
                transition: all 0.3s ease 0s;
            }
        }
        &__list{
            display: block !important;
            padding: 0px 15px;
            border-bottom: 1px solid;
            li{
                margin: 30px 0px;
            }
        }
        &__menu{
            position: fixed;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            transition: all 0.3s ease 0s;
            &__body{
                background-color: white;
                width: 80%;
                height: 100%;
                position: relative;
                z-index: 2;
            }
            &__logo{
                height: 60px;
                width: 100%;
                border-bottom: 1px solid;
            }
            &__shadow{
                width: 100%;
                height: 100%;
                position: absolute;
                background-color: #00000029;
            }
            &__nav{
                width: 100%;
                height: 90%;
                overflow: auto;
            }
            &.active{
                left: 0;
            }
        }        
    }
}
@media (max-width:360px){
    .header{
        &__body{
            padding: 0px 15px;
        }
    }
}
</style>