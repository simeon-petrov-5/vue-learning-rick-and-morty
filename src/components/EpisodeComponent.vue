<template>
  <el-card class="box-card">
    <template #header>
      <div class="clearfix">
        <span>{{ episode.episode }} - {{ episode.name }}</span>
      </div>
    </template>
    <div>
      <el-tag class="customTag">AIR: {{ episode.air_date }}</el-tag>
      <el-tag class="customTag">CREATED: {{ formatDate(episode.created) }}</el-tag>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    episode: Object,
  },
  methods:{
      formatDate(originalDate){
          const date = new Date(originalDate);
          return new Intl.DateTimeFormat('en-GB').format(date);
      }
  }
};
</script>

<style lang="scss" scoped>
.customTag:not(:last-child) {
  margin-right: 1rem;
  margin-bottom: 0.25rem;
}
</style>