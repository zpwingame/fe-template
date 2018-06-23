<template>
    <div class="cont">
        <div>fruits in vue store</div>
        <div v-for='item in fruits'>
            {{
                item.name
            }}
        </div>
        <input type="button" class='add' value="button" @click='addNumberTen()'>
        {{ count }}
    </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import axios from '../util/axios.js'


const { mapState, mapMutations } = createNamespacedHelpers('moduleA')

export default {
    data() {
        return {
        }
    },
    computed: mapState({
        count: state => state.count,
        fruits: state => state.fruits
    }),
    methods: {
        ...mapMutations({
            increment: 'increment'
        }),
        addNumberTen() {
            this.increment({ amount: 10 })
        }
    },
    mounted() {
        fetch('/api/user')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        });

        axios.get('/api/user')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });


        console.log(this.$store.state)
    }
}
</script>
<style lang='scss'>
.cont {
    margin: 10px;
    transform: translateX(20px)
}
.add {
  height: 40px;
  background: #00ae66;
  color: #fff;
  padding: 5px;
}
</style>


