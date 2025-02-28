// a store is a centralized point of data, we call the backend from here and cache it for the views to use
import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: ()=> ({
      user: null  
    }),
    actions: {
        async login(email) {
            try {
                const response = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({email})
                })

                if(!response.ok) {
                    const error = await response.json();
                    throw new Error(error.error || 'Login Failed');
                }

                this.user = await response.json();

            } catch (error) {
                console.error('Login error:', error.message)
                throw error;
            }
        },

        logout() {
            this.user = null;
        }
    }
})