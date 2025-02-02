<script>
export default {
    mounted() {
        this.initInputComponent();
    },
    props: {
        CallBack: {
            type: String,
            required: true,
        }
    },
    methods: {
        initInputComponent() {
            const form = document.querySelector("#form");
            form.addEventListener('click', (event)=>{
                event.preventDefault();
            });
        },
        sendToServer() {
            const input = document.querySelector("#Feedback");
            this.$emit('sendToServer', input.textContent)
        }
    }
}
</script>

<template>
    <form id="form">
        <span contenteditable="true" id="Feedback">Input Text Here...</span>
        <button @click="sendToServer">Submit</button>
    </form>
</template>

<style scoped>
    button {
        font-size: small;
        padding: 4px;
    }

    form {
        display: flex;
        justify-content: center;
    }

    Span {
        background-color: #151515;
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        width: 520px;
        border: 1px solid white;
        text-align: left;
    }
</style>