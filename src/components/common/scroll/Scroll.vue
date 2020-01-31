<template>
	<div class="scroll">
			<swiper :options="swiperOption" ref="mySwiper" v-if="swiperSlides.length>0">
		    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
					<a :href="slide.link"><img :src="slide.image" alt=""></a>
				</swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		  </swiper>
	</div>
</template>

<script>
	import 'swiper/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	
	export default {
		name: 'Scroll',
		components: {
			swiper,
			swiperSlide
		},
		props: {
			swiperSlides: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		data() {
			return {
				swiperOption: {
					direction: 'horizontal',
					loop: true,
					touchRatio: 0.5,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false
					},
					effect: 'slide',
					speed: 500,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					observer: true,
				},
				reRender: false,
				realIndex:0
			}
		},
		activated() {
			if (this.$refs['mySwiper']) {
				this.$refs['mySwiper'].swiper.slideTo(this.realIndex, 1, false);
			}
		},
		deactivated() {
			this.realIndex = this.$refs['mySwiper'].swiper.realIndex;
		}
	}
</script>

<style scoped="">
	.scroll{
		width: 100%;
		margin-top: 44px;
	}
	img {
		width: 100%;
	}
</style>
