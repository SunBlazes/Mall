<template>
	<div class="scroll">
			<swiper :options="swiperOption" ref="mySwiper" v-if="swiperSlides.length>0">
		    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
					<a :href="slide.link">
						<img 
							:src="slide.image" 
							alt="" 
							@load='loadImage' 
							>
					</a>
				</swiper-slide>
		    <div class="swiper-pagination" slot="pagination" />
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
			},
			imageHeight: {
				type: String,
				default() {
					return '195px';
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
				realIndex:0,
				loadOnce: false
			}
		},
		methods: {
			loadImage() {
				this.$nextTick(() => {
					if(!this.loadOnce) {
						this.$bus.$emit('loadScrollImage');
						this.loadOnce++;
					}
				})
			},
		},
		activated() {
			if (this.$refs['mySwiper']) {
				this.$refs['mySwiper'].swiper.slideTo(this.realIndex, 1, false);
			}
		},
		deactivated() {
			if(this.$refs['mySwiper']) {
				this.realIndex = this.$refs['mySwiper'].swiper.realIndex;
			}
		}
	}
</script>

<style scoped="">
	.scroll{
		width: 100%;
	}
	img {
		width: 100%;
	}
</style>
