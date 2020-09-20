<template>
  <div>
      <Task v-for="task in tasks" :key="task.id" :t="task"/>
  </div>
</template>

<script>
import Task from '@/components/Task.vue'

export default {
    components: {
        Task,
    },
    computed: {
        tasks() {
            return this.$store.state.tasks
        }
    }
}
</script>

<style>

</style>