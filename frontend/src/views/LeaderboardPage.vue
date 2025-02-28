<script setup>
    import { useLeaderboardStore } from '../stores/LeaderboardStore';
    import LeaderboardData from '../components/LeaderboardData.vue';
    import { onMounted } from 'vue';

    const leaderboardStore = useLeaderboardStore();

    onMounted((() =>{
        leaderboardStore.leaderboardData = leaderboardStore.fetchLeaderboard(10);
    }))
</script>

<template>
    <div>
        <h1>Leaderboard:</h1>
        <table>
            <tbody>
                <tr v-for="(item, index) in leaderboardStore.leaderboardData" :key="index">
                    <leaderboard-data :playerNameProp="item.player_name", :playerScoreProp="item.score"/>
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
    flex-flow: column;
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
