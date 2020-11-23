<template>
    <div>
      <jumbotron />
        <userstat />
        <investTable />
    </div>
</template>

<script>
import Jumbotron from './dashboard/jumbotron.vue'
import UserStat from './dashboard/userStat.vue'
import InvestTable from './dashboard/investTable.vue'
export default {
    components: {
      'jumbotron': Jumbotron,
      'userstat': UserStat,
      'investTable': InvestTable,
    }
}
</script>