<template>
	<div class="details-shop-info">
		<div class="header">
			<div class="logo">
				<img :src="services.shopLogo" alt="">
			</div>
			<div class="shop-name">
				<span>{{services.name}}</span>
			</div>
		</div>
		<div class="shop-info">
			<div class="info-left">
				<div>
					<p>{{allTurnover}}</p>
					<p>总销量</p>
				</div>
				<div>
					<p>{{services.cGoods}}</p>
					<p>全部宝贝</p>
				</div>
			</div>
			<div class="info-right">
				<div class="right-wrapper">
					<p v-for="(item, index) in services.score" :key="index">
						{{item.name}} {{item.score}}
						<span style="color: green" v-show="item.isBetter">High</span>
						<span style="color: red" v-show="!item.isBetter">Low</span>
					</p>
				</div>
			</div>
		</div>
		<div class="info-btn">
			<span>进店逛逛</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailsShopInfo',
		props: {
			services: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			discern(count) {
				switch(count) {
					case 2: return '千';
					case 3: return '万';
					case 4: return '十万';
					case 5: return '千万';
				}
			}
		},
		computed: {
			allTurnover() {
				let total = this.services.cSells;
				let copy = total;
				let score = -1;
				while(copy / 10 > 1) {
					score++;
					copy = copy / 10;
				}
				return (total / Math.pow(10, score+1)).toFixed(1) +
					this.discern(score);
			}
		}
	}
</script>

<style scoped="scoped">
	.logo {
		height: 50px;
		overflow: hidden;
		border-radius: 100%;
		border: 1px solid rgba(0, 0, 0, .1);
		display: inline-block;
		margin-right: 7px;
	}
	.logo img {
		height: 100%;
	}
	.header {
		margin: 10px 0;
		display: table;
	}
	.shop-name {
		display: table-cell;
		vertical-align: middle;
		font-size: 18px;
	}
	.details-shop-info {
		padding: 0 5px;
	}
	.shop-info div:not(.right-wrapper) {
		width: 50%;
		display: inline-block;
		text-align: center;
	}
	.shop-info p {
		line-height: 1.5;
	}
	.shop-info >div:first-of-type p:first-of-type {
		font-size: 18px;
	}
	.shop-info > div:first-of-type {
		border-right: 1px solid rgba(0, 0, 0, .1);
	}
	.right-wrapper {
		transform: translateY(10px);
	}
	.info-btn{
		text-align: center;
		margin-top: 25px;
		color: rgba(0, 0, 0, .5);
	}
	.info-btn > span {
		padding: 5px 30px;
		display: inline-block;
		background-color: rgba(0, 0, 0, .1);
		border-radius: 25px;
	}
	.details-shop-info {
		padding-bottom: 20px;
	}
</style>
