<script>
  import { siteAuthor } from "$lib/config";
  import { navItems } from "$lib/config";
  import NavItem from "./NavItem.svelte";
</script>

<footer>
  <div class="footer-wrapper">
    <nav>
      <ul>
        <NavItem href="/">Home</NavItem>
        {#each navItems as page}
          <NavItem href={page.route}>
            {page.title}
          </NavItem>
        {/each}
      </ul>
    </nav>

    <div class="right-footer-container">
      <a href="/api/rss.xml" data-sveltekit-reload target="_blank">RSS</a>
      <p class="copyright">
        &copy;{new Date().getFullYear()}
        <a href="https://leviv.cool" target="_blank">{siteAuthor}</a>
      </p>
    </div>
  </div>
</footer>

<style>
  footer {
    background: #a0e563;
    border-top-left-radius: 150px;
    border-top-right-radius: 150px;
    padding-top: 50px;
    margin-top: 25px;
  }

  .footer-wrapper {
    margin: 0 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    float: left;
  }

  .right-footer-container {
    text-align: right;
    float: right;
  }
</style>
