<script>
import { ref } from 'vue';
import { useUserStore } from '../stores/UserStore.js'
import InputComponent from '../components/InputComponent.vue'


export default {
    components: {
        InputComponent
    },
    data() {
        return {
            Feedback: '',
            Error: '',
            userStore: useUserStore(),
            email: ref('')
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
        },
        async handleLogin() {
            try {
                await this.userStore.login(this.email);
            } catch(error) {
                alert(error.message);
            }
        },
        logout() {
            this.userStore.logout();
        },
    }
}

</script>

<template>
    <div>
        <div v-if="!userStore.user">
            <h1>
                Login:
            </h1>
            <input v-model="email"
                    type="email"
                    placeholder="Enter your Email"
            />
            <button @click="handleLogin">Login</button>
        </div>
        <div v-else>
            <h1>Welcome, {{ userStore.user.username }}</h1>
            <p>Email: {{ userStore.user.email }}</p>
            <div>
                <h1>Contact:</h1>
                <h3>Feedback:</h3>
                <input-component @sendToServer="sendToServer"/>
                <p>{{ errorMessage }}</p>
            </div>
            <button @click="logout">Logout</button>
        </div>
    </div>
</template>

<style scoped>

</style>