
<template>
  <div v-loading="isLoading" class="page">
    <h1>Rick and Moprty Episodes</h1>

    <el-tag class="favTag" :type="tagType">
      Favourites: {{ favourites.length }} / {{ maxNumberFavourites }}
    </el-tag>
    <ul class="customGrid">
      <li v-for="episode in episodes" :key="episode.id">
        <EpisodeComponent
          :episode="episode"
          :is-favourite="isInFavourites(episode.id)"
          :is-limit-passed="checkFavouriteLimit"
          @add-to-fav="addToFavouriteList"
          @remove-from-fav="removeFromFav"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Episode from "@/types/Episode";
import { defineComponent } from "vue";
import EpisodeComponent from "../components/EpisodeComponent.vue";
import { getAllEpisodes } from "../dataProviders/dataProvider";

const warningMsg = 'Warning, you have $val more favourite slots left!';

export default defineComponent({
  components: {
    EpisodeComponent,
  },
  data() {
    return {
      isLoading: true,
      episodes: [] as Episode[],
      favourites: [] as number[],
      maxNumberFavourites: 10,
      tagType: "success",
    };
  },
  computed: {
    checkFavouriteLimit(): boolean {
      return this.favourites.length >= this.maxNumberFavourites;
    },
  },
  watch: {
    favourites: {
      deep: true,
      handler(newData) {
        const currentLength = newData.length;
        switch (currentLength) {
          case 5:
            window.alert(warningMsg.replace('$val', '5'));
            break;
          case 8:
            window.alert(warningMsg.replace('$val', '2'));
            this.tagType = "warning";
            break;
          case 9:
            window.alert(warningMsg.replace('$val', '1'));
            break;
          case 10:
            this.tagType = "danger";
            break;
        }
      },
    },
  },
  methods: {
    addToFavouriteList(id: number): void {
      this.favourites.push(id);
    },
    isInFavourites(elemtId: number): boolean {
      return this.favourites.includes(elemtId);
    },
    removeFromFav(id: number): void {
      this.favourites = this.favourites.filter((favId) => favId !== id);
    },
  },
  async created() {
    const { results } = await getAllEpisodes();
    this.episodes = results;
    this.isLoading = false;
  },
});
</script>

<style scoped>
.favTag {
  display: block !important;
  width: 130px;
  margin-left: auto;
  margin-bottom: 2rem;
}
.customGrid {
  display: grid;
  grid-template-columns: repeat(5, minmax(250px, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
}
</style>