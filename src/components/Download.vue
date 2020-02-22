<template>

    <button id="download" @click="downloadImage">
      Download
    </button>

</template>

<script>
  /*import './assets/js/html2canvas.js'*/

  export default {
    name: 'Download',
    data() {
      return {
        // output: null
      }
    },
    methods: {
      downloadImage() {
        /*var canvas = document.getElementById('canvas');

        const options = {
          type: 'dataURL'
        }
        this.output = this.$html2canvas(canvas, options);*/

        /*html2canvas(canvas, {
          scale: 1
        }).then(function(canvas) {
            // document.body.appendChild(canvas);
            canvas.toBlob((blob) => {
              saveAs(blob, 'image.png')
            })
            // canvas.style.display = "none";
        });*/
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
