<template>
  <div class="input">
    <div class="input__label">{{ label }}</div>
    <div class="input__body">
      <div class="input__row row">
        <input type="text" :placeholder="placeholder">
        <slot></slot>
      </div>
    </div>
    <div class="input__validate">{{ validate }}</div>
  </div>
</template>

<script>
export default {
  props: { label: String, placeholder: String, validate: String }
}
</script>

<style lang="scss" scoped>
input::placeholder {
  color: #b2b9c0;
  font-family: "PT Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
}
.input{
  text-align: left;
  margin-bottom: 23px;
  &__label{
    margin-bottom: 13px;
    color: #212529;
    font-family: "PT Sans";
    font-size: 16px;
    font-weight: 400;
  }
  &__validate{
    letter-spacing: 1px;
    margin-top: 9px;
    color: #212529;
    font-family: "Open Sans";
    font-size: 12px;
    font-weight: 400;
  }
  &__body{
    width: 100%;
    height: 37px;
    border-radius: 4px;
    border: 1px solid #ced4da;
    background-color: #ffffff;
  }
  &__row{
    padding: 4px;
    height: 100%;
  }
  input{
    width: 100%;
    // border-radius: 4px;
    padding: 0 10px;
  }
}
</style>