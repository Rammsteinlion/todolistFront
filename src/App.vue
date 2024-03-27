<script setup lang="ts">
import { useRouter, Router } from 'vue-router'
import { watch } from 'vue';
import store from '@/store/store'
import router from '@/router/router'

const route = useRouter()

// Assuming you have a 'token' variable in your store
const token = store.state.token

watch(
  () => token,
  (newToken, oldToken) => {
    if (!newToken) {
      router.push('/login')
    }
  }
)
</script>


<template>
  <router-view/>
</template>

<style>

</style>
