<script>
import axios from "axios";
import Error from "./Error.vue";

export default {
  name: "Register",

  data() {
    return {
      name: "",
      username: "",
      password: "",
      roles: [],
      roleInputs: [],
      errors: [],
      responseError: "",
    };
  },

  components: { Error },

  methods: {
    async handleSubmit() {
      try {
        await axios.post("users", {
          name: this.name,
          username: this.username,
          password: this.password,
          roles: JSON.parse(JSON.stringify(this.roleInputs)),
        });
        this.$router.push("/login");
      } catch (e) {
        this.errors = e.response.data.errors;
        this.responseError = e.response.data.message;
      }
    },
  },

  async created() {
    const response = await axios.get("users/create");
    this.roles = response.data;
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div v-if="errors">
      <div v-for="error of errors" :key="error">
        <Error :error="error" />
      </div>
    </div>
    <Error v-if="responseError" :error="responseError" />
    <h3>Sign Up</h3>
    <div class="form-group">
      <label for="">Name</label>
      <input
        type="text"
        v-model="name"
        class="form-control"
        placeholder="Name"
      />
    </div>
    <div class="form-group">
      <label for="">Username</label>
      <input
        type="text"
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
    <div class="form-group">
      <label for="">Roles</label>
      <select class="form-control" v-model="roleInputs" multiple>
        <option v-for="role of roles" :key="role.id" :value="role">
          {{ role.name }}
        </option>
      </select>
    </div>
    <button class="btn btn-primary btn-block">Sign Up</button>
  </form>
</template>
