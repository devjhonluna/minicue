<script>
  import "../global.css";
  import Header from "../sections/Header.svelte";
  import "@fontsource/courier-prime";
  import "@fontsource-variable/open-sans";
  import Footer from "../sections/Footer.svelte";
  import Main from "../sections/Main.svelte";
</script>

<!-- markup (zero or more items) goes here -->
<svelte:head>
  <title>MiniCue</title>
  <meta
    name="description"
    content="Generador de guiones de video para formato corto"
  />
</svelte:head>
<Header />
<Main/>
<Footer/>

