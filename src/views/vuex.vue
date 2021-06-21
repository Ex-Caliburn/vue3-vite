<template>
  <div>
    <h1>{{ msg }}</h1>
    Clicked: {{ count }} times

    <el-button @click="increment">+ </el-button>

    <el-button @click="decrement">-</el-button>
    <el-button @click="asyncIncrement">Increment async</el-button>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const store = useStore()
    // 在 computed 函数中访问 state
    const count = computed(() => store.state.app.count)
    // 在 computed 函数中访问 getter
    const double = computed(() => store.getters.app.double)
    // 使用 mutation
    const increment = () => store.commit('app/increment')
    const decrement = () => store.dispatch('app/decrement')
    // 使用 action
    const asyncIncrement = () => store.dispatch('app/increment')
    return {
      count,
      double,
      increment,
      decrement,
      asyncIncrement
    }
  },
  methods: {}
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
