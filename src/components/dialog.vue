<template>
  <el-dialog :visible.sync="show"></el-dialog>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed:{
    ...mapState({
      show:state => state.show
    })
  },

}
</script>