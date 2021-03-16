<template>
  <div class="container">
    <h1>now in Threads</h1>
    <div class="threads" v-if="relatedThreads">
      <ul>
        <li v-for="thread in relatedThreads" :key="thread.id">
          <div id="thread-div">
            <!-- <h3>Name: {{ thread.title }}</h3> -->
            <h3 class>
              <router-link :to="{name: 'Posts', params: {id: thread.id }}">Name: {{ thread.title }}</router-link>
            </h3>
            <p>Description: {{ thread.description }}</p>
            <h3>ID: {{ thread.id }}</h3>
            <p>Description: {{ thread.content }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      Oh no!!! We have no posts
      <li v-for="thread in my_threads" :key="thread.id">
        <div id="thread-div">
          <h3>Name: {{ thread.title }}</h3>
          <h3>ID: {{ thread.id }}</h3>
          <p>Description: {{ thread.content }}</p>
        </div>
        <h4 class>
          <router-link :to="{name: 'comments', params: {id: thread.id }}">{{thread.title}}</router-link>
        </h4>
      </li>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import axios from 'axios'
export default {
  name: "Threads",
  components: {},
  data() {
    return {
      id: this.$route.params.id, // for id
      my_threads: [],
    };
  },
  // computed: {
  //   // ...mapGetters({
  //   //     Threads: "StateThreads",
  //   //     // User: "StateUser"
  //   //   }),
  //   ...mapGetters(["StateThreads"]), //   computed: mapGetters(["allTodos"]),

  // },
  // created() {
  //   // ...mapActions(["GetPosts"])

  //   // a function to call getposts action
  //   // this.GetPosts();
  //   // id = 1;
  //   var id = this.id
  //   // console.log('id = ', this.$route.params.id)
  //   // this.my_threads = this.StateThreads

  //   console.log("this .threads", this.$store.state.threads)
  //   this.GetThread(id)
  //    console.log("this .threads", this.$store.state.threads)
  //   // axios.get(`/forum/${id}/thread`)
  //   //       .then(response => {
  //   //         console.log('Thread API has recieved data')
  //   //         console.log(id)
  //   //         this.my_threads = response.data
  //   //       })
  //   //       .catch(err => {
  //   //         console.log(err)
  //   //       })
  // },
  // mounted() {
  //   // this.StateThreads()
  // },
  // methods: {
  //   ...mapActions(["CreatePost", "GetPosts", "GetThread"]),
  //   // async submit() {
  //   //   try {
  //   //     await this.CreatePost(this.form);
  //   //   } catch (error) {
  //   //     throw "Sorry you can't make a thread now!"
  //   //   }
  //   // },
  // },

  methods: {
    ...mapActions(["fetchThreads"]),
    // onDblClick(todo) {
    //   const updTodo = {
    //     id: todo.id,
    //     title: todo.title,
    //     completed: !todo.completed
    //   };

    // this.updateTodo(updTodo);
  },

  computed: mapGetters(["relatedThreads"]),
  created() {
    var id = this.id;
    this.fetchThreads(id);
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

#thread-div {
  border: 3px solid #000;
  width: 500px;
  margin: auto;
  margin-bottom: 5px;
} */
</style>
