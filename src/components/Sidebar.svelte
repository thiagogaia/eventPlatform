<script>
   import { onMount } from 'svelte'
  import Lesson from "./Lesson.svelte";

  let lessons = [
    
  ]

  onMount(() => {
    fetch('https://5fe9887d2e12ee0017ab5158.mockapi.io/event')
            .then(res=>res.json())
            .then(json=> {
              let type = ['live', 'class']
              let videoId = ['lDK9QqIzhwk', 'n9C_wryzKJw', 'vgXgex5E-8g']
              json.forEach(lesson => {
                lesson.availableAt = new Date(lesson.availableAt)
                lesson.type = type[Math.floor(Math.random() * type.length)]
                lesson.videoId = videoId[Math.floor(Math.random() * videoId.length)]
              })
              lessons = json
            })
  })
</script>
<aside class="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
  <span class="font-bold text-2xl pb-6 border-b border-gray-500 block">
    Cronograma de Aulas
  </span>

  <div class="flex flex-col gap-8 mt-6">
    {#each lessons as lesson}
      <Lesson {lesson} />
    {/each}
  </div>
</aside>