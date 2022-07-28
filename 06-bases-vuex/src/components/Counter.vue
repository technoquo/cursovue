<template>
   <h1>Counter - Vue</h1>
   <h2>Direct access {{ $store.state.counter.count }}</h2>
   <h2>Computed: {{ countComputed }}</h2>

   <button @click="increment">+1</button>
   <button  @click="incrementBy">+5</button>
   <button @click="randomInt" :disabled="isLoading">Random</button>


   <h2>MapState</h2>
   <h2>mapState: {{ count }}</h2>
   <h2>LastMutation: {{ xmen }}</h2>

    <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
  
</template>

<script>

import { mapState, mapActions } from "vuex"


export default {

     
      computed: {
          countComputed(){
              return this.$store.state.counter.count
          },
          ...mapState('counter',['count', 'xmen', 'isLoading'])
        //   ...mapState({
        //       count: state => state.count,
        //       xmen:  state => state.xmen
        //   })
      },
      methods: {
          increment() {
              this.$store.commit('counter/increment')
          },
          incrementBy() {
              this.$store.commit('counter/incrementBy', 5)
          },
        // ...mapActions('counter', ['incrementRandomInt'])
         ...mapActions('counter', {
             randomInt: 'incrementRandomInt'
         })
      }
}
</script>
