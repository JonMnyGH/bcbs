<template>
  <div class="container1"></div>
  <div class="outer-container">
    <div class="container">
      <div class="beer-detail">
        <img :src="beer.image_url" alt="beer Poster" class="featured-img" />
      </div>
    </div>
    <div class="container2"></div>
    <div class="beer-detail">
      <h2>{{ beer.name }}</h2>
      <p>{{ beer.description }}</p>
      <p>Alcohol by volume: {{ beer.abv }}</p>
      <p>{{ beer.tagline }}</p>
      <p>International Bitterness Units: {{ beer.ibu }}</p>
      <p></p>
      <h3>Food Pairing</h3>

      <ul>
        <li v-for="item in beer.food_pairing" v-bind:key="item.name">
          {{ item }}
        </li>
      </ul>
      <p></p>
      <h3>Tips</h3>
      <p>{{ beer.brewers_tips }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { api } from "@/api/punk-api";
export default {
  setup() {
    const beer = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      api.getBeerById(route.params.id).then((data) => {
        beer.value = data;
      });
    });

    return {
      beer,
    };
  },
};
</script>

<style lang="scss">
.container {
  width: 25%;
  height: 100%;
}
.outer-container {
  display: flex;
  flex-direction: row;
}

.container2 {
  width: 25%;
  height: 100%;
}

.beer-detail {
  padding: 1rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .featured-img {
    display: block;
    max-width: 200px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
}
</style>
