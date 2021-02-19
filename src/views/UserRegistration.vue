/* eslint-disable prettier/prettier */
<template>
  <div class="container">
    <div class="row">
      <form>
        <div class="col-mid-6">
          <div class="mb-4">
            <h1>User Log In</h1>
            <br />
            <br />
            <input
              type="text"
              class="form-control"
              id="userName"
              required
              v-model="userName"
              placeholder="Select a User Name"
            />
            <br />
            <input
              type="email"
              class="form-control"
              id="email"
              required
              v-model="email"
              placeholder="Enter your Email"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="password"
              required
              v-model="password"
              placeholder="Choose a Password"
            />
          </div>
          <div
            v-if="password.length > 1 && password.length < 6"
            class="text-danger"
          >
            Passwords length must be greater than 6
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="reEnteredPassword"
              v-model="reEnteredPassword"
              placeholder="Re Enter the password"
            />
          </div>
          <div v-if="password != reEnteredPassword" class="text-danger">
            Passwords Do Not Match!!
          </div>

          <button class="btn-lg btn-primary" @click="register">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserRegistration",
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      reEnteredPassword: "",
      dataEnteres: false
    };
  },
  methods: {
    register: function() {
      // console.log("User Name: " + this.userName);
      // console.log("Email: " + this.email);
      // console.log("Password: " + this.password);
      // console.log("Re Entered Password: " + this.reEnteredPassword);
      if ((this.userName != "" && this.password != ""))  {
        this.$router.push("/login");
      } else {
        this.$router.push("/");
      }
    }
  }
};
</script>
<style scoped></style>
