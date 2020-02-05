<template>
	<div class="good-size">
		<div class="size">
			<h4>{{itemParams.rule.key}}</h4>
			<div class="item" 
				v-for="(item, index) in itemParams.rule.tables[0]"
				:key='index'>
				<div class="item-wrapper">
					<span v-for="(item1, index1) in item" :key='index1'>
						{{item1}}
					</span>
				</div>
			</div>
		</div>
		<div class="bar"></div>
		<div class="params">
			<h4>{{itemParams.info.key}}</h4>
			<div class="item"
				v-for="(item, index) in itemParams.info.set"
				:key='index'>
				<div class="item-wrapper">
					<span>
						{{item.key}}
					</span>
					<span>
						{{item.value}}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodSize',
		props: {
			itemParams: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		methods: {

		}
	}
</script>

<style scoped="scoped">
	.good-size {
		padding: 0 5px;
		font-size: 14px;
		color: grey;
	}
	.size {
		padding-top: 15px;
	}
	.item {
		padding: 10px 5px;
		border-bottom: 2px solid rgba(0, 0, 0, .1);
	}
	.item:last-child {
		border-bottom: none;
	}
	.item-wrapper > span:nth-child(2) {
		margin-left: 100px;
	}
	.size .item-wrapper > span {
		width: 14%;
		display: inline-block;
	}
	.bar {
		height: 3px;
		background-color: pink;
	}
	.params .item-wrapper {
		display: table;
		width: 100%;
	}
	.params .item-wrapper > span:first-child {
		display: table-cell;
		vertical-align: middle;
		width: 17%;
		white-space: nowrap;
	}
	.params .item-wrapper > span:last-child {
		color: var(--color-high-text);
		display: inline-block;
		width: 83%;
		margin-left: 0;
		padding-left: 100px;
	}
	.params {
		padding-top: 20px;
	}
</style>
