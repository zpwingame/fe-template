<template>
    <div class="cont">
        <div>fruits in vue store</div>
        <div v-for='item in fruits'>
            {{
                item.name
            }}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fruits: this.$store.state.moduleA.fruits
        }
    },
    mounted() {
        console.log(this.$store.state)
    }
}
</script>

