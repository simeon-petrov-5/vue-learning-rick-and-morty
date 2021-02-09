<template>
  <el-card class="box-card">
    <template #header>
      <div class="clearfix">
        <span>{{ episode.episode }} - {{ episode.name }}</span>
        <img
          v-if="isFavourite"
          class="favIcon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMTAxODIwO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iTGF5ZXIgNTQiIGlkPSJMYXllcl81NCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTYsMjguNzJhMywzLDAsMCwxLTIuMTMtLjg4TDMuNTcsMTcuNTRhOC43Miw4LjcyLDAsMCwxLTIuNTItNi4yNSw4LjA2LDguMDYsMCwwLDEsOC4xNC04QTguMDYsOC4wNiwwLDAsMSwxNSw1LjY4bDEsMSwuODItLjgyaDBhOC4zOSw4LjM5LDAsMCwxLDExLS44OSw4LjI1LDguMjUsMCwwLDEsLjgxLDEyLjM2TDE4LjEzLDI3Ljg0QTMsMywwLDAsMSwxNiwyOC43MlpNOS4xNSw1LjI4QTYuMTIsNi4xMiwwLDAsMCw0Ljg5LDdhNiw2LDAsMCwwLTEuODQsNC4zM0E2LjcyLDYuNzIsMCwwLDAsNSwxNi4xM2wxMC4zLDEwLjNhMSwxLDAsMCwwLDEuNDIsMEwyNy4yMywxNS45MUE2LjI1LDYuMjUsMCwwLDAsMjksMTEuMTFhNi4xOCw2LjE4LDAsMCwwLTIuNDMtNC41NSw2LjM3LDYuMzcsMCwwLDAtOC4zNy43MUwxNi43MSw4LjhhMSwxLDAsMCwxLTEuNDIsMGwtMS43LTEuN2E2LjI4LDYuMjgsMCwwLDAtNC40LTEuODJaIi8+PC9nPjwvc3ZnPg=="
        />
      </div>
    </template>
    <div>
      <el-tag class="customTag">AIR: {{ episode.air_date }}</el-tag>
      <el-tag class="customTag"
        >CREATED: {{ formatDate(episode.created) }}</el-tag
      >
    </div>
    <div class="actions">
      <el-button
        type="primary"
        icon="el-icon-star-off"
        circle
        @click="addToFavourites"
        :disabled="isLimitPassed || isFavourite"
      />

      <el-button
        type="danger"
        icon="el-icon-delete"
        circle
        @click="removeFromFavourites"
        :disabled="!isFavourite"
      />
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    episode: Object,
    isFavourite: Boolean,
    isLimitPassed: Boolean,
  },
  methods: {
    formatDate(originalDate) {
      const date = new Date(originalDate);
      return new Intl.DateTimeFormat("en-GB").format(date);
    },
    addToFavourites() {
      this.$emit("add-to-fav", this.episode.id);
    },
    removeFromFavourites() {
      this.$emit("remove-from-fav", this.episode.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  position: relative;
  overflow: hidden;
}
.customTag:not(:last-child) {
  margin-right: 1rem;
  margin-bottom: 0.25rem;
}
.actions {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}
.favIcon {
  margin-left: 1rem;
  width: 2rem;
  background-color: rgba(#67c23a, 0.7);
  padding: 6px;
  border-bottom-left-radius: 10px;
  position: absolute;
  right: 0;
  top: 0;
}
</style>