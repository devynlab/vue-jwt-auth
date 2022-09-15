<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",

  computed: { ...mapGetters(["user"]) },
};
</script>

<template>
  <div>
    <h3 v-if="user">Hello, {{ user.name }}</h3>
    <h3 v-else>You are not logged in!</h3>
  </div>
</template>
