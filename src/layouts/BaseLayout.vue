<script setup>
    import { RouterView } from "vue-router";
    import BaseNavbar from '@components/layouts/BaseNavbar.vue';
    import BaseFooter from '@components/layouts/BaseFooter.vue';

</script>

<template>
    <div class="flex min-h-screen bg-gray-100">
        <div class="flex flex-col flex-1 min-w-0">
            <BaseNavbar/>
            <main>
                <div class="flex-1">
                    <RouterView/>
                </div>

            </main>
            <BaseFooter/>
        </div>
    </div>
</template>