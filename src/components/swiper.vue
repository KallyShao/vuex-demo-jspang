<template>
  <div>
    <x-button type="primary">新增</x-button>
    <scope-slot>
      <div slot-scope="user">
        <h1 v-for="(item, index) in user.data" :key="index">{{ item }}</h1>
      </div>
    </scope-slot>
  </div>
</template>

<script>
import dialog from './dialog.vue'
import { XButton, XTable } from 'vux';
import ScopeSlot from '@/components/ScopeSlot';

export default {
    components: {
        XButton,
        XTable,
        ScopeSlot
        // 'v-pagination': pagination
    },
 data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
}
</script>