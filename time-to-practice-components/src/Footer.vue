<template>
    <div class="row">
        <div class="col-xs-12">
            <footer>
                <p>{{ footerMsg }}</p>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            footerMsg: 'All Servers are managed here'
        }
    }
}
</script>
