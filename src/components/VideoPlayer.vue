<template>
  <div class="trailer-bg">
      <video
        id="trailer"
        autoplay
        loop
        class="cld-video-player trailer-bg__video">
      </video>
      <div class="trailer-content">
        <h1 class="is-size-1	has-text-weight-bold">{{movie.title || 'Black Panther'}}</h1>
        <button class="button" @click="playPause()">
          <i class="fa fa-play"></i> &nbsp; / &nbsp; 
          <i class="fa fa-pause"></i> 
          &nbsp; Trailer</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paused: false
    };
  },
  props: ['cloudinaryInstance', 'movie'],
  mounted() {
    this.player = this.cloudinaryInstance.videoPlayer('trailer', {
      controls: false,
      transformation: { crop: 'scale', width: 1200 }
    });
    this.player.source(
      this.movie.trailer ||
        'Marvel_Studios_Black_Panther_-_Official_Trailer_nmrtr7'
    );
    // Mute on blur
    document.hidden && this.player.mute();
    window.onfocus = () => this.player.unmute();
    window.onblur = () => this.player.mute();
  },
  watch: {
    movie(newMovie, oldMovie) {
      console.log(newMovie, oldMovie);
      this.player.source(newMovie.trailer);
    }
  },
  methods: {
    playPause() {
      if (this.paused) {
        this.player.play();
        this.paused = false;
      } else {
        this.player.pause();
        this.paused = true;
      }
    }
  }
};
</script>

<style>
.trailer-bg {
  position: relative;
}

.trailer-bg__video {
  position: absolute;
  width: 100%;
  outline: none;
}

.trailer-content {
  position: absolute;
  top: 30%;
  left: 200px;
}

.trailer-content button {
  border: none;
  border-radius: 0;
}
</style>