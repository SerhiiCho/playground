import Vue from 'vue'
const Vue

var vm = new Vue({
})

Vue.component('hello-world', {
    props: ['size', 'myMessage'], // simple syntax
    compiled: function () {
        console.log(this.size)    // -> 100
        console.log(this.myMessage) // -> 'hello!'
    }
})