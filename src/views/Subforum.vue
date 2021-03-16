<template>
  <div class="container">
    <h1>now in subforum</h1>
    <div class="subforum" v-if="relatedSubforums">
      <ul>
        <li v-for="subforum in relatedSubforums" :key="subforum.id">
          <div id="subforum-div">
             <h3 class="">Name:<router-link
                :to="{name: 'Thread', params: {id: subforum.id }}"
                >{{ subforum.name }}</router-link></h3>
            <p>Description: {{ subforum.description }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      Oh no!!! We have no posts
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Subforums",
  data() {
    return {
      id: this.$route.params.id, // for id
    };
  },
  methods: {
    ...mapActions(["fetchSubforums"]),
  },

  computed: mapGetters(["relatedSubforums"]),
  created() {
    var id = this.id;
    this.fetchSubforums(id);
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

#subforum-div {
  border: 3px solid #000;
  width: 500px;
  margin: auto;
  margin-bottom: 5px;
} */
</style>
