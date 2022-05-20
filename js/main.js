const app = new Vue({
  el: "#app",
  data: {
    autoplayId: null,
    currentIndex: 0,
    images: [
      {
        src: "img/01.jpg",
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
      },
      {
        src: "img/02.jpg",
        title: "Svizzera",
        text: "Lorem ipsum",
      },
      {
        src: "img/03.jpg",
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        src: "img/04.jpg",
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
      },
      {
        src: "img/05.jpg",
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
      },
    ],
  },
  methods: {
    prevImage() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.images.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    nextImage() {
      if (this.currentIndex === this.images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    selectImage(index) {
      this.currentIndex = index;
    },
    autoplay() {
      this.autoplayId = setInterval(() => {
        this.nextImage();
      }, 3000);
    },
    stopAutoplay() {
      clearInterval(this.autoplayId);
    },
  },
  mounted() {
    this.autoplay();
  },
  beforeDestroy() {
    this.stopAutoplay();
  },
});
