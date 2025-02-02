<script>
import InputComponent from '../components/InputComponent.vue'
export default {
    components: {
        InputComponent
    },
    data() {
        return {
            Feedback: '',
            Error: ''
        }
    },
    methods: {
        async sendToServer() {
            try {
                // using this to define the what the request is.
                const request = {
                    method: "PUT",
                    headers: {"content-Type": "application/json"},
                    body: JSON.stringify(this.feedback)
                }
                const res = await fetch('/api/user-feedback', request);
                if(!res.ok) throw new Error(`server returned stats ${res.status}`);
                const data = await res.json();
            } 
            catch (err) {
                this.errorMessage = err.message;
            }
        }
    }
}

</script>

<template>
    <div>
        <h1>Contact:</h1>
        <h3>Feedback:</h3>
        <input-component @sendToServer="sendToServer"/>
        <p>{{ errorMessage }}</p>
    </div>
</template>

<style scoped>

</style>