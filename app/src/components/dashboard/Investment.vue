<template>
    <div>
        <Jumbotron />
        <Investment />
    </div>
</template>

<script>
import Jumbotron from './dashboard/jumbotron.vue'
import Investment from './dashboard/investTable.vue'
export default {
    components: {
        'Jumbotron': Jumbotron,
        'Investment': Investment,
    }
}
</script>

<style lang="scss" scoped>

</style>