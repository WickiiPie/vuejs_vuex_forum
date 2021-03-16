<template>
  <div class="container">
    <div v-if="StateUser">
      <p>Hi {{ StateUser }}</p>
    </div>
    <!--
    <div>
      <form @submit.prevent="submit">
        <div>
          <label for="title">Title:</label>
          <input type="text" name="title" v-model="form.name" />
        </div>
        <div>
          <textarea
            name="description"
            v-model="form.description"
            placeholder="Write up..."
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>-->

    <h3>Forums</h3>
    <div class="forum" v-if="allForums">
      <ul>
        <li v-for="forum in allForums" :key="forum.id">
          <div id="forum-div">
            <h3 class>
              Name:
              <router-link :to="{name: 'SubForum', params: {id: forum.id }}">{{ forum.name }}</router-link>
            </h3>
            <p>Description: {{ forum.description }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>Oh no!!! We have no posts</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Forums",
  methods: {
    ...mapActions(["fetchForums", "deleteTodo", "updateTodo"]),
  },

  computed: mapGetters(["allForums", "StateUser"]),

  created() {
    this.fetchForums();
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
  margin: 10px;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

input {
  width: 60%;
  margin: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}

textarea {
  width: 75%;
  resize: vertical;
  padding: 15px;
  border-radius: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  height: 150px;
  margin: 15px;
}

ul {
  list-style: none;
}

#post-div {
  border: 3px solid #000;
  width: 500px;
  margin: auto;
  margin-bottom: 5px;
}
</style>
