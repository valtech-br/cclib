<template>
  <component
    :is="componentTag"
    v-bind="urlTag"
    class="simple-btn"
  >
    <span class="text-button noselect">
      <slot />
    </span>
  </component>
</template>

<script>
  export default {
    name: 'simpleBtn',
    props: {
      link: {
        type: [String, Object],
        default: ''
      }
    },
    computed: {
      isExternal() {
        if (!this.link) return false
        return (
          typeof this.link === 'string' && this.link.search(/(^\/|^#)/g) === -1
        )
      },
      isNative() {
        if (!this.link) return false
        return this.isExternal || !this.$router
      },
      urlTag() {
        if (!this.link) return ''
        return this.isNative ? { href: this.link, target: '_blank' } : { to: this.link }
      },
      componentTag() {
        if (!this.link) return 'div'
        const routerLink = this.$nuxt ? 'nuxt-link' : 'router-link'
        return this.isNative ? 'a' : routerLink
      }
    }
  }
</script>
