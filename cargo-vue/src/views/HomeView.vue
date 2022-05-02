<template>
    <div class="home">
        <Header msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
name: "HomeView",
    components: {
        Header,
    },
};
</script>