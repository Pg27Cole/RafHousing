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
                requried: false
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
    <td id="user" @click="goToUser">{{ this.playerNameProp }}</td>
    <td id="score">{{ this.playerScoreProp }}</td>
</template>

<style scoped>

td {
    font-size: 1vw;
    transition: all 0.05s ease-in-out;
}

#user {
    width: 10vw;
    height: 2vw;
    margin: 0px;
    padding: 0px;
}

#user:hover {
    color: blue;
    cursor: pointer;
}

#score {
    width: 10vw;
    border-left: 1px solid white;
    color: rgb(77, 131, 77);
    padding: 2vw;
}

</style>