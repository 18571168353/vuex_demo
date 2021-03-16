<template>
	<div id="app">
		<div>原始状态获取state的值:{{ $store.state.count }}</div>
		<div>计算属性状态:{{ count }}</div>
		<div>计算属性状态:{{ count }}</div>
		<div>辅助函数:{{ count }}</div>
		<chirlda/>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import chirlda from './components/chirld-a'
export default {
	name: 'App',
	components: {chirlda},
	computed: {
		// count() {
		// 	return this.$store.state.count
		// }
		...mapState(['count'])
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
