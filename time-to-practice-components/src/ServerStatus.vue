<template>
    <div @click="showDetails">
        Server: {{ name }}
    </div>
</template>

<script>
export default {
    props: {
        name: String
    },
    data(){
        return {
            
        }
    },
    methods: {
        showDetails(){
            alert('oi: '+ this.name)
            return;
        }
    }
}
</script>

<style>

</style>