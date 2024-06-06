<script>
  import { siteTitle } from "$lib/config";

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
</script>

<a href="/" class="site-title">
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
</a>

<style>
  /** Site title */
  .site-title {
    margin-left: auto;
    padding: 10px 10px 0 0;
    z-index: 9999999;
  }

  .site-title:hover svg {
    text-decoration: underline;
  }

  .site-title img {
    width: 100px;
    height: 100px;
    position: relative;
    left: 180px;
    top: 10px;
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
    position: relative;
    /* The top value is just a guess for now?? Not sure why the text needs to be positioned like this */
    top: 85px;
    right: 0px;
    width: 250px;
    height: 250px;
    background: rgba(255, 255, 255, 1);
    border: 3px solid #222;
    border-radius: 100%;
    z-index: 0;
    transition: all 0.2s;
  }
</style>
