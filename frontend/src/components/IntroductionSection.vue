<template>
  <div id="parent">
    <div id="headingmain">Transcribe Tamil</div>
    <div id="p1">Save time transcribing your Tamil audio to text.</div>
    <div id="p2">
      Create accurate transcripts easily with our Tamil transcription service!!
    </div>
    <!-- <v-file-input truncate-length="15"></v-file-input> -->
    <img id="transcriptionimg" :src="require('./transcription.png')" />
    <button id="transcribeBtn">Get Transcript</button>
    <!-- <div id="stepsCard"> -->
    <!-- <TranscriptionSteps/> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import TranscriptionSteps from './TranscriptionSteps.vue';
export default {
  // components: {TranscriptionSteps},
  name: "IntroductionSection",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#parent{
  overflow-y: scroll;
}
#headingmain {
  position: fixed;
  top: 10%;
  left: 34%;
  font-size: 50px;
  font-weight: bolder;
}
#transcribeBtn {
  position: fixed;
  top: 55%;
  left: 38%;
  width: 250px;
  border-radius: 8px;
  font-size: 20px;
  height: 70px;
  background-color: #0064df;
  color: white;
  font-weight: 600;
}
#transcriptionimg {
  position: fixed;
  top: 32%;
  left: 26%;
}
/* #p1{
   left:10%;
} */

#p1 {
  position: fixed;
  font-size: 18px;
  top: 22%;
  left: 35%;
  color: grey;
}
#p2 {
  position: fixed;
  font-size: 18px;
  top: 25%;
  left: 28%;
  color: grey;
}
</style>
