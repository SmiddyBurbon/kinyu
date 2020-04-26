<template>
  <div>
    <div class="buttons">
      <button id="download" class="primary" @click="downloadImage()">Save <img src="../assets/img/icons/ic_download.svg" /></button>
      <!-- <button id="tweet" @click="tweet">Tweet</button> -->
    </div>
    <div id="exportable"></div>
  </div>
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
        var canvas = document.getElementById('preview')
        var width = canvas.offsetWidth;
        var height = canvas.clientHeight;

        var clone = canvas.cloneNode(true);
        clone.id = "clone";
        var exportable = document.getElementById('exportable')
        var child = exportable.lastElementChild;

        while (child) {
            exportable.removeChild(child);
            child = exportable.lastElementChild;
        }

        clone.style.transform = 'scale(1)';
        clone.id = "clone";
        clone.style.width = width + "px";
        clone.style.height = height + "px";
        exportable.style.width = width + "px";
        exportable.style.height = height + "px";
        clone.style.margin = "0";
        exportable.appendChild(clone);

        canvas = document.getElementById('exportable')

        this.$html2canvas(canvas, {
          scale: 1
        }).then(function(canvas) {
            canvas.toBlob((blob) => {
              saveAs(blob, 'image.png')
            })
        });
      },
      tweet() {
        this.axios
          .post('https://upload.twitter.com/1.1/media/upload.json?command=APPEND&media_id=123&segment_index=2&media_data=123')
          .then(
            response => (
              console.log(response)
            )
          );
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
  .buttons {
    position: absolute;
    bottom: 2rem;
    right: 1.5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  button:not(:last-of-type) {
    margin-right: 1rem;
  }
  #download {
    background-color: var(--turquoise);
    color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #download img {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 1rem;
  }
  #tweet {
    background-color: #00acee;
  }
  #exportable {
    position: absolute;
    top: -9999px;
    right: -9999px;
    z-index: 9;
  }
</style>
