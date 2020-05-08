<template>
  <div id="app">
    <div class="wraper">
        <app-header v-model="active"></app-header>
        <div :class="['body', { lock: active }]"><router-view/></div>
        <footer class="footer">
          <div class="container">
              <div class="row">
                  <div class="footer__text">© abz.agency specially for the test task</div>
              </div>
          </div>
        </footer>
      </div>
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader'
// import AppFooter from '@/components/AppFooter'
export default {
  components: { AppHeader },
    created() {
        window.addEventListener('resize', this.$store.commit('setWindowWidth'))
    },
    data(){
        return{
            active: false
        }
    }
}
</script>

<style lang="scss">

@mixin lineClamp($h){
    display: -webkit-box;
    -webkit-line-clamp: $h;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.line-clamp-3 { @include lineClamp(3); }
.line-clamp-6 { @include lineClamp(6); }
.row{
    display: flex;
    // height: 100%;
}
.btn{
    letter-spacing: 1px;
    display: inline-block;
    padding: 12px 57px 9px 59px;
    border-radius: 4px;
    background-color: #ef5b4c;
    color: #fefefe;
    font-family: "Open Sans - Semibold";
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    &.disabled{
        background-color: gray !important;
        cursor: auto;
    }
}
.btn-flat{
    a{
      color: #ef5b4c;
      font-family: "Open Sans - Semibold";
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 1px;
    }
}
.ibg{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    img:first-child{ display: none; }
}
.body{
    padding: 60px 0px 0px 0px;
    flex: 1 1 auto;
}
.footer{
    height: 60px;
    background-color: #ffffff;
    &__text{
        letter-spacing: 1px;
        width: 100%;
        border-top: 1px solid #ececec;
        line-height: 60px;
        text-align: center;
        color: #4c4b4b;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 400;
        padding: 0px 15px;
    }
}
.container{
  max-width: 1170px;
  margin: 0px auto;
  height: 100%;
}
.wraper{
  display: flex;
  min-height: 100%;
  overflow: hidden;
  flex-direction: column;
}
*{
    margin: 0;
    padding: 0;
    border: 0;
}
*,*:before,*:after{
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
:focus, :active{
    outline: none;
}
a:focus, a:active {
    outline: none;
}
header, footer, nav, aside {
    display: block;
}
html, body , #app {
    height: 100%;
    width: 100%;
    font-size: 100%;
    font-size: 14px;
    line-height: 1;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
input, button, textarea {
    font-family: inherit;
}
input::-ms-clear{
    display: none;
}
button {
    cursor: pointer;
}
button::-moz-focus-inner{
    padding: 0;
    border: 0;
}
a, a:visited {
    text-decoration: none;
}
a:hover{
    text-decoration: none;
}
ul li {
    list-style: none;
}
img {
    vertical-align: top;
}
h1,h2,h3,h4,h5,h6{
    font-size: inherit;
    font-weight: 400;
}
@media (max-width:768px){
    .body.lock{
        position: fixed;
        width: 100%;
    }
}
@media (max-width:640px){
    .footer{
        &__text{
            letter-spacing: 0;
        }
    }
}
</style>
