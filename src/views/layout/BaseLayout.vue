<template>
	<div class="BaseLayout-container">
		<WebHeader></WebHeader>
		<div class="main-container">
			<slot>1111</slot>
			<!--回到顶部 start-->
			<div class="home-to-top" @click="scrollTop">
				返回<br />顶部
			</div>
			<!--回到顶部 end-->
		</div>
		<WebFooter></WebFooter>
	</div>
</template>

<script>
	import WebHeader from "./WebHeader.vue";
	import WebFooter from "./WebFooter.vue";
	export default {
		name: 'BaseLayout',
		props: {},
		mixins: [],
		components: {
			WebHeader,
			WebFooter
		},
		data() {
			return {};
		},
		computed: {},
		created() {},
		mounted() {},
		methods: {
			scrollTop() {
				$('body,html').animate({
					scrollTop: 0
				}, 50);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.BaseLayout-container {
		min-height: 100%;
		display: flex;
		flex-direction: column;

		.main-container {
			background-color: #f4f5f5;
			flex: 1;

			.home-to-top {
				position: fixed;
				width: 45px;
				height: 45px;
				font-size: 14px;
				background-color: #409eff;
				color: white;
				font-weight: bold;
				right: 50px;
				bottom: 50px;
				padding-top: 5px;
				text-align: center;
				box-shadow: 0 0 10px rgba(0, 0, 0, .3);
				cursor: pointer;
				user-select: none;
			}
		}
	}
</style>
