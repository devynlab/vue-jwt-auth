<script>
export default {
  name: "Error",

  props: ["error"],
};
</script>
<template>
  <div class="alert alert-danger" role="alert">
    {{ error }}
  </div>
</template>
