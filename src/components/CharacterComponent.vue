<template>
  <el-card class="box-card">
    <template #header>
      <div class="clearfix">
        <span>{{ character.name }}</span>
      </div>
    </template>
    <div>
      <img
        class="avatar"
        :src="character.image"
        :alt="`${character.name}'s image`"
      />
      <div class="info">
        <el-tag class="customTag">SPECIES: {{ character.species }}</el-tag>
        <el-tag class="customTag" type="success"
          >GENDER: {{ character.gender }}</el-tag
        >
        <el-tag class="customTag" type="info"
          >ORIGIN: {{ character.origin.name }}</el-tag
        >
        <el-tag class="customTag" type="warning"
          >LOCATION: {{ character.location.name }}</el-tag
        >
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    character: Object,
  },
  methods: {
    formatDate(originalDate) {
      const date = new Date(originalDate);
      return new Intl.DateTimeFormat("en-GB").format(date);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-card__body {
  padding: 0;
}

.avatar {
  max-width: 100%;
}

.info {
  padding: 1rem;
  .customTag:not(:last-child) {
    margin-right: 1rem;
    margin-bottom: 0.25rem;
    font-size: 10px;
  }
}
</style>