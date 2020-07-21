<template>
   <v-card flat outlined  class="mx-auto" max-width="700">
      <v-toolbar flat color="rgb(140 137 137 / 10%)">
        <v-toolbar-title class="grey--text">{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn tile elevation="0" outlined  @click="hide = !hide">Hide</v-btn>
      </v-toolbar>
      <v-card-text v-show="!hide">
        <slot></slot>
      </v-card-text>
    </v-card>
</template>

<script>
  export default {
    name: 'c-card',
    props: ['title'],
    data: () => ({
      hide: false
    }),
  }
</script>
