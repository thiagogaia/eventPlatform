<script>
  import Event from "./pages/Event.svelte";

  import { Router, Link, Route } from "svelte-navigator"
  import Subscribe from "./pages/Subscribe.svelte"
</script>
<Router primary={false}>
  <Route path="/">
    <Subscribe />
  </Route>
  <Route path="/event">
    <Event slug='' />
  </Route>

  <Route path="/event/lesson/:slug" let:params>
    <Event slug={params.slug} />
  </Route>
</Router>

