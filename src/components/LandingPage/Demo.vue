<template>
  <section id="demo" class="neg">
    <div class="circle"></div>

    <div class="container">
      <img src="../../assets/img/feeder_2x.gif" alt="feeder" />
      <!--<video controls autoplay>
        <source src="../assets/img/feeder.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>-->
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
  #demo {
    padding: 8rem 0;
    color: var(--white);
  }
  #demo .container {
    text-align: center;
  }
  #demo img {
    width: 61.8%;
    margin: 0 auto;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.08), 0 10px 10px rgba(0,0,0,0.12);
  }

  @media screen and (max-width: 599px) {
    #demo img {
      width: 85.4%;
    }
  }
</style>
