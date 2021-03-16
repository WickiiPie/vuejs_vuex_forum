<template>
  <div class="container">
    <h1>now in Comments</h1>
    <div class="Comments" v-if="relatedComments">
      <h1>Thread detail</h1>
      <div class="headThread" v-if="headThread">
        <h1>hello</h1>
        <ul v-for="my_thread in headThread" :key="my_thread.id">
          <h3>ID: {{ my_thread.id }} Name: {{ my_thread.title }}</h3>
          <h3>Content: {{ my_thread.content }}</h3>
        </ul>
      </div>
      <ul>
        <li v-for="comment in relatedComments" :key="comment.id">
          <div id="comment-div">
            <h3 class>
              <!-- <router-link :to="{name: 'Posts', params: {id: comment.id }}">Name: {{ comment.title }}</router-link> -->
            </h3>
            <!-- <p>Description: {{ comment.description }}</p> -->
            <p>ID: {{ comment.id }} Description: {{ comment.content }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      Oh no!!! We have no posts
      <li v-for="comment in my_Comments" :key="comment.id">
        <div id="comment-div">
          <h3>Name: {{ comment.title }}</h3>
          <h3>ID: {{ comment.id }}</h3>
          <p>Description: {{ comment.content }}</p>
        </div>
        <h4 class>
          <router-link :to="{name: 'comments', params: {id: comment.id }}">{{comment.title}}</router-link>
        </h4>
      </li>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import axios from 'axios'
export default {
  name: "Comments",
  components: {},
  data() {
    return {
      id: this.$route.params.id, // for id
      // my_Comments: [],
    };
  },

  methods: {
    ...mapActions(["fetchComments", "fetchHeadThread"]),
  },

  computed: mapGetters(["relatedComments", "headThread"]),
  created() {
    var id = this.id;
    this.fetchComments(id);
    this.fetchHeadThread(id);
  },
};
</script>
<style scoped>
/* * {
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

#comment-div {
  border: 3px solid #000;
  width: 500px;
  margin: auto;
  margin-bottom: 5px;
} */
</style>
