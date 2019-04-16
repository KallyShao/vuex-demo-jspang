<template>
    <div>
        <v-btn 
            v-for="(btn, idx) in testData"
            :func="btn.type"
            :text="btn.text"
            :key="idx"
            ref="com"
        >
        {{ btn.text }}
            <!-- <h1>{{ idx }}</h1>
            <span>{{ btn.text }}</span> -->
        </v-btn>
    </div>
</template>

<script>
import VBtn from '../components/RenderTest';

export default {
    name: 'Render',
    data() {
        return {
            testData: [
                {
                    type: 'success',
                    text: '成功'
                },
                {
                    type: 'error',
                    text: '错误'
                },
                {
                    type: 'warn',
                    text: '警告'
                },
                {
                    type: 'default',
                    text: '默认'
                }
            ]
        }
    },
    components: {
        VBtn
    },
    mounted() {
        // console.log(this.$children);
        console.log(this.$refs.com);
    }
}
</script>
