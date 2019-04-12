<template>
  <div>
    <x-button type="primary">新增</x-button>
    <!-- <scope-slot>
      <div slot-scope="user">
        <h1 v-for="(item, index) in user.data" :key="index">{{ item }}</h1>
      </div>
    </scope-slot> -->
    <anchor-heading :level="2">
      <a href="#hello-wrold">Hello world!</a>
    </anchor-heading>
  </div>
</template>

<script>
import dialog from './dialog.vue'
import { XButton, XTable } from 'vux';
// import ScopeSlot from '@/components/ScopeSlot';
import AnchorHeading from './anchor';

export default {
    components: {
        XButton,
        XTable,
        // ScopeSlot,
        AnchorHeading
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