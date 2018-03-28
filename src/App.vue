<template>
  <div id="app">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="https://cloudinary-res.cloudinary.com/image/upload/v1521663307/MiniFlix-Logo_620x180.png" alt="Netflix" width="112" height="28">
          </a>

           <div class="navbar-menu">
            <div class="navbar-end">
              <a class="button navbar-item" @click="showModal = !showModal">
                Upload
              </a>
              <a class="button navbar-item">
                <social-sharing 
                  title="Build a Mini Netflix from scratch" 
                  url="https://cloudinary.gitbooks.io/build-a-mini-netflix-clone-with-vue/content" inline-template>
                  <div>
                    <network network="twitter">
                      Share
                    </network>
                  </div>
                </social-sharing>
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

const miniflixService = 'https://miniflix.cloudinary.auth0-extend.com/server/movies';


export default {
  data() {
    return {
      movie: {},
      movies: [],
      showModal: false,
      url: miniflixService
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
  margin-right: 10px;
}
</style>
