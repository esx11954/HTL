<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

const { Layout } = DefaultTheme
const route = useRoute()

function initCheckboxes() {
  nextTick(() => {
    const checkboxes = document.querySelectorAll('.vp-doc input[type="checkbox"]')
    checkboxes.forEach((cb, index) => {
      const key = `checkbox_${route.path}_${index}`
      // cloneNodeでイベントリスナーの二重登録を防ぐ
      const newCb = cb.cloneNode(true)
      newCb.removeAttribute('disabled')
      newCb.checked = localStorage.getItem(key) === 'true'
      newCb.addEventListener('change', () => {
        localStorage.setItem(key, String(newCb.checked))
      })
      cb.replaceWith(newCb)
    })
  })
}

onMounted(initCheckboxes)
watch(() => route.path, initCheckboxes)
</script>

<template>
  <Layout />
</template>
