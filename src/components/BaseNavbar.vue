<script setup>
import { ref } from 'vue';
import { useUiStore } from '@/stores/uiStore';

const ui = useUiStore();
const menuOpen = ref(false);

const navLinks = ref([
    { label: 'Inicio', href: '#', active: true },
    { label: 'Proyectos', href: '#', active: false },
    { label: 'Sobre Mí', href: '#', active: false },
    { label: 'Cursos', href: '#', active: false },
    { label: 'Contacto', href: '#', active: false },
]);
</script>

<template>
    <nav class="w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 px-4 py-4 flex items-center justify-between shadow-md relative transition-colors duration-300">
        
        <!-- Icono y Nombre -->
        <div class="flex items-center gap-2">
            <div class="flex items-center justify-center">
                <font-awesome-icon icon="fa-solid fa-microchip" class="text-2xl text-gray-800 dark:text-white" />
            </div>
            <span class="hidden lg:inline text-md font-bold text-gray-900 dark:text-white tracking-tight">Brandon González Martínez</span>
            <span class="lg:hidden text-md font-bold text-gray-900 dark:text-white tracking-tight">Brandon González Mtz</span>
        </div>

        <!-- Links de navegacion (version de escritorio) -->
        <ul class="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <li v-for="link in navLinks" :key="link.label">
                <a :href="link.href"
                    class="text-md font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 relative group"
                    :class="{ 'text-gray-900 dark:text-white': link.active }">
                    {{ link.label }}
                    <span
                        class="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all duration-200 group-hover:w-full"
                        :class="{ 'w-full': link.active }"></span>
                </a>
            </li>
        </ul>

        <!-- Acciones -->
        <div class="flex items-center gap-3">
            <!-- CV -->
            <a href="#"
                class="hidden lg:inline-flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200">
                Ver CV
            </a>

            <!-- Modo Claro/Oscuro -->
            <button @click="ui.toggleTheme"
                class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-all duration-200"
                aria-label="Cambiar tema">
                <font-awesome-icon v-if="!ui.isDark" icon="fa-regular fa-sun" class="text-lg"/>
                <font-awesome-icon v-else icon="fa-regular fa-moon" class="text-lg"/>
            </button>

            <!-- Boton Menu (version movil) -->
            <button @click="menuOpen = !menuOpen"
                class="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400 text-gray-600 dark:text-gray-300 transition-all duration-200"
                aria-label="Abrir menú">
                <font-awesome-icon v-if="!menuOpen" icon="fa-solid fa-bars" class="text-lg"/>
                <font-awesome-icon v-else icon="fa-solid fa-xmark" class="text-lg"/>
            </button>
        </div>

        <!-- Menu movil desplegable -->
        <transition name="slide">
            <div v-if="menuOpen"
                class="absolute top-15 left-0 w-full text-center bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 shadow-md z-50 lg:hidden transition-colors duration-300">
                <ul class="flex flex-col px-6 py-4 gap-4">
                    <li v-for="link in navLinks" :key="link.label">
                        <a :href="link.href"
                            class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                            @click="menuOpen = false">
                            {{ link.label }}
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
                            Ver CV
                        </a>
                    </li>
                </ul>
            </div>
        </transition>
    </nav>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>