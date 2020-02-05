<template>
	<div :class='{"tab-control": true, tabTop: isReach}'>
		<div 
			v-for="(item, index) in tabNames" 
			:key='index' 
			class="tab-control-item" 
			@click="clickChange(index)"
			ref='tab'>
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
		mounted() {
			this.$bus.$on('changeTabStyle', () => {
				if(!this.isReach) {
					this.isReach = !this.isReach;
				}
			})
		},
		data() {
			return {
				seleIndex: 0,
				isReach: false
			}
		},
		methods: {
			clickChange(index) {
				this.seleIndex = index;
				this.$emit("tagClick", this.seleIndex);
			}
		},
	}
</script>

<style scoped="">
	.tab-control {
		display: flex;
		text-align: center;
		line-height: 1.5;
		width: 100%;
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
	.tabTop {
		position: sticky;
		top: 44px;
		z-index: 999;
		line-height: 2;
	}
</style>
