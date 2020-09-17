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
    import AppHeader from './Header.vue'
    import AppFooter from './Footer.vue'
    import AppServers from './Servers.vue'

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
