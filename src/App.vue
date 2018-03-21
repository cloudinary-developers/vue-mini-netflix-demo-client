<template>
  <div id="app">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="./assets/logo.svg" alt="Netflix" width="112" height="28">
          </a>

           <div class="navbar-menu">
            <div class="navbar-end">
              <a class="button" @click="showModal = !showModal">
                Upload
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <VideoPlayer :cloudinaryInstance="cloudinaryInstance" :movie="movie"></VideoPlayer>

    <div class="container">
      <h2 class="is-size-3">Movies</h2>
      <VideoList :cloudinaryInstance="cloudinaryInstance" @choose-movie="updatePlayer" :movies="movies"></VideoList>
    </div>
    <UploadModal :showModal="showModal" @handle-upload="uploadToServer"></UploadModal>
  </div>
</template>


<script>
import axios from 'axios';
import VideoPlayer from './components/VideoPlayer.vue';
import VideoList from './components/VideoList.vue';
import UploadModal from './components/UploadModal.vue';

export default {
  data() {
    return {
      movie: {},
      movies: [],
      showModal: false,
      url: 'https://wt-nwambachristian-gmail_com-0.run.webtask.io/server/movies'
    }
  },
  created() {
    this.cloudinaryInstance = window.cloudinary.Cloudinary.new({
      cloud_name: 'christekh',
      secure: true
    });
    axios.get(this.url)
      .then(res => {
        this.movies = res.data;
      })
  },
  methods: {
    updatePlayer(movie) {
      this.movie = movie;
    },
    uploadToServer(data) {
      axios.post(this.url, data).then(res => {
        this.movies = [...this.movies, res.data];
        this.showModal = false;
      })
    }
  },
  components: {
    VideoPlayer,
    VideoList,
    UploadModal
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e5e5e5;
  background-color: #000;
  padding-top: 30px;
}

.navbar {
  background-color: transparent;
  z-index: 2;
  padding: 30px 0;
}

.navbar-item {
  height: 25px;
  width: auto;
}
</style>
