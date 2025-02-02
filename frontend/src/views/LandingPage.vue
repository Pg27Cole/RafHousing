<template>
    <div class="landing-page">
        <h1>Welcome to Raf Housing, where we house them rafs</h1>
        <p>This is the landing page.</p>
        <leaderboard-summary/>    
    </div>

    <div>
        <task-list/>
    </div>

    <div>
        <parent-component/>
    </div>
</template>

<script>
    import LeaderboardSummary from '../components/LeaderboardSummary.vue';
    
    export default {
        name: 'LandingPage',
        components: {
            LeaderboardSummary,
        }
    }
</script>

<style scoped>
    .landing-page {
        text-align: center;
        margin-top: 20px;
        border: 5px solid black;
        border-radius: 8px;

    }
</style>