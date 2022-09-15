<script>
import axios from "axios";
import Error from "./Error.vue";

export default {
  name: "Login",

  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },

  components: { Error },

  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("login", {
          username: this.username,
          password: this.password,
        });
        localStorage.setItem("token", response.data.access_token);
        this.$store.dispatch("user", response.data.user);
        this.$router.push("/");
      } catch (e) {
        this.error = "Invalid username/password combination!";
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <Error v-if="error" :error="error" />
    <h3>Login</h3>
    <div class="form-group">
      <label for="">Username</label>
      <input
        type="username"
        v-model="username"
        class="form-control"
        placeholder="Username"
      />
    </div>
    <div class="form-group">
      <label for="">Password</label>
      <input
        type="password"
        v-model="password"
        class="form-control"
        placeholder="Password"
      />
    </div>
    <button class="btn btn-primary btn-block">Login</button>
    <p class="forgot-password text-right">
      <router-link to="login">Forgot Password?</router-link>
    </p>
  </form>
</template>
