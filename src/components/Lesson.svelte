<script lang="ts">
  import { CheckCircle, Lock } from "phosphor-svelte"
  import { isPast, format } from 'date-fns'
  import ptBR from 'date-fns/locale/pt-BR'

  type LessonProps = {
    title: string
    slug: string
    availableAt: Date
    type: 'live' | 'class'
  }

  export let lesson: LessonProps

  const isAvailable = isPast(lesson.availableAt)
  const availableDateFormatted = format(lesson.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })
</script>
<a href="#" class="flex flex-col">
  <span class="text-gray-300">
    {availableDateFormatted}
  </span>
  <div class="rounded border border-gray-400 p-4 mt-2">
    <header class="flex items-center justify-between">
      
      {#if isAvailable}
        <span class="flex items-center gap-2 text-sm text-blue-500 font-medium">
          <CheckCircle size={20} />
          Conteudo liberado
        </span>
      {:else}
        <span class="flex items-center gap-2 text-sm text-orange-500 font-medium">
          <Lock size={20}/>
          Em Breve
        </span>
      {/if}

      <span class="text-xs text-white border font-bold rounded border-green-300 px-2 py-[0.125rem]">
        {#if lesson.type === 'live'}
          AO VIVO
        {:else}
          AULA PRÁTICA
        {/if}
      </span>
    </header>

    <strong class="text-gray-200 mt-5 block">
      {lesson.title}
    </strong>
  </div>
</a>