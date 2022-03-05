<template>
  <v-card class="card-height">
    <v-row>
      <v-col cols="12">
        <v-carousel height="300">
          <v-carousel-item v-for="image in productDetail.images" :key="image">
            <v-sheet tile class="fill-height">
              <v-row class="fill-height" align="center" justify="center">
                <v-img :src="image"></v-img>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row class="text-left no-gutters px-2">
      <v-col cols="12" class="font-weight-bold">
        <span>{{ productDetail.name }}</span>
      </v-col>
      <v-col cols="12">
        <span class="orange--text">{{ productDetail.price.priceDisplay }}</span>
      </v-col>
      <v-col cols="12">
        <span class="text-decoration-line-through">{{
          productDetail.price.strikeThroughPriceDisplay
        }}</span>
        <v-avatar
          color="pink lighten-4"
          rounded
          size="30"
          width="40px"
          height="20px"
        >
          <span class="red--text">{{ productDetail.price.discount }}%</span>
        </v-avatar>
      </v-col>
      <v-col cols="1">
        <v-img
          v-if="
            productDetail.badge.merchantBadge &&
            productDetail.badge.merchantBadge !== 'None'
          "
          :src="productDetail.badge.merchantBadgeUrl"
          width="20px"
        ></v-img>
      </v-col>
      <v-col cols="10">
        <span class="grey--text">{{ productDetail.location }}</span>
      </v-col>
    </v-row>
    <v-bottom-navigation absolute light height="40">
      <v-btn class="pa-1 white--text" color="primary"> More Details </v-btn>
    </v-bottom-navigation>
  </v-card>
</template>

<script>
export default {
  data : function() {
    return {}
  },
  props: ["productDetail"]
};
</script>
<style scoped>
.card-height {
  height: 500px;
}
.bottom-button {
  height: 30px;
}
</style>