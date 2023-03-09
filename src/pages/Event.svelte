<script lang="ts">
  import Video from "../components/Video.svelte"
  import Header from "../components/Header.svelte"
  import Sidebar from "../components/Sidebar.svelte"

  type Params = {
    slug: string
  }
  export let slug: string
</script>
<div class="flex flex-col min-h-screen">
  <Header />
  <main class="flex flex-1">
    {#if slug}
      <Video lessonSlug={slug} />
    {:else}
      <div class="flex-1" />
    {/if}
    
    <Sidebar />
  </main>
</div>