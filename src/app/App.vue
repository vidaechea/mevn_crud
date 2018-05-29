<template lang="html">
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Vue.js CRUD</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link :to="{name:'displayItem'}" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'createItem'}" class="nav-link">Create item</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <br/>
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