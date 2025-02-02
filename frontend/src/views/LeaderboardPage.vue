<script>
    import LeaderboardData from '../components/LeaderboardData.vue';
    export default {
        name: 'LeaderboardPage',
        components: {
            LeaderboardData
        },
        data() {
            return {

                leaderboardData: [],
                errorMessage: ''
            }
        },
        mounted() {
            this.fetchLeaderboardData()
        },
        methods: {
            async fetchLeaderboardData() {
                try {
                    const res = await fetch('/api/leaderboard-summary');
                    if(!res.ok) throw new Error(`server returned stats ${res.status}`);
                    const data = await res.json();
                    this.leaderboardData = data;
                } catch (err) {
                    this.errorMessage = err.message;
                }
            }
        }
    }
</script>

<template>
    <div>
        <h1>Leaderboard:</h1>
        <table>
            <tbody>
                <tr v-for="(item, index) in leaderboardData" :key="index">
                    <leaderboard-data :playerNameProp="item.player", :playerScoreProp="item.score"/>
                </tr>
            </tbody>
        </table>
    </div>
    <p></p>
</template>

<style scoped>

* {
    
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

h1 {
    color: whitesmoke;
}

table {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
}

tbody {
    display: flex;
    width: 650px;
    flex-flow: wrap;
    justify-content: center;
}

tr {
    border: 1px solid white;
    font-size: large;
    transition: all 0.25s ease-in-out;
    margin: 3px;
    color: grey;
}

tr:hover {
    color: white;
    scale: 1.2;
    background-color: black;
}

</style>
