<script lang="ts">
  import { CheckCircle, Lock } from "phosphor-svelte"
  import { isPast, format } from 'date-fns'
  import ptBR from 'date-fns/locale/pt-BR'

  import { Link, useLocation, useMatch } from "svelte-navigator"
  const location = useLocation()

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

  $: isActiveLesson = $location.pathname === `/event/lesson/${lesson.slug}`
</script>
<Link to="{`/event/lesson/${lesson.slug}`}" class="group">
  <span class="text-gray-300">
    {availableDateFormatted}
  </span>
  <div class="rounded border border-gray-400 p-4 mt-2 group-hover:border-green-500 {isActiveLesson ? 'bg-green-500' : ''}">
    <header class="flex items-center justify-between">
      
      {#if isAvailable}
        <span class="flex items-center gap-2 text-sm {isActiveLesson ? 'text-white' : 'text-blue-500'} font-medium">
          <CheckCircle size={20} />
          Conteudo liberado
        </span>
      {:else}
        <span class="flex items-center gap-2 text-sm text-orange-500 font-medium">
          <Lock size={20}/>
          Em Breve
        </span>
      {/if}

      <span class="text-xs text-white border font-bold rounded px-2 py-[0.125rem] {isActiveLesson ? 'border-white' : 'border-green-300'}">
        {#if lesson.type === 'live'}
          AO VIVO
        {:else}
          AULA PRÁTICA
        {/if}
      </span>
    </header>

    <strong class="mt-5 block {isActiveLesson ? 'text-white' : 'text-gray-200'}">
      {lesson.title}
    </strong>
  </div>
</Link>