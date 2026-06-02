<script setup>
import { ref } from 'vue';

const isDark = ref(false);
const menuOpen = ref(false);

const navLinks = ref([
    { label: 'Inicio', href: '#', active: true },
    { label: 'Proyectos', href: '#', active: false },
    { label: 'Sobre Mí', href: '#', active: false },
    { label: 'Cursos', href: '#', active: false },
    { label: 'Contacto', href: '#', active: false },
]);

function toggleTheme() {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
};
</script>

<template>
    <nav class="w-full bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between shadow-md relative">
        <!-- Icono y Nombre -->
        <div class="flex items-center gap-2">
            <div class="flex items-center justify-center">
                <font-awesome-icon icon="fa-solid fa-microchip" class="text-2xl" />
            </div>
            <span class="hidden lg:inline text-md font-bold text-gray-900 tracking-tight">Brandon González Martínez</span>
            <span class="lg:hidden text-md font-bold text-gray-900 tracking-tight">Brandon González Mtz</span>
        </div>

        <!-- Links de navegacion (version de escritorio) -->
        <ul class="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <li v-for="link in navLinks" :key="link.label">
                <a :href="link.href"
                    class="text-md font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group"
                    :class="{ 'text-gray-900': link.active }">
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
                class="hidden lg:inline-flex items-center gap-1.5 bg-blue-500 blue:bg-lime-300 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200">
                Ver CV
            </a>

            <!-- Modo Claro/Oscuro -->
            <button @click="toggleTheme"
                class="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:border-gray-500 text-gray-500 hover:text-gray-800 transition-all duration-200"
                aria-label="Cambiar tema">
                <font-awesome-icon v-if="!isDark" icon="fa-regular fa-sun" />
                <font-awesome-icon v-else icon="fa-regular fa-moon" />
            </button>

            <!-- Boton Menu (version movil) -->
            <button @click="menuOpen = !menuOpen"
                class="lg:hidden w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:border-gray-500 text-gray-600 transition-all duration-200"
                aria-label="Abrir menú">

                <font-awesome-icon v-if="!menuOpen" icon="fa-solid fa-bars" />
                <font-awesome-icon v-else icon="fa-solid fa-xmark" />

            </button>
        </div>

        <!-- Menu movil desplegable -->
        <transition name="slide">
            <div v-if="menuOpen"
                class="absolute top-15 left-0 w-full bg-white border-b border-gray-100 shadow-md z-50 lg:hidden">
                <ul class="flex flex-col px-6 py-4 gap-4">
                    <li v-for="link in navLinks" :key="link.label">
                        <a :href="link.href"
                            class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                            @click="menuOpen = false">
                            {{ link.label }}
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="inline-flex items-center bg-blue-400 hover:bg-blue-300 text-gray-900 text-sm font-semibold px-5 py-2 rounded-full transition-colors">
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