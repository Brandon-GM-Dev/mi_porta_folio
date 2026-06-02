import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useUiStore = defineStore('ui', () => {
    const isDark = ref(localStorage.getItem('theme') === 'dark');

    // Aplica la clase y persiste cada vez que cambia
    watch(isDark, (val) => {
        document.documentElement.classList.toggle('dark', val)
        localStorage.setItem('theme', val ? 'dark' : 'light')
    }, { immediate: true });

    function toggleTheme() {
        isDark.value = !isDark.value
    };

    return { isDark, toggleTheme };
});