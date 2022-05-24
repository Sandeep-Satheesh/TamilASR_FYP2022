<template>
  <div id="card">
   <div id="cardTitle">How to Transcribe Tamil Audio to Text</div>
   <div id="container">
  <div id="section1">
    <img id="uploadAudio" :src="require('./upload_audio.png')" /><br>
    <div id="section1Title">Upload Tamil Audio File</div>
    <div id="section1desc">Click on 'Choose File' and select your audio from your folders </div>
    </div>
  <div id="section2">
    <img id="clickBtn" :src="require('./click.png')" /><br>
    <div id="section2Title">Get Transcript</div>
    <div id="section2desc">Click on 'Get Transcript' button</div>
  </div>
  <div id="section3">
    <img id="tamilword" :src="require('./tamilword.png')" /><br>
    <div id="section3Title">Transcript</div>
    <div id="section3desc">Obtain accurate transcript</div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "TranscriptionSteps",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#card {
  position:fixed;
  width: 90%;
  height: 400px;
  border-radius: 8px;
  background-color: rgb(210, 233, 240);
  margin-top: 15%;
  margin-left: 5%;
  
}
#uploadAudio{
  width:120px;
  height:120px;
  margin-top:10%;
  margin-Left:28%;
}
#tamilword{
  width:120px;
  height:80px;
  margin-top:10%;
  margin-Left:28%;
}
#clickBtn{
  width:180px;
  height:140px;
  margin-top:2%;
  margin-Left:20%;
}
#container{
  display: flex;
  flex-direction: row;
}
#section1{
    background-color: white;
    width:250px;
    height:250px;
    margin-Top:3%;
    margin-Left:9%;
    
}
#section2{
    background-color: white;
    width:250px;
    height:250px;
    margin-Top:3%;
    margin-Left:10%;
}
#section1Title{
   font-weight: 600;
   font-size: 18px;
   margin-left: 10%;
   margin-top: 2%;

}
#section2Title{
   font-weight: 600;
   font-size: 18px;
   margin-left: 23%;
   margin-top: 1.2%;
}
#section3Title{
   font-weight: 600;
   font-size: 18px;
   margin-left: 30%;
   margin-top: 18%;

}
#section1desc
{
  margin-left: 5%;
  margin-top: 2%;
}
#section2desc
{
  margin-left: 5%;
  margin-top: 2%;
}
#section3desc
{
  margin-left: 11%;
  margin-top: 2%;
}
#section3{
    background-color: white;
    width:250px;
    height:250px;
    margin-Top:3%;
    margin-Left:10%;
}
#cardTitle{
    font-size: 30px;
    font-weight: 600;
    margin-left: 30%;
    padding-Top:1.5%;
}
</style>
