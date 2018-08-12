<template>
	<div class="cont">
		<header>
			<ul>
				<li>诗歌</li>
				<li>散文</li>
				<li>书法</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</header>

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
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});

		axios.post('/api/login/account', {
			password: '888888',
			username: 'admin'
		})
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
		console.log(this.$store.state)
	}
}
</script>
<style lang='scss'>
* {
	margin: 0;
	padding: 0;
}
body {
	background:green;
	color:white;

}
header {
	padding:10px;
	margin: 0 auto;
	background: black;
	width: 100%;
	box-sizing:border-box;
	ul {
		width: 1200px;
		list-style:none;
		display:flex;
		algin-items:center;
		justfy-content:center;
		background: black;
		li {
			margin-right:10px;
		}
	}
}
.cont {
}
.add {
	height: 40px;
	background: #00ae66;
	color: #fff;
	padding: 5px;
}
</style>


