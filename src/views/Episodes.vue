
<template>
  <div v-loading="isLoading">
    <h1>Rick and Moprty Episodes</h1>
    <ul class="customGrid">
      <li v-for="episode in episodes" :key="episode.id">
        <EpisodeComponent :episode="episode" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Episode from "@/types/Episode";
import EpisodeComponent from "../components/EpisodeComponent.vue";
import { getAllEpisodes } from "../dataProviders/dataProvider";
export default {
  components: {
    EpisodeComponent,
  },
  data() {
    return {
      isLoading: true,
      episodes: [] as Episode[],
    };
  },
  async created() {
    const { results } = await getAllEpisodes();
    this.episodes = results;
    this.isLoading = false;
  },
};
</script>

<style>
.customGrid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
}
</style>