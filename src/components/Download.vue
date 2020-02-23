<template>
  <button id="download" @click="downloadImage(1024, 1024)">Download</button>
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
      downloadImage(width, height) {
        var canvas = document.getElementById('canvas')
        this.cloneCanvas(canvas, width, height);

        canvas = document.getElementById('exportable')

        this.$html2canvas(canvas, {
          scale: 1
        }).then(function(canvas) {
            /*document.body.appendChild(canvas)
            console.log(canvas)*/
            canvas.toBlob((blob) => {
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
      },
      cloneCanvas(canvas, width, height) {
        var clone = canvas.cloneNode(true);

        var exportable = document.getElementById('exportable')

        if(document.body.contains(exportable)) {
          var child = exportable.lastElementChild;
          while (child) {
              exportable.removeChild(child);
              child = exportable.lastElementChild;
          }
        }
        else {
          var exportableNew = document.createElement('div')
          exportableNew.id = "exportable"
          document.body.appendChild(exportableNew)
          exportable = exportableNew
        }

        clone.style.transform = 'scale(1)';
        clone.id = "clone";
        clone.style.width = width;
        clone.style.height = height;
        exportable.style.width = width;
        exportable.style.height = height;
        clone.style.margin = "0";
        exportable.appendChild(clone);
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
