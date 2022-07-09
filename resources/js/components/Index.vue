<template>
    <div>
        <router-link to="/article/">Article</router-link>
        <router-link to="/tag/">Tag</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>
