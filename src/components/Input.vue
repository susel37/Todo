<template>
  <div>
      <span class="title"><b><i>Your Todo List</i></b> </span>
      <br>
      <input type="text" v-model="init" placeholder="할 일을 입력해주세요">
      <button class="btn" @click="addTask">ADD</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            init: "",
        }
    },
    methods: {
        addTask() {
            console.log(this.init)
            this.$store.commit("Add", this.init)
            this.init = ""
        }
    }
}
</script>

<style>
.title {
    color: #FFFFFF;
    font-size: 40px;
}
.btn {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;

    display: inline-block;
    padding: 5px 8px;
    margin: 3px;
    background-color: #ce0340;
    border-radius: 10px;

    color: #FFFFFF;
    transition: 0.1s ease-out;
}

.btn:hover {
   background-color: #ff5688;
}

.btn:active {
   background-color: #7c1a37;
}
</style>