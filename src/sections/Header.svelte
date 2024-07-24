<script>
  import Github from "../components/icons/Github.svelte";
  import logo from "../assets/minicue-logo.png"
  // your script goes here
</script>

<!-- markup (zero or more items) goes here -->
<header class="flex justify-center xs:justify-between w-full flex-wrap gap-2">
  
  <a class="flex items-center space-x-3" href="/">
    <img src={logo} alt="logo-app" class="size-12" />
    <h1 class="font-courier-prime font-bold text-base">MINICUE</h1>
  </a>
  <a
    href="https://github.com/devjhonluna/minicue"
    class="flex items-center gap-1 bg-transparent hover:bg-dawnfeather hover:text-corbeau px-4 py-2 border border-dawnfeather rounded-full transition ease-in duration-150"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github sizeRem="1.25rem" />
    <span class="font-open-sans font-light">star on github</span>
  </a>
</header>

<style>
  /* your styles go here */
</style>
