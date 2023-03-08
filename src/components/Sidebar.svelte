<script>
  import Lesson from "./Lesson.svelte";

  let lessons = [
    {
      title: 'Abertura do evento XYZ', 
      slug: 'terca-22-de-julho', 
      availableAt: new Date('2023-03-08 10:00:00'), 
      type: 'live'
    },
    {
      title: 'Outra parte do nada', 
      slug: 'terca-11-de-julho', 
      availableAt: new Date('2023-03-18 17:00:00'), 
      type: 'class'
    },
    {
      title: 'Vaaaai tenso', 
      slug: 'terca-11-de-julho', 
      availableAt: new Date('2023-03-18 17:00:00'), 
      type: 'class'
    },
    {
      title: 'Essa aqui é a ultima prometo', 
      slug: 'terca-11-de-julho', 
      availableAt: new Date('2023-03-18 17:00:00'), 
      type: 'class'
    },
  ]
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