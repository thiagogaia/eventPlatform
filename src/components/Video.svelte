<script lang="ts">
  import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-svelte"
  import {Player, Youtube, DefaultUi, DefaultControls} from '@vime/svelte'
  import '@vime/core/themes/default.css'
  import { onMount } from "svelte"

  type VideoProps = {
    lessonSlug: string
  }
  export let lessonSlug: string

  interface GetLessonBySlug {
    lesson: {
      title: string
      videoId: string
      description: string
      teacher: {
        bio: string
        avatarUrl: string
        name: string
      }
    }
  }

  type LessonProp = {
    title: string
    videoId: string
    description: string
    teacher: {
      bio: string
      avatarUrl: string
      name: string
    },
    bio: string
    avatarUrl: string
    name: string
  }

  let lesson: LessonProp
  let isFetching: boolean = false
  async function getLesson(lessonSlug) {
    isFetching = true
    await fetch('https://5fe9887d2e12ee0017ab5158.mockapi.io/event?slug=' + lessonSlug)
    .then(res=>res.json())
    .then(json=> lesson = json[0])
    isFetching = false
    window.scrollTo(0, 0)
  }
  onMount(() => {
     getLesson(lessonSlug)
  })

  $: {
    getLesson(lessonSlug)
  }

</script>
{#if isFetching}
  <div class="flex-1">
    <div class="flex justify-center items-center max-h-[60vh]">
      <span>Carregando...</span>
    </div>
  </div>  

  {:else}

<div class="flex-1">
  <div class="bg-black flex justify-center">
    <div class="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
      <Player>
        <Youtube videoId="lDK9QqIzhwk"/>
        <DefaultUi noControls>
          <DefaultControls hideOnMouseLeave activeDuration="{2000}" />  
        </DefaultUi>

      </Player>
    </div>
  </div>

  <div class="p-8 max-w-[1100px] mx-auto">
    <div class="flex items-start gap-16">

      <div class="flex-1">
        <h1 class="text-2xl font-bold" >
          {lesson?.title}
        </h1>
        <p class="mt-4 text-gray-200 leading-relaxed">
          {lesson?.description}
        </p>

        <div class="flex items-center gap-4 mt-6">
          <img
            class="h-16 w-16 rounded-full border-2 border-blue-500" 
            src="{lesson?.avatarUrl}" alt="{lesson?.name}" />

          <div class="leading-relaxed">
            <strong class="font-bold text-2xl block">{lesson?.name}</strong>
            <span class="text-gray-200 text-sm block">{lesson?.bio}</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <a href="" class="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
          <DiscordLogo size={24} />
          Comunidade do Discord
        </a>

        <a href="" class="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
          <Lightning size={24} />
          Acesse o Desafio
        </a>
      </div>
    </div>

    <div class="gap-8 mt-20 grid grid-cols-2">
      <a href="" class="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
        <div class="bg-green-700 h-full p-6 flex items-center">
          <FileArrowDown size={40}/>
        </div>
        <div class="py-6 leading-relaxed">
          <strong class="text-2xl">MAtrial complemetar</strong>
          <p class="text-sm text-gray-200 mt-2">Acesse o material complementar</p>
        </div>
        <div class="h-full p-6 flex items-center">
          <CaretRight size={24}/>
        </div>
      </a>
      
      <a href="" class="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
        <div class="bg-green-700 h-full p-6 flex items-center">
          <FileArrowDown size={40}/>
        </div>
        <div class="py-6 leading-relaxed">
          <strong class="text-2xl">Wallspapers exclusivos</strong>
          <p class="text-sm text-gray-200 mt-2">Acesse os Wallspapers exclusivos</p>
        </div>
        <div class="h-full p-6 flex items-center">
          <FileArrowDown size={24}/>
        </div>
      </a>
    </div>
  </div>
</div>
{/if}

<style>
  .pulse {
  position: relative;
  width: 100px;
  height: 100px;
  background: #8257e6;
  border-radius: 50%;
}

.pulse span {
  position: absolute;
  top: 0;
  left: 0;
  background: #8257e6;
  border-radius: 50%;
  display: inline-block;
  width: 100%;
  height: 100%;
  
  animation: animate 2.5s linear infinite;
  
  animation-delay: calc(.5s * var(--i));
}

@keyframes animate {
  0% {
    transform: scale(1);
    opacity: .5;
  }
  90% {
    transform: scale(3);
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}
</style>