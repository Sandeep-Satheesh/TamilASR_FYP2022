<script>
 import IntroductionSection from './components/IntroductionSection.vue'

export default {
  name: 'App',

  components: {
    'intro-steps' : IntroductionSection,
  }
};
</script>
<template>
<v-app>
      <intro-steps/>
</v-app>
 
</template>