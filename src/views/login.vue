<template>
  <div id="loginbody">
    <form>
      <div class="container">
        <div class="row1">
          <div class="col-mid-6">
            <div class="mb-4">
              <h1>User Log In</h1>
              <br />
              <br />

              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                required
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                required
                class="form-control"
                id="password"
                v-model="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn-lg btn-primary" v-on="login">
              Log In
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      console.log("Email: " + this.email);
      console.log("Password: " + this.password);
      this.$router.push("/");
    }
  }
};
</script>
<style>
.loginbody {
  width: 1024px;
  margin-left: 500px;
}
.row1 {
  display: auto;
  flex-wrap: unset;
  margin-right: 50px;
  margin-left: 50px;
}
</style>
