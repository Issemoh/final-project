<template>
    <div class="header">
    <div class="jumbotron">
        <h1 class="display-4" id="title">Welcome to App client Schedule</h1>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
.jumbotron {
    background-image: url('../assets/Itech_header.jpeg');
    background-position: center;
    background-size: cover;
}
#title {
    font-weight: 500;
    color: antiquewhite;
}
</style>