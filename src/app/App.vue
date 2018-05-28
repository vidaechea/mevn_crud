<template lang="html">
    <div>
        <h1>Vue works!</h1>

        <router-link :to="{name:'createItem'}" class="btn btn-primary">Crear item</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped lang="css">

</style>