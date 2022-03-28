/* eslint-disable no-unused-labels */
<template>
  <div class="home">
    <div class="card">
      <img src="../assets/wheat-field.jpg" alt="Wheat image" />
      <div class="detail">
        <p>This site will allow you to discover craft beers of all kinds.</p>
      </div>
    </div>

    <form @submit.prevent="Searchbeers()" class="search-box">
      <h3>Search by</h3>
      <select class="selectlist" v-model="option">
        <option disabled value="">
          Please select what type of search to do
        </option>
        <option value="beer_name">Name</option>
        <option value="hops">Hops</option>
        <option value="yeast">Yeast</option>
        <option value="food">Food to pair</option>
      </select>

      <input type="text" placeholder="Enter search " v-model="search" />
      <input type="submit" value="Search" />
    </form>
    <div style="padding-left: 15px">
      <button class="action" @click="prevpage">Previous</button>
      <button class="action" @click="nextpage">Next</button>
    </div>

    <div style="padding-left: 15px; padding-top: 10px">
      <button class="action">current page {{ page }}</button>
    </div>
    <div class="beers-list">
      <div class="beer" v-for="beer in beers" :key="beer.id">
        <router-link :to="'/beer/' + beer.id" class="beer-link">
          <div class="beer-image">
            <img :src="beer.image_url" alt="beer image" />
          </div>
          <div class="beer-detail">
            <h3>{{ beer.name }}</h3>
            <p class="tagline">{{ beer.tagline }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
new Vue(
<script>
import { ref } from "vue";
import { api } from "@/api/punk-api";
export default {
  setup() {
    const search = ref("");
    const beers = ref([]);
    const option = ref("");
    const page = ref(1);

    const nextpage = () => {
      page.value++;
      Searchbeers();
    };

    const prevpage = () => {
      if (page.value > 1) page.value--;
      Searchbeers();
    };

    const Searchbeers = () => {
      if (search.value != "" && option.value != "") {
        api
          .getBeers({
            param: option.value,
            search: search.value,
            page: page.value,
          })
          .then((data) => {
            if (data.length > 1) beers.value = data;
            else {
              if (page.value > 1) page.value--;
              alert("no beer found");
            }
          });
      } else {
        alert("Please enter a search value");
      }
    };

    return {
      search,
      beers,
      Searchbeers,
      option,
      nextpage,
      prevpage,
      page,
    };
  },
};
</script>

<style lang="scss">
.home {
  .card {
    position: relative;
  }

  .action {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  img {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    position: relative;
  }

  .detail {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 1rem;
    z-index: 1;
    color: #fff;

    h3 {
      color: black;
      margin-bottom: 1rem;
    }
  }

  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    input {
      display: block;
      border: none;
      outline: none;
      background: none;
      width: 100%;
      padding: 0.8rem;
      border-radius: 8px;
      color: #000;

      &[type="text"] {
        font-size: 16px;
        border: 1px solid #374c8d;
        margin-bottom: 1rem;
        transition: 0.4s;

        &::placeholder {
          color: grey;
        }
      }

      &[type="submit"] {
        background-color: #374c8d;
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: 0.4s;
        color: white;

        &:active {
          background-color: #3b8070;
        }
      }
    }
  }

  .selectlist {
    font-size: 17px;
  }

  .beers-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;

    .beer {
      max-width: 33%;
      flex: 1 1 50%;
      padding: 0.7rem 0.5rem;

      .tagline {
        bottom: 16px;
        left: 0px;

        text-transform: capitalize;
        color: #374c8d;
        border-radius: 4px;
      }
      .beer-link {
        display: flex;
        flex-direction: column;
        height: 100%;

        .beer-image {
          position: relative;
          display: block;

          img {
            display: block;
            width: 100%;
            height: 275px;
            object-fit: scale-down;
            border: 1px solid white;
            border-bottom: none;
          }
        }

        .beer-detail {
          border: 1px solid white;
          border-top: none;
          padding: 0.7rem 0.5rem;
          flex: 1 1 100%;
          border-radius: 0px 0px 6px 6px;

          .year {
            color: #aaa;
            font-size: 14px;
          }

          h3 {
            color: #374c8d;
            font-weight: 600;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
