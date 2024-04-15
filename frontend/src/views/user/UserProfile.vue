<template>
<div>COUCOU</div>
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store';
const userStore = useUserStore()

userStore.initalizeUser()
</script>