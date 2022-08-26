<template>
	<view>
		<!-- swiper -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="item in swiperList" :key="item.goods_id">
				<view class="swiper-item">
					<image :src="item.image_src"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [],
			};
		},
		onLoad() {
			this.getSwiperList()
		},
		methods: {
			async getSwiperList() {
				const {
					data: res
				} = await uni.$http.get("home/swiperdata")
				if (res.meta.status !== 200) {
					uni.showToast({
						title: '数据请求失败',
						duration: 5000,
						icon: 'error'
					});

				} else {
					this.swiperList = res.message
				}
				console.log(res);
			}

		}
	}
</script>

<style lang="scss">
	swiper {
		height: 340rpx;

		.swiper-item,
		image {
			width: 100%;
			height: 100%;

		}
	}
</style>
