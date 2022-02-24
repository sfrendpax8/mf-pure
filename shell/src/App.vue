<template>
  <p>Text from the Host</p>
  <asdf />
</template>

<script setup>

// const asdf = import('remote/App');
// import asdf from 'remote/App';
import asdf from 'remote/Test';
console.log(asdf);
// export default {
//   name: 'App',
//   components: {
//     SomethingBad: () => import('remote/App'),
//   },
//   mounted() {
//     console.log(this);
//   }
// }
</script>

