<template>
	<div class="details-base-info">
		<div class="title">
			<p>{{ good.title }}</p>
		</div>
		<div class="price">
			<span style="color: var(--color-high-text);font-size: 30px;">
				{{good.newPrice}}
			</span>
			<span 
				style="color: gray;text-decoration: line-through;vertical-align: 2px">
				{{good.oldPrice}}
			</span>
			<span 
				:style='{ background: good.discountColor }'
				class="discount">
				{{good.discount}}
			</span>
		</div>
		<div class="columns">
			<div>
				<span>{{good.columns[0]}}</span>
			</div>
			<div>
				<span>{{good.columns[1]}}</span>
			</div>
			<div>
				<span>默认发货</span>
			</div>
		</div>
		<div class="services" style="color: black;">
			<div v-for="(item, index) in good.services.services" :keys="index">
				<img :src="item.icon" alt="" style="width: 12px;height: 12px;">
				<span>{{item.name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailsBaseInfo',
		props: {
			good: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		data() {
			return {}
		}
	}
</script>

<style scoped="scoped">
	.title {
		margin-top: 20px;
		font-size: 19px;
	}
	.title > p {
		font-weight: 500;
	}
	.discount {
		display: inline-block;
		padding: 5px;
		border-radius: 10px 10px;
		overflow: hidden;
		color: white;
		font-weight: 400;
	}
	.price {
		margin-top: 15px;
	}
	.columns,
	.services{
		margin-top: 15px;
		display: flex;
		text-align: center;
		justify-content: space-between;
		color: gray;
		padding-bottom: 10px;
		border-bottom: 2px solid rgba(0, 0, 0, .1);
	}
	.services {
		margin-top: 20px;
		padding-bottom: 20px;
		border: none;
	}
	.details-base-info {
		padding: 0 5px
	}
</style>
