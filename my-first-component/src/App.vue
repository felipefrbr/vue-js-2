<template>
    <div>
        <h1> {{ msg }} </h1>
        <my-component></my-component>
        <hr/>
        <my-component></my-component>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                msg: 'Hello!'
            }
        }
    }
</script>