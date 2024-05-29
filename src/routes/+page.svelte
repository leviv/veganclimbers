<script>
  import { siteTitle } from "$lib/config";
</script>

<svelte:head>
  <title>{siteTitle}</title>
</svelte:head>

<main>
  <section id="hero">
    <img
      src="images/hero.png"
      class="hero-image"
      alt="Vintage climbing magazine cover of a climber on big sandstone pillars"
    />

    <div class="manifesto">
      <h1>Manifesto</h1>
      <p>
        Crimping ledges and eating vedges. A community dedicated to cruelty-free
        sends
      </p>
    </div>
  </section>
</main>

<style>
  main {
    margin: 0 120px;
  }

  section#hero {
    position: relative;
  }

  /** Hero */
  .hero-image {
    width: 100%;
    height: auto;
    border-radius: 150px;
  }

  /** Mainfesto */
  .manifesto {
    background-color: #a0e563;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    padding: 25px;
    border-radius: 40px;
    border: 3px solid #000;
  }

  .manifesto h1 {
    position: relative;
    top: -15px;
    color: #fff;
    transform: scale(1, 2);
    font-size: 90px;
    font-weight: bolder;
    text-transform: uppercase;
    text-align: center;
    -webkit-text-stroke: 1px #000;
    text-shadow:
      3px 3px 0 #000,
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }
</style>
