<template>
  <div>
    <h1>Test API</h1>
    <button @click="testAPI">เชื่อมต่อ Backend</button>
    <pre>{{ result }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from './services/api.ts'

const result = ref(null)

const testAPI = async () => {
  try {
    const res = await api.get('/employees')
    result.value = res.data
  } catch (err) {
    result.value = err.message
  }
}
</script>