<template>
  <div id="card">
    <!-- <v-file-input truncate-length="15"></v-file-input> -->
    <form action="http://localhost:5000/" enctype = "multipart/form-data" method="POST" target="hiddenFrame">
      <label id="header">Upload Tamil Audio</label><br>
      <input id="fileUpload" name="fileUpload" type="file" accept="audio/*" />
      <input
        id="deleteIcon"
        type="image"
        :src="require('./delete.png')"
        @click="resetFile()"
      />
      <div>
      
      <button id="submitbtn" type="submit">Get Transcript</button>
      <!-- <button id="submitbtn" refs="iframed" @click="fn()">Get Transcript</button> -->
      </div>
    </form>
    <iframe id="transcriptframe" name="hiddenFrame" class="hide" value="Hello"></iframe>
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  methods: {
    resetFile() {
      this.$refs.fileupload.value = null;
    },
    fn(){
      var iframe = document.getElementById('transcriptframe');
      var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      innerDoc.body.innerHTML = "லக்னோ: உ.பி., மாநிலம் அயோத்தியில் ராமர் கோயில் கட்டும் பணியை கடந்த 2020ம் ஆண்டு பிரதமர் மோடி அடிக்கல் நாட்டி துவங்கி வைத்தார். தொடர்ந்து பணிகள் விறுவிறுப்பாக நடந்து வருகிறது. இந்நிலையில், கோயில் கருவறைக்கு அடிக்கல் நாட்டு விழா நடந்தது. இந்த விழாவில் கலந்து கொண்டு பேசிய உ.பி., முதல்வர் யோகி ஆதித்யநாத் கூறியதாவது: ராமர் கோயில் கட்டும் பணிகள் வெற்றிகரமாக நடந்து வருகிறது. இந்தியாவின் தேசிய கோயிலாக ராமர் கோயில் இருக்கும். இந்த நாளுக்காக மக்கள் நீண்ட காலமாக காத்துள்ளனர். ராமர் கோயில் இந்தியாவின் ஒற்றுமையின் அடையாளமாக இருக்கும், என்றார்";
    },
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
#fileUpload{
   margin-top: 5%;
   margin-left: 40%;
}
#submitbtn{
  background-color:darksalmon;
  margin-left:40%;
  margin-top:2%;
  padding: 0.5%;
  border: 1px solid rgb(236, 64, 6);
}
#transcriptframe{
  margin-left: 60px;
  margin-top:30px;
  height:80px;
  overflow-y: auto;
  width:90%;
  /* border:none; */
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
#deleteIcon {
  width: 25px;
  height: 25px;
  /* margin-Left: 40%; */
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
