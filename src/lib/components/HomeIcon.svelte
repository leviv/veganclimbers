<script>
  import { siteTitle } from "$lib/config";
  import { currentPage } from "../assets/js/store";

  const languages = [
    "素食攀岩",
    "ビーガンクライミング",
    "비건 등반",
    "Escalada Vegana",
    "शाकाहारी आरोहण",
    "ปีนเขามังสวิรัติ",
    "تسلق نباتي",
    "βίγκαν αναρρίχηση",
    "शाकाहारी चढ़ाई",
  ];
  const translation = languages[Math.floor(Math.random() * languages.length)];
  $: isHomePage = $currentPage == "/";
</script>

<a href="/" class="site-title" class:large={isHomePage}>
  <div class="icon-container">
    <img src="favicon.png" alt="A green and black climbing shoe" />
    <svg viewBox="0 0 100 100">
      <defs>
        <path
          id="circle"
          d="
          M 50, 50
          m -37, 0
          a 37,37 0 1,1 74,0
          a 37,37 0 1,1 -74,0"
        />
      </defs>
      <text font-size="12">
        <!-- 37 is the radius -->
        <textPath xlink:href="#circle" textLength={Math.floor(Math.PI * 2 * 37)}
          >{siteTitle} ~ {translation} ~&nbsp;
        </textPath>
      </text>
    </svg>
  </div>
</a>

<style>
  /** Site title */
  .site-title {
    z-index: 9999999;
    position: relative;
  }

  .site-title.large {
    position: absolute;
    top: 0;
    right: 0;
  }

  .site-title:hover svg {
    text-decoration: underline;
  }

  .icon-container {
    width: 150px;
    height: 150px;
    margin: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .large .icon-container {
    width: 250px;
    height: 250px;
  }

  .icon-container img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0%;
    width: 40%;
    height: 40%;
    margin: auto;
    z-index: 1;
  }

  @keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  svg {
    animation: rotating 25s linear infinite;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    border: 3px solid #222;
    border-radius: 100%;
    z-index: 0;
    transition: all 0.2s;
  }
</style>
