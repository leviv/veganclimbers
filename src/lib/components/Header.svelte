<script>
  import { isMenuOpen } from "../assets/js/store";
  import { navItems, socials } from "$lib/config";
  import NavItem from "./NavItem.svelte";
  import HomeIcon from "./HomeIcon.svelte";

  const focusMain = () => {
    const main = document.querySelector("main");
    main.focus();
  };
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

  <HomeIcon />
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
