Tamil Speech-To-Text Transcription Service (Final-Year Project 2022):

This project contains the web-app source code written for our final-year project - Tamil Speech Transcription Service.

  1. A deep-learning model was built to transcribe Tamil audio to text using large training corpora available on the Internet. The training data includes local Tamil news readouts, radio clippings, video interviews and volunteer-recorded speeches totaling 100+ GB.
  2. The model was iteratively trained on Google Colab to reach a stage of 90%+ accuracy on the test dataset.
  3. A web-app with a Vue.js frontend and a Flask backend was written to host the model as a web service.
  4. Audio samples from the UI is passed into the DL model in the backend, and the transcribed output is sent back as a response.
