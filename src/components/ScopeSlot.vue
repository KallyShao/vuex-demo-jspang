<template>
    <div>
        <slot :data="data">
            <h2>xxx</h2>
            <mark>hahahhd</mark>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'ScopeSlot',
    data () {
        return {
            data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
        };
    }
}
</script>