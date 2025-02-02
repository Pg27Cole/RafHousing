
<script>
    import LeaderboardData from './LeaderboardData.vue'

    export default {
        name: 'LeaderboardSummary',
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
                    if(!res.ok) throw new Error(`server returned status ${res.status}`);
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
    <div class="leaderboard-summary">
        <h2>Leaderboard Summary</h2>
        <table>
            <thead>
                <tr>
                    <th>Player</th> <th id="score">Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in leaderboardData.slice(0,3)" :key="index">
                    <leaderboard-data :playerNameProp="item.player", :playerScoreProp="item.score" />
                </tr>
            </tbody>


        </table>
        <p v-if="errorMessage" class ="error">{{ errorMessage }}</p>
    </div>
</template>

<style scoped>
    .leaderboard-summary {
        margin: 20px;
    }

    table {
        margin: 0 auto;
        border-collapse: collapse;
    }

    #score {
        border-left: 1px solid white;
    }

    tr, td {
        border: 2px solid white;
        padding: 5px;
    }

    .error {
        color:red;
    }
</style>