<template>
  <button id="download" @click="downloadImage">
    Download
  </button>
</template>

<script>
  import { downloadImage } from '../assets/js/download.js'

  export default {
    name: 'Download',
    methods: {
      downloadImage(width, height) {
        cloneCanvas(width, height);
        var canvas = document.getElementById('exportable');
        canvas.style.width = width;
        canvas.style.height = height;

        html2canvas(canvas, {
          scale: 1
        }).then(function(canvas) {

            // updateStandings();
            canvas.id = "image";
            // document.body.appendChild(canvas);
            canvas.toBlob((blob) => {
              saveAs(blob, 'image.png')
            })
            // canvas.style.display = "none";
        });
      }
    }
  }
</script>

<style scoped>
  #download {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--black);
    color: var(--white);
    position: fixed;
    border: none;
    box-shadow: none;
    bottom: 3rem;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04rem;
  }
</style>
