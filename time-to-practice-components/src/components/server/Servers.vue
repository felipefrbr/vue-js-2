<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <li
                        class="list-group-item"
                        v-for="index in 5">
                    Server #{{ index }}
                </li>
            </ul>
        </div>
        <app-server-details></app-server-details>
    </div>
</template>

<script>
    import AppServerDetails from './ServerDetails.vue'

    export default {
        components: {
            AppServerDetails
        }
    }
</script>

<style scoped>
    div{
        border: 1px solid red;
    }
</style>