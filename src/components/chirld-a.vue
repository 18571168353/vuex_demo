<template>
	<div>
		<button @click="test">+1(原始方式调用)</button>
		<button @click="addCount(100)">+100(辅助函数调用)</button>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
	name: '',
	components: {},
	props: {},
	data() {
		return {}
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {
		test() {
			this.$store.commit('addCount', 1)
		},
		...mapMutations(['addCount'])
	}
}
</script>

<style lang="less" scoped></style>
