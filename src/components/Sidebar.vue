<template>
  <aside :style="cssVars">
    <div class="options">

      <div class="row" v-show="this.exists(options.api)">
        <button type="button" class="secondary" @click="getData">Auto-Fill Data</button>
      </div>

      <!--<div class="row">
        <Material v-model="colors"></Material>
      </div>-->

      <div class="row color" v-if="this.exists(options.colors) && this.exists(options.colors.primary)">
        <label for="primaryColor">Primary Color</label>
        <div>
          <input
            id="primaryColor"
            type="text"
            v-model="options.colors.primary"
            maxlength="7"
            @change="this.changeColors"
          />
          <div class="primary"></div>
        </div>
      </div>

      <div class="row color" v-if="this.exists(options.colors) && this.exists(options.colors.secondary)">
        <label for="secondaryColor">Secondary Color</label>
        <div>
          <input
            id="secondaryColor"
            type="text"
            v-model="options.colors.secondary"
            maxlength="7"
            @change="this.changeColors"
          />
          <div class="secondary"></div>
        </div>
      </div>

      <div class="row" v-if="this.exists(options.fontpicker)">
        <label>Font</label>
        <font-picker
          :api-key="'AIzaSyC-GhYfD9TW1Nv4W_mWxvkmj5vqpEblE-8'"
          :options="this.fontOptions"
          :active-font="this.fontFamily"
          @change="this.changeFont">
        </font-picker>
      </div>

      <div class="row" v-show="this.exists(options.csv)">
        <label for="importCSV" class="custom-file-upload">Import CSV</label>
        <input
          id="importCSV"
          class="apply-font"
          type="file"
          @change="parse"
        />
      </div>

      <div class="row" v-show="this.exists(options.bgimage) && options.bgimage">
        <label>Background Image</label>
        <label for="bgImage" class="custom-file-upload">Upload</label>
        <input
          id="bgImage"
          type="file"
          @change="readURL"
        />
      </div>

      <div class="row" v-show="this.exists(options.bgX)">
        <label for="lines">Image Position</label>
        <input
          id="lines"
          type="range"
          v-model.number="options.bgX"
          min=0
          max=100
          @input="updateOptions"
        />
      </div>

      <div class="row" v-show="this.exists(options.lines)">
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

      <div class="row" v-show="this.exists(options.flags)">
        <label for="flags">Flags</label>
        <label class="toggle">
          <input
            id="flags"
            type="checkbox"
            :checked="options.flags"
            v-model="options.flags"
          />
          <span class="slider"></span>
        </label>
      </div>

      <div class="row" v-show="this.exists(options.logos)">
        <label for="logos">Logos</label>
        <label class="toggle">
          <input
            id="logos"
            type="checkbox"
            :checked="options.logos"
            v-model="options.logos"
          />
          <span class="slider"></span>
        </label>
      </div>

      <div class="row" v-show="this.exists(options.gap)">
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

      <div class="row" v-show="this.exists(options.cars)">
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

      <div class="row" v-show="this.exists(options.played)">
        <label for="played">Games played</label>
        <label class="toggle">
          <input
            id="points"
            type="checkbox"
            :checked="options.played"
            v-model="options.played"
          />
          <span class="slider"></span>
        </label>
      </div>

      <div class="row" v-show="this.exists(options.goaldiff)">
        <label for="played">Goal difference</label>
        <label class="toggle">
          <input
            id="points"
            type="checkbox"
            :checked="options.goaldiff"
            v-model="options.goaldiff"
          />
          <span class="slider"></span>
        </label>
      </div>

      <div class="row" v-show="this.exists(options.points)">
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

      <div class="row" v-show="this.exists(options.scorers)">
        <label for="scorers">Scorers</label>
        <label class="toggle">
          <input
            id="venue"
            type="checkbox"
            :checked="options.scorers"
            v-model="options.scorers"
          />
          <span class="slider"></span>
        </label>
      </div>

      <div class="row" v-show="this.exists(options.venue)">
        <label for="venue">Venue</label>
        <label class="toggle">
          <input
            id="venue"
            type="checkbox"
            :checked="options.venue"
            v-model="options.venue"
          />
          <span class="slider"></span>
        </label>
      </div>

      <div class="row" v-show="this.exists(options.date)">
        <label for="date">Date</label>
        <label class="toggle">
          <input
            id="sponsor"
            type="checkbox"
            :checked="options.date"
            v-model="options.date"
          />
          <span class="slider"></span>
        </label>
      </div>

      <div class="row" v-show="this.exists(options.sponsor)">
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

      <div class="row" v-show="this.exists(options.layoutX) || this.exists(options.layoutY)">
        <label for="layout">Text Position</label>
        <div class="layoutButtons">
          <button v-show="this.exists(options.layoutX)" @click="setLayout('top', 'left')">&#8598;</button>
          <button v-show="this.exists(options.layoutX)" @click="setLayout('top', 'right')">&#8599;</button>
          <button v-show="this.exists(options.layoutY)" @click="setLayout('bottom', 'left')">&#8601;</button>
          <button v-show="this.exists(options.layoutY)" @click="setLayout('bottom', 'right')">&#8600;</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
  import FontPicker from 'font-picker-vue';
  // import { Material } from 'vue-color';

  export default {
    name: 'Sidebar',
    components: {
      FontPicker//, Material
    },
    data() {
      return {
        csvResult: '',
        options: {},
        fontFamily: 'Karla',
        fontOptions: {
          limit: 20,
          families: ['Karla', 'Roboto', 'Montserrat', 'Overpass', 'Lato', 'Roboto Condensed', 'Oswald', 'Roboto Slab', 'Muli', 'Fira Sans', 'Work Sans', 'Titillium Web', 'Barlow'],
          categories: ['sans-serif'],
          variants: ['regular', '700']
        }
      }
    },
    mounted() {
      this.$root.$on('mounted', options => {
          this.options = options
          this.changeColors()
      });
    },
    watch: {
      csvResult(current) {
        console.log(this.csvResult);
      }
    },
    methods: {
      parse() {
        var csv = document.getElementById('importCSV').files[0];
        var result = {}
        var $vm = this;
        this.$papa.parse(csv, {
          complete: function(results) {
              $vm.sendCSV(results.data)
          }
        });
      },
      sendCSV(results) {
        this.$root.$emit('csvImported', results)
      },
      getData() {
        this.$root.$emit('getData')
      },
      updateOptions() {
        this.$root.$emit('updatedObjects', this.options)
      },
      exists(option) {
        if(typeof option !== "undefined") {
          return true;
        }
      },
      changeFont(newFont) {
        this.fontFamily = newFont.family
        this.$root.$emit('fontChanged', this.fontFamily)
      },
      changeColors() {
        this.$root.$emit('colorsChanged', this.options.colors)
      },
      setLayout(x, y) {
        var text = document.getElementById('text');
        var logo = document.getElementById('logo');
        var overlay = document.getElementById('overlay');

        text.className = "";
        logo.className = "";
        overlay.className = "";

        text.className = x + " " + y;
        logo.className = "small " + x + " " + y;
        overlay.className = x + " " + y;
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
    },
    computed: {
      cssVars() {
        return {
          //'--primaryColor': this.options.colors.primary,
          //'--secondaryColor': this.options
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
    overflow-y: scroll;
    box-sizing: border-box;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .row:not(:last-of-type) {
    margin-bottom: 2rem;
  }
  .options input[type="number"] {
    appearance: none;
    -webkit-appearance: none;
    color: var(--black);
    font-weight: 700;
    border: none;
    outline: none;
    box-shadow: none;
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
    background-color: var(--turquoise);
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
  input[type="range"] {
    background-color: #ccc;
    height: 4px;
    margin-top: 0.5rem;
  }
  input[type="text"] {
    padding: 0.5rem 1rem 0.5rem 1rem;
    text-align: right;
    width: 4rem;
    font-family: inherit;
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
    opacity: 0.64;
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
  }
  .custom-file-upload:hover {
    opacity: 1;
  }
  .layoutButtons {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .layoutButtons button {
    appearance: none;
    -webkit-appearance: none;
    border: var(--grey) 1px solid;
    width: 2rem;
    height: 2rem;
    padding: 0;
    margin: 0.2rem;
    text-align: center;
    border-radius: 4px;
    outline: none;
    box-shadow: none;
    font-weight: bold;
    opacity: 0.4;
  }
  .layoutButtons button:hover {
    opacity: 1;
    cursor: pointer;
  }

  div[id^="font-picker"],
  .font-picker {
    box-shadow: none;
  }
  div[id^="font-picker"] *,
  .font-picker * {
    background: none;
  }
  div[id^="font-picker"] .dropdown-button,
  .font-picker .dropdown-button {
    background: var(--white) !important;
  }

  .color .primary,
  .color .secondary {
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    right: 2rem;
  }
  .color .primary {
    display: none;
  }
  .color .secondary {
    display: none;
  }
  .color {
    flex-direction: row;
    align-items: center;
  }
  .color div {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
