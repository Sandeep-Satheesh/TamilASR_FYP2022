<template>
  <div id="mainparent">
    <div id="introduction">
    <div id="headingmain">Transcribe Tamil</div>
    <div id="p1">Save time transcribing your Tamil audio to text.</div>
    <div id="p2">
      Create accurate transcripts easily with our Tamil transcription service!!
    </div>
    <img id="transcriptionimg" :src="require('./transcription.png')" />
    <div>
      <!-- <router-link to="/FileUpload">Clothes</router-link> -->
    <!-- <a href="FileUpload">Click</a> -->
      <button id="transcribeBtn"  @click="fn()">Get Transcript</button>
      
    <!-- <router-view></router-view> -->
    </div>
    </div>
    <TranscriptionSteps/>
    <Features/>
    </div>
</template>

<script>
import TranscriptionSteps from './TranscriptionSteps.vue';
import Features from './Features.vue';

export default {
 
  components: {TranscriptionSteps,Features},
  name: "IntroductionSection",
  methods:{
    fn(){

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#introduction{
  margin-left: 380px;
  /* border:solid 1px */
}
#headingmain {
  /* position: fixed; */
  margin-left:110px;
  font-size: 50px;
  font-weight: bolder;
}
#mainparent{
  background-color: rgb(255, 253, 253);
}
#transcribeBtn {
  /* margin-top:80px;
  margin-left: 0px; */
  margin-top:40px;
  width: 250px;
  margin-left:150px;
  border-radius: 8px;
  font-size: 20px;
  height: 70px;
  background-color: #0064df;
  color: white;
  font-weight: 600;
}
#transcriptionimg {
  /* position: fixed; */
  /* top: 32%;
  left: 26%; */
  margin-top:30px;
  margin-right:40px;
}
#p1{
   margin-left:120px;

}
#p2{
   margin-left:50px;

}

</style>
