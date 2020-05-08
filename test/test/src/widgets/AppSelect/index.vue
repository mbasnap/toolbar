<template>
  <div class="select">
      <div class="select__title">{{ title }}</div>
      <div v-for="(item, i) in items" :key="i" class="select__item">
          <div class="row">
              <div :class="['select__bullet bullet', {active: active === i}]">
                  <div v-show="i === active" class="bullet__dot"></div>
              </div>
              <div class="select__label">{{ item }}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: { title: String, items: Array, active: Number }
}
</script>

<style lang="scss" scoped>
.select{
    text-align: left;
    &__item{
        margin-bottom: 11px;
    }
    &__title{
        letter-spacing: 0.4px;
        margin: -4px 0px 15px;
        color: #212529;
        font-family: "PT Sans";
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
    }
    &__label{
        letter-spacing: 1.5px;
        margin-left: 10px;
        line-height: 19px;
    }
}
.bullet{
    width: 16px;
    height: 16px;
    border: 1px solid #adb5bd;
    background-color: #ffffff;
    border-radius: 35px;
    display: flex;
    &__dot{
        align-self: center;
        border-radius: 35px;
        margin: 0px auto;
        width: 6px;
        height: 6px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
        background-color: #ffffff;
    }
}
.bullet.active{
    background-color: #007bff;
}
</style>