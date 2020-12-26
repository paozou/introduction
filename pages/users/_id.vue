<template>
  <div>
    <p>/users/_id.vue</p>
    UserId: {{ userId }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.id,
    }
  },
}
</script>
