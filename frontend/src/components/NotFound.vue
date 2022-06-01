<template>
  <div id="card">
    <!-- <v-file-input truncate-length="15"></v-file-input> -->
    <h1>Not Found!</h1>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  margin-left: 500px;
  font-size: 30px;
  font-weight: bold;
}
#card {
  position: fixed;
  width: 90%;
  height: 50%;
  border-radius: 8px;
  background-color: rgb(210, 233, 240);
  margin-top: 5%;
  margin-left: 5%;
}