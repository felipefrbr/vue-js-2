<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <button @click="resetUserName">Reset from Custom Event</button>
        <button @click="resetUserNameFn">Reset from Parent Method</button>
    </div>
</template>

<script>
    export default{
        props: {
            name: {
                type: String,
                required: true
            },
            resetUserNameFn: Function
        },
        methods: {
            resetUserName(){
                this.name = 'Max'
                this.$emit('userNameReseted', this.name)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
