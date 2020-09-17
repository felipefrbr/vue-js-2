<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-servers></app-servers>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from './components/shared/Header.vue'
    import AppFooter from './components/shared/Footer.vue'
    import AppServers from './components/server/Servers.vue'

    export default{
        components: {
            AppHeader,
            AppFooter,
            AppServers
        }
    }
</script>

<style>

</style>
