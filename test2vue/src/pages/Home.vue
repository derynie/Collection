<template>
  <div>
      <p>Best <router-link :to="`/Animes`">Animes</router-link></p>
    <b-card-group  class="animated fadeIn " deck >
      <b-card  v-for="(anime, index) in animes" :key="index"
               style="max-height: 400px; min-height: 400px;"
               :img-src="anime['Picture']"
               :img-alt="anime['Title']"
               img-height="200px"
               img-width="100px"
               v-show="index >= (currentPageIndex * 4) && index <= (currentPageIndex * 4) + 3"
               img-top >
        <h4 class="card-title">
          <router-link :to="`/Animes/${anime['Id']}`">{{ anime['Title'] }}</router-link>
        </h4>
      </b-card>
    </b-card-group>

    <div class="card-pagination">
      <div class="page-index" v-for="i in nbPages" :key="i"  @click="goto(i)" :class={active:currentPage(i)}></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      animes: [],
      paginatedAnimes:[],
      nbPages:0,
      nbRowPerPage:4,
      currentPageIndex:0
    }
  },
  methods:{
    currentPage(i){
      return i-1===this.currentPageIndex;
    },
    createPages() {
      let lengthAll = Object.keys(this.animes).length;
      this.nbPages = 0;
      for (let i = 0; i < lengthAll; i = i + this.nbRowPerPage) {
        this.paginatedAnimes[this.nbPages] = this.animes.slice(
                i,
                i + this.nbRowPerPage
        );
        this.nbPages++;
      }
    },
    goto(i){

      this.currentPageIndex=i-1;
    }
  },
  mounted() {
    this.$axios
      .get("http://localhost:3004/animes")
      .then(response => {
        this.animes = response.data["Animes"];
        this.createPages()
      });
  }
};
</script>

<style>
  .card-pagination{
    display:flex;
    align-items: center;
    justify-content: center;
    padding:20px;
  }
  .page-index{
    margin-left:10px;
    width:15px;
    height:15px;
    border-radius:15px;
    background:#007bff
  }
  .active{
    width:20px;
    height:20px;
    border-radius:20px;
  }
</style>