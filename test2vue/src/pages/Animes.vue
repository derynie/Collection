<template>
    <div>
        <b-card-group columns>

            <b-card  v-for="(anime, index) in animes" :key="index"
                     :img-src="anime['Picture']"
                     :img-alt="anime['Title']"
                     img-height="200px"
                     img-width="100px"
                     img-top >
                <h4 class="card-title">
                    <router-link :to="`/Animes/${anime['Id']}`">{{ anime['Title'] }}</router-link>
                </h4>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    export default {
        name: "Animes",
        data() {
            return {
                animes: [],
            }
        },
    mounted() {
        this.$axios
            .get("http://localhost:3004/animes")
            .then(response => {
                this.animes = response.data["Animes"];
            });
    }
    };
</script>
