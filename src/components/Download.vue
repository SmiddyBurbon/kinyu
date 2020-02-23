<template>
  <button id="download" @click="downloadImage">Download</button>
</template>

<script>
  import { saveAs } from 'file-saver';

  export default {
    name: 'Download',
    data() {
      return {
      }
    },
    methods: {
      downloadImage() {
        let canvas = document.getElementById('canvas')

        this.$html2canvas(canvas, {
          scale: 1
        }).then(function(canvas) {
            /*document.body.appendChild(canvas)
            console.log(canvas)*/
            canvas.toBlob((blob) => {
              console.log(blob)
              saveAs(blob, 'image.png')
            })
            // canvas.style.display = "none";
        });
      },
      saveAs(uri, filename) {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.download = filename;
            //Firefox requires the link to be in the body
            document.body.appendChild(link);
            //simulate click
            link.click();
            //remove the link when done
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
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
