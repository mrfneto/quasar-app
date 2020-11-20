<template>
    <div>
        <H2>Página</H2>
        <p>{{ page }}</p>
        <p>{{ subpage }}</p>
    </div>
</template>

<script>
    export default {
        name: 'blog',
        data() {
            return {
                page: this.$route.params.page || null,
                subpage: this.$route.params.subpage || null
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>