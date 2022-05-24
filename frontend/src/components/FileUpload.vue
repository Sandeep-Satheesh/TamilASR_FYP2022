<template>
  <div id="card">
    <!-- <v-file-input truncate-length="15"></v-file-input> -->
    <form action="http://7d5a-35-236-196-195.ngrok.io/" method="POST">
      <label id="header">Upload Tamil Audio</label><br>
      <input id="fileUpload" type="file" ref="fileupload" accept="audio/*" />
      <input
        id="deleteIcon"
        type="image"
        :src="require('./delete.png')"
        @click="resetFile()"
      />
      <button type="submit">Get Transcript</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  methods: {
    resetFile() {
      this.$refs.fileupload.value = null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  margin-left: 40%;
  font-size: 30px;
  font-weight: bold;
}
#fileUpload{
   margin-top: 5%;
   margin-left: 40%;
}
#card {
  position: fixed;
  width: 90%;
  height: 300px;
  border-radius: 8px;
  background-color: rgb(210, 233, 240);
  margin-top: 5%;
  margin-left: 5%;
}
#deleteIcon {
  width: 30px;
  height: 30px;
  margin-Left: 40%;
}
input[type="file"]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"]::file-selector-button:hover {
  background-color: #32cd32;
  border: 2px solid #006400;
}
</style>
