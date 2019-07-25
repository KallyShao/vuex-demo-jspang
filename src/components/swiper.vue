<template>
  <div>
    <x-button type="primary">新增</x-button>
    <!-- <scope-slot>
      <div slot-scope="user">
        <h1 v-for="(item, index) in user.data" :key="index">{{ item }}</h1>
      </div>
    </scope-slot> -->
  </div>
</template>

<script>
import dialog from './dialog.vue'
import { XButton, XTable } from 'vux';
// import ScopeSlot from '@/components/ScopeSlot';

export default {
    components: {
        XButton,
        XTable,
        // ScopeSlot,
    },
 data() {
      return {
      };
    },
    render(createElement) {
      this.arr = Array.apply(null, {length: 10}).map(() => {
        return createElement('h2', 'hello evrery one');
      })
    },
    mounted() {
      console.log(this.arr);
    }
}
</script>