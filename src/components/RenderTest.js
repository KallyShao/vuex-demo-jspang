export default {
    render(h) {
        return h('div', {
            'class': {
                btn: true,
                success: this.func === 'success',
                error: this.func === 'error',
                warn: this.func === 'warn',
                default: this.func === 'default' || ''
            },
            domProps: {
                innerHTML: this.$slots.default[0].text
            },
            on: {
                click: this.clickHandle
            }
        })
    },
    methods: {
        clickHandle() {
            console.log(this.$slots);
        }
    },
    props: {
        func: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: 'default btn'
        }
    }
};