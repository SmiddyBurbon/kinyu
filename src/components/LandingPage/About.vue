<template>
  <section id="about" class="pos">
    <div class="circle"></div>

    <div class="container">
      <h3>What Feeder Offers</h3>

      <ul class="grid three">
        <li>
          <img src="../../assets/img/illu_templates.svg" alt="feeder" />
          <div>
            <h4>Customized templates</h4>
            <p>
              Feeder lets you use your very own template that reflects your brand. You can either submit an existing one or have us create one for you by a professional designer.
            </p>
          </div>
        </li>
        <li>
          <img src="../../assets/img/illu_devices.svg" alt="feeder" />
          <div>
            <h4>Customized templates</h4>
            <p>
              Feeder lets you use your very own template that reflects your brand. You can either submit an existing one or have us create one for you by a professional designer.
            </p>
          </div>
        </li>
        <li>
          <img src="../../assets/img/illu_api.svg" alt="feeder" />
          <div>
            <h4>API integration</h4>
            <p>
              If the data you need is already out there in the internet, we can try to connect it. This will make the templates fill automatically and remove any manual effort full stop.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
  #about {
    padding: 8rem 0 12rem;
  }
  #about li {
    display: flex;
    flex-direction: column;
  }
  #about img {
    width: 61.8%;
    margin-bottom: 2rem;
    flex: 1;
  }

  @media screen and (max-width: 1023px) {
    #about li:not(:last-of-type) {
      margin-bottom: 4rem;
    }
    #about li {
      flex-direction: row;
      text-align: left;
    }
    #about li div {
      flex-direction: column;
    }
    #about li img {
      margin: 0 4rem 0 0;
      width: 38.2%;
    }
  }
</style>
