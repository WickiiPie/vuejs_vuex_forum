<template>
  <div name="form" class="register">
    <div>
      <form @submit.prevent="submit">
        <div>
          <label for="username">Username:</label>
          <input type="text" name="username" v-model="user.username" />
        </div>
        <div>
          <label for="first_name">First Name:</label>
          <input type="text" name="first_name" v-model="user.first_name" />
        </div>
        <div>
          <label for="last_name">Last Name:</label>
          <input type="text" name="last_name" v-model="user.last_name" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="user.password" />
        </div>
        <div>
          <label for="password2">Password2:</label>
          <input type="password" name="password2" v-model="user.password2" />
        </div>
        <div>
          <label for="email">email:</label>
          <input type="email" name="email" v-model="user.email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <p v-if="showError" id="error">Username already exists</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import User from "../models/user";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      user: new User(),
      submitted: false,
      successful: false,
      message: "",
      showError: false,

      //   form: {
      //     username: "",
      //     first_name: "",
      //     last_name: "",
      //     password: "",
      //     password2: "",
      //     email: "",
      //   },
      //   showError: false,
    };
  },
  computed: {
    loggedIn() {
      //   return this.$store.state.auth.status.loggedIn;
      return this.$store.getters.isAuthenticated;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    ...mapActions(["Register"]),
    // async submit() {
    //   try {
    //     console.log("This action ", this.form);
    //     await this.Register(this.form);
    //     this.$router.push("/");
    //     this.showError = false
    //   } catch (error) {
    //     this.showError = true
    //   }
    // },
    submit() {
      this.message = "";
      this.submitted = true;
      //   this.$validator.validate().then((isValid) => {
      // if (isValid) {
      //   this.$store.dispatch("auth/register", this.user).then(
      console.log("This user:", this.user);
      this.Register(this.user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.$router.push("/login/").catch((err) => {
        throw new Error(`Problem handling something: ${err}.`);
        });
        },
        (error) => {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
          this.successful = false;
        }
      );
      // }
      //   });
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
#error {
  color: red;
}
</style>
