<template>
<v-app>
     <v-main>
      <IntroductionSection />
      <!-- <TranscriptionSteps/> -->
      <FileUpload/>
    </v-main>
</v-app>
 
</template>

<script>
//  import IntroductionSection from './components/IntroductionSection.vue'
// import TranscriptionSteps from './components/TranscriptionSteps.vue'
import FileUpload from './components/FileUpload.vue'

export default {
  name: 'App',

  components: {
    // IntroductionSection,
    // TranscriptionSteps
    FileUpload
  },

  data: () => ({
    
  }),
};
</script>
