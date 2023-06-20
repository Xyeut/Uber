<template>
  <div class="root">
    <transition name="error">
      <Error v-if="error" />
    </transition>

    <Header />
    <Home />
    <Safety />
    <footer>
      <h2>This is a rework by Xyeut</h2>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from "./.nuxt/imports";
import { useErrorNotification } from "./composables/useStates"
const error = useErrorNotification()


useSeoMeta({
  title: 'Xyeut | Uber Rework',
  description: "Experience my Uber Rework's expertise. This website demonstrates my responsiveness and design abilities, providing excellent results for your unique needs.",
  ogTitle: "Uber Rework by Xyeut",
  ogDescription: "Experience my Uber Rework's expertise",
  ogImage: 'https://uber.xyeut.dev/ptkdL4P.png',
  ogUrl: 'https://uber.xyeut.dev/',
  twitterTitle: 'Uber Rework by Xyeut',
  twitterDescription: "Experience my Uber Rework's expertise. This website demonstrates my responsiveness and design abilities.",
  twitterImage: 'https://uber.xyeut.dev/ptkdL4P.png',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      sizes: "180x180",
      rel: 'apple-touch-icon',
      href: '/icons/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: "image/png",
      sizes: "16x16",
      href: '/icons/favicon-16x16.png'
    }, {
      rel: 'icon',
      type: "image/png",
      sizes: "32x32",
      href: '/icons/favicon-32x32.png'
    }, {
      rel: "icon",
      href: "/icons/favicon.ico"
    }
  ]
})

</script>


<style lang="scss">
footer {
  padding: clamp(25px, 2vw, 30px) 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $colors__primary;


  h2 {
    color: $colors__secondary;
    font-size: clamp(rem(16), 4vw, rem(21));

  }
}

.error-enter-active {
  animation: slide-in 1s
}

.error-leave-active {
  animation: slide-in 1s reverse
}

@keyframes slide-in {
  0% {
    transform: translateY(-100px) translateX(-50%);
  }

  100% {
    transform: translateY(20px) translateX(-50%);
  }
}
</style>