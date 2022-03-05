<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://www.static-src.com/frontend/static/img/logo-blibli-white.f8255fc.svg"
          width="100"
        />
      </div>
      <div class="d-flex align-center mt-5">
        <v-text-field class="mt-2"
            label="Search Product"
            solo
            dense
            prepend-inner-icon="mdi-magnify"
            clearable
            v-model="searchText"
          ></v-text-field>
      <v-btn color="primary mb-5" @click="searchProduct">
        Search
      </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <layout-main :search-text="searchValue"/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import LayoutMain from './components/LayoutMain';

export default {
  name: 'App',

  components: {
    HelloWorld,
    LayoutMain
  },

  data: () => ({
    searchText : '',
    searchValue : ''
  }),

  methods : {
    //method to invoke the child component watch, this can be removed if we use vuex
    searchProduct : function() {
      this.searchValue = this.searchText;
    }
  }
};
</script>
