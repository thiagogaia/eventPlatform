<script>
  import Header from "./components/Header.svelte";
  import Lesson from "./components/Lesson.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import Video from "./components/Video.svelte";

</script>
<div class="flex flex-col min-h-screen">
  <Header />
  <main class="flex flex-1">
    <Video />
    <Sidebar />
  </main>
</div>

