import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    decreaseCounter(state) {
      state.counter--;
    },
    increaseCounter(state) {
      state.counter++;
    },
    decreaseCounterWithRandomNumber(state, randomNumber) {
      state.counter -= randomNumber;
    },
    increaseCounterWithRandomNumber(state, randomNumber) {
      state.counter += randomNumber;
    }
  },
  actions: {
    decreaseCounter({commit}) {
      //Promise-style
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
          .then(response => {
            console.log(response);
            commit('decreaseCounterWithRandomNumber', response.data);
          })
    },
    async increaseCounter({commit}) {
      //async-await style
      let response = await axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');
      console.log(response.data);
      commit('increaseCounterWithRandomNumber', response.data);
    }
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    }
  },
  modules: {
  }
})
