<script>
import { mapGetters } from "vuex";

export default {
  name: "Nav",

  computed: { ...mapGetters(["user"]) },

  methods: {
    handleClick() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="collapse navbar-collapse">
        <ul v-if="!user" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="register" class="nav-link">Sign up</router-link>
          </li>
        </ul>
        <ul v-if="user" class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="javascript:void(0)" @click="handleClick" class="nav-link">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
