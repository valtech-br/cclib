<template>
  <svg :class="['icon', `icon-${name}`]" viewBox="0 0 100 100">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: 'icon',
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>
