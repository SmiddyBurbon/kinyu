<template>
  <aside>
    <div class="options">
      <div class="row">
        <label>Background Image</label>
        <label for="bgImage" class="custom-file-upload">Upload</label>
        <input
          id="bgImage"
          type="file"
          @change="readURL"
        />
      </div>

      <div class="row">
        <label for="lines">Lines</label>
        <input
          id="lines"
          type="number"
          v-model.number="options.lines"
          :min="options.minLines"
          :max="options.maxLines"
          @change="updateOptions"
        />
      </div>

      <div class="row">
        <label for="gap">Gap</label>
        <label class="toggle">
          <input
            id="gap"
            type="checkbox"
            :checked="options.gap"
            v-model="options.gap"
          />
          <span class="slider"></span>
        </label>
      </div>

      <div class="row">
        <label for="cars">Cars</label>
        <label class="toggle">
          <input
            id="cars"
            type="checkbox"
            :checked="options.cars"
            v-model="options.cars"
          />
          <span class="slider"></span>
        </label>
      </div>

      <div class="row">
        <label for="points">Points</label>
        <label class="toggle">
          <input
            id="points"
            type="checkbox"
            :checked="options.points"
            v-model="options.points"
          />
          <span class="slider"></span>
        </label>
      </div>

      <div class="row">
        <label for="sponsor">Sponsor</label>
        <label class="toggle">
          <input
            id="sponsor"
            type="checkbox"
            :checked="options.sponsor"
            v-model="options.sponsor"
          />
          <span class="slider"></span>
        </label>
      </div>
    </div>
    <Download></Download>
  </aside>
</template>

<script>
  import Download from './Download.vue'

  export default {
    name: 'Sidebar',
    components: {
      Download
    },
    data() {
      return {
        options: {}
      }
    },
    mounted() {
      this.$root.$on('mounted', options => {
          this.options = options
      });
    },
    methods: {
      updateOptions() {
        this.$root.$emit('updatedObjects', this.options)
      },
      readURL() {
        var file = document.getElementById('bgImage').files[0];
        var reader = new FileReader();

        reader.onload = function(readerEvent) {
          var image = new Image();
          image.onload = function (/*imageEvent*/) {
            var max_size = 1200;
            var w = image.width;
            var h = image.height;

            if (w > h) {  if (w > max_size) { h*=max_size/w; w=max_size; }
            } else     {  if (h > max_size) { w*=max_size/h; h=max_size; } }

            var canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            canvas.getContext('2d').drawImage(image, 0, 0, w, h);
          }
          image.src = readerEvent.target.result;
          document.getElementById('canvas').style.backgroundImage = "url(" + reader.result + ")";
        }

        if(file){
          reader.readAsDataURL(file);
        }
      }
    }
  }
</script>

<style scoped>
  aside {
    background-color: var(--white);
    padding: 2.5rem 1.5rem;
    color: var(--grey);
    overflow: hidden;
  }
  .row {
    display: flex;
    justify-content: space-between;
  }
  .row:not(:last-of-type) {
    margin-bottom: 2rem;
  }
  .options input[type="number"] {
    appearance: none;
    -webkit-appearance: none;
    color: var(--black);
    font-size: 1rem;
    font-family: inherit;
    text-align: right;
  }
  /* The switch - the box around the slider */
  .toggle {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
  }

  /* Hide default HTML checkbox */
  .toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 12px;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
  input:checked + .slider {
    background-color: var(--black);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--black);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
  }
  input[type="file"] {
    display: none;
  }
  .custom-file-upload {
    color: var(--black);
    font-size: 1rem;
    text-transform: uppercase;
    display: inline-block;
    cursor: pointer;
    font-weight: 700;
    background-image: url('../assets/img/icons/ic_upload.svg');
    background-repeat: no-repeat;
    background-position: right center;
    padding-right: 2rem;

  }
</style>
