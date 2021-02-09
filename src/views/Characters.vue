
<template>
  <div v-loading="isLoading" class="page">
    <h1>Rick and Moprty Characters</h1>
    <ul class="customGrid">
      <li v-for="character in characters" :key="character.id">
      <CharacterComponent :character="character"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Character from "@/types/Character";
import { defineComponent } from "vue";
import CharacterComponent from "../components/CharacterComponent.vue";
import { getAllCharacters } from "../dataProviders/dataProvider";
export default defineComponent({
  components: {
    CharacterComponent
  },
  data() {
    return {
      isLoading: true,
      characters: [] as Character[],
    };
  },
  async created() {
    const { results } = await getAllCharacters();
    console.log(results)
    this.characters = results;
    this.isLoading = false;
  },
});
</script>

<style>
.customGrid {
  display: grid;
  grid-template-columns: repeat(5, minmax(250px, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
}
</style>