<template>
  <p>Home {{ info }}</p>

  <b-carousel
    id="carousel-1"
    v-model="1"
    :interval="4000"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="480"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide>
      <img
        slot="img"
        class="d-block img-fluid w-100"
        width="1024"
        height="480"
        :src="info['Picture']"
        alt="image slot"
      />
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      info: ""
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:3004/animes")
      .then(response => (this.info = response.data["Animes"][0]));
  }
};
</script>
