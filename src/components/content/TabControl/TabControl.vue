<template>
	<div class="tab-control">
		<div v-for="(item, index) in tabNames" 
		:key='index' class="tab-control-item" @click="clickChange(index)">
			<!-- <span v-if='index==seleIndex' :key='index' class='sele'>{{item}}</span>
			<span v-else>{{item}}</span> -->
			<span :class="{sele: index === seleIndex}">{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabControl',
		props: {
			tabNames: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		data() {
			return {
				seleIndex: 0,
			}
		},
		methods: {
			clickChange(index) {
				this.seleIndex = index;
			}
		}
	}
</script>

<style scoped="">
	.tab-control {
		display: flex;
		text-align: center;
		line-height: 1.5;
		position: sticky;
		top: 50px;
		background-color: #fff;
	}
	.tab-control-item {
		flex: 1;
	}
	.tab-control-item span {
		padding: 0 4px;
		display: inline-block;
		padding-bottom: 2px;
	}
	.tab-control-item .sele {
		border-bottom: 3px solid var(--color-high-text);
		color: var(--color-high-text);
	}
</style>
