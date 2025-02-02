<script>
    export default {
        name: 'LeaderboardData',
        props: {
            playerNameProp: {
                type: String,
                requried: true
            },
            playerScoreProp: {
                type: Number,
                requried: true
            }
        },
        mounted() {
        },
        methods: {
            goToUser() {
                this.$router.push(`/user/${this.playerNameProp}`)
            }
        }
    }
</script>

<template>
    <td id="user" @click="goToUser" @mouseover="showNavigation">{{ this.playerNameProp }}</td>
    <td id="score">{{ this.playerScoreProp }}</td>
</template>

<style scoped>

td {
    transition: all 0.05s ease-in-out;
    margin: 20px;
    padding: 20px;
}

#user:hover {
    color: blue;
    transform: scale(1.25);
}

#score {
    border-left: 1px solid white;
    color: lightblue;
}

</style>