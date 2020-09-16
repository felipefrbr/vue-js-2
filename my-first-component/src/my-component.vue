<template>
    <div>
      Status: {{ status }} | <button @click="changeStatus()" >change</button> 
    </div>
</template>

<script>
export default {
    data: function(){
        return {
        status: 'Critical'
        }
    },
    methods: {
        changeStatus: function(){
        this.status = this.status === 'Normal' ? 'Critical' : 'Normal'
        }
    }
}
</script>

<style>

</style>