<template>
<v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>User Profile</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab v-for="(tab, i) in tabs" :key="i">{{ tab }}</v-tab>

      <v-tab-item>
        <c-card title="Субъект хозяйствования">
            <v-layout row>
              <v-layout col>
                <v-text-field label="Regular"></v-text-field>
              </v-layout>
              <v-layout col>
                <v-text-field label="Regular"></v-text-field>
              </v-layout>
            </v-layout>
            <v-layout row>
              <v-layout col>
                <v-text-field label="Regular"></v-text-field>
              </v-layout>
              <v-layout col>
                <v-text-field label="Regular"></v-text-field>
              </v-layout>
              <v-layout col>
                <v-text-field label="Regular"></v-text-field>
              </v-layout>
            </v-layout>
        </c-card>
        <c-card title="Субъект хозяйствования">
            <v-layout row>
              <v-layout col>
                <v-text-field label="Regular"></v-text-field>
              </v-layout>
              <v-layout col>
                <v-text-field label="Regular"></v-text-field>
              </v-layout>
            </v-layout>
            <v-layout row>
              <v-layout col>
                <v-text-field label="Regular"></v-text-field>
              </v-layout>
              <v-layout col>
                <v-text-field label="Regular"></v-text-field>
              </v-layout>
              <v-layout col>
                <v-text-field label="Regular"></v-text-field>
              </v-layout>
            </v-layout>
        </c-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>

            <p>
              Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import CCard from './components/C-Card.vue';

export default {
  name: 'App',

  components: { CCard },

  data: () => ({
    tabs: ['option1', 'option2']
  }),
};
</script>
