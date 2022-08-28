<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="main">{{ msg }}</h1>
  <div class="testdiv">
    <span class="left">张三</span>
    <span class="right">李四</span>
    <el-button type="primary">Primary</el-button>
  </div>
  
</template>

<style lang="scss">

.testdiv{
  .left{
    color: green;
  }
  .right{
    color: red;
  }
}
</style>

