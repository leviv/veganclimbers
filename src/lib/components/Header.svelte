<script>
  import { siteTitle } from "$lib/config";
  import { isMenuOpen } from "../assets/js/store";
  import { navItems, socials } from "$lib/config";
  import NavItem from "./NavItem.svelte";

  const focusMain = () => {
    const main = document.querySelector("main");
    main.focus();
  };

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

<header>
  <a
    on:click|preventDefault={focusMain}
    class="skip-to-content-link"
    href="#main"
  >
    Skip to main content
  </a>

  <nav class="main-nav" class:open={$isMenuOpen}>
    <ul>
      {#each navItems as page}
        <NavItem href={page.route}>
          {page.title}
        </NavItem>
      {/each}
    </ul>
  </nav>

  <div class="social">
    <ul>
      {#each socials as social}
        <a href={social.url} target="_blank">
          <img src={social.image} alt="{social.title} icon" />
        </a>
      {/each}
    </ul>
  </div>

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
</header>

<style>
  header {
    margin: 0 0px 0 150px;
    height: 100px;
    display: flex;
    align-items: center;
  }

  /** Skip to content for screen reader accessibility */
  .skip-to-content-link {
    position: absolute;
    top: -6rem;
    left: 0;
    padding: 0.5em;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    background: var(--darker);
    color: var(--background);
  }

  .skip-to-content-link:focus {
    transform: translateY(6rem);
    opacity: 1;
    z-index: 11;
  }

  /** Site links */
  .main-nav {
    display: inline-block;
  }

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

  /** Socials */

  .social {
    position: absolute;
    left: 0;
    margin-top: 350px;
  }

  .social ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100px;
    align-items: center;
  }

  .social a {
    width: 40px;
  }
</style>
