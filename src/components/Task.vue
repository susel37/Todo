<template>
    <div>
        <div class="task">
            <div class="left" :style="t.checked ? 'text-decoration: line-through': ''">
                {{ t.text }}
            </div>
            <div class="right">
                <button class="button" style="background-color: #16a703;" @click="check"><i class="fa fa-check"></i></button>
                <button class="button" style="background-color: #d21919;" @click="del"><i class="fa fa-times"></i></button>
                <button class="button" style="background-color: #505050;" @click="pop = !pop"><i class="fa fa-plus"></i></button>
            </div>
        </div>
        
        <transition name="dropdown">
            <div class="detail" v-if="pop">
                <textarea type="text" placeholder="세부사항을 입력해주세요" 
                maxlength="250"
                style="width:300px; height:100px; resize:none;" 
                v-model="text"></textarea>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        t: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            pop: false,
            text: "",
            checked: false,
        }
    },
    methods: {
        check() {
            this.checked = !this.checked
            this.$store.commit("Check", {id: this.t.id, checked: this.checked})
        },
        del() {
            this.$store.commit("Delete", this.t.id)
        }
    }
}
</script>

<style>
.left {
    float: left;
    width: 70%;
    text-align: left;
    padding: 5px 15px;
}
.right {
    float: right;
    width: 30%;
    text-align: center;
    padding: 5px
}
.task {
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: #FFFFFF;
    position: relative;
    margin: 5px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;

    display: flex;
    align-items: center;

    width: 100%;
    max-width: 400px;
    height: 100%;
    min-height: 60px;
    border-radius: 20px;
}

.button {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;

    display: inline-block;
    padding: 5px 5px;
    margin: 3px;
    border-radius: 100px;

    color: #FFFFFF;
    transition: 0.1s ease-out;
}

.button:hover {
   padding: 10px 10px;
}

.detail {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    
    padding: 5px;
    width: 100%;
    max-width: 400px;
    background-color: #FFFFFF;
    border-radius: 10px;
}

.dropdown-enter-active, .dropdown-leave-active {
    transition: transform 0.5s, opacity 0.5s ;
}

.dropdown-enter, .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-20%) translateX(-50%);
}




</style>