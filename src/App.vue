<template>
    <svg id='d3-container' width='1024' height='768'/>
</template>

<script>
import { onMounted } from 'vue';
import { initD3 } from './components/initD3';

export default {
  setup() {
    onMounted(() => {
      initD3('#d3-container');
    });

    return {

    };
  },
};
</script>

<style>
.node {}

.link { stroke: #999; stroke-opacity: .6; stroke-width: 1px; }
</style>
