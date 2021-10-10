<template>
  <div classs="input-section">
    <p class="input-name">{{ typeName.title }}</p>
    <input :class="typeName.class" :placeholder="choosenValue" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      choosenValue: this.typeName.defaultValue,
    };
  },
  props: ["typeName"],
};
</script>

<style>
.input-section {
  margin-bottom: 16px;
}
</style>
