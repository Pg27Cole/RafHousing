<script setup>
    import {ref, onMounted, computed} from 'vue'
    import LeaderboardData from '../components/LeaderboardData.vue';
    import { useLeaderboardStore } from '../stores/LeaderboardStore';   

    const LeaderboardStore = useLeaderboardStore();

    onMounted(()=>{
        LeaderboardStore.leaderboardData = LeaderboardStore.fetchLeaderboard(5);
    });
    
</script>

<template>
    <div class="landing-page">
        <h1>Welcome to Raf Housing, where we house them rafs</h1>
        <p>This is the landing page.</p>
        
        <div class="leaderboard-summary">
        <h2>Leaderboard Summary</h2>
        <table>
            <thead>
                <tr>
                    <th>Player</th> <th id="score">Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in LeaderboardStore.leaderboardData" :key = "index">
                    <Leaderboard-data :playerNameProp="item.player_name", :playerScoreProp="item.score" />
                </tr>
            </tbody>


        </table>
    </div>

    </div>

    <div>
        <task-list/>
    </div>

    <div>
        <parent-component/>
    </div>
</template>

<style scoped>
    .landing-page {
        text-align: center;
        margin-top: 20px;
        border: 5px solid black;
        border-radius: 8px;

    }

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