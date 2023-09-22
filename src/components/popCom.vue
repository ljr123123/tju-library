<template>
    <Transition>
        <div class="pop" v-if="is_pop">

        </div>
    </Transition>
</template>
<script setup>
import { ref } from "vue"

const is_pop = ref(false);
</script>