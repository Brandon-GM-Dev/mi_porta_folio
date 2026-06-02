<template>
    <footer class="border-t border-gray-200 dark:border-gray-700 pt-8 pb-6 px-10 md:px-18 bg-white dark:bg-gray-900 transition-colors duration-300">

        <!-- Seccion Superior: Mi logo y los links -->
        <div class="flex flex-wrap justify-between gap-8 mb-8">

            <!-- LOGO -->
            <div class="flex items-center gap-2.5 shrink-0">
                <div class="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <font-awesome-icon icon="fa-solid fa-microchip" class="text-3xl text-white" />
                </div>
                <span class="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">Brandon-GM-Dev</span>
            </div>

            <!-- LINKS -->
            <div class="flex flex-wrap items-start gap-x-12 gap-y-6">

                <!-- Sigue me -->
                <div class="flex flex-col gap-2">
                    <span class="text-base font-semibold tracking-widest uppercase text-gray-600 dark:text-gray-400">Sigue me</span>
                    <div class="flex items-center gap-6">
                        <a href="#" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Github</a>
                        <a href="#" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">X-Twitter</a>
                    </div>
                </div>

                <!-- Divisor vertical -->
                <div class="hidden sm:block w-px bg-gray-300 dark:bg-gray-600 self-stretch"></div>

                <!-- Legal -->
                <div class="flex flex-col gap-2">
                    <span class="text-base font-semibold tracking-widest uppercase text-gray-600 dark:text-gray-400">Legal</span>
                    <div class="flex items-center gap-6">
                        <a href="#" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Privacidad</a>
                        <a href="#" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>

            </div>
        </div>

        <!-- Linea gris divisora -->
        <hr class="border-t-2 border-gray-300 dark:border-gray-700 pt-5">

        <!-- Seccion Inferior -->
        <div class="flex flex-wrap items-center justify-between gap-4">

            <p class="text-md text-gray-500 dark:text-gray-400 uppercase">
                © 2026 Brandon González Martínez. Todos los derechos reservados.
            </p>

            <div class="flex items-center gap-5 text-3xl">
                <a href="#" aria-label="Linkedin" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                </a>
                <a href="#" aria-label="Discord" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <font-awesome-icon icon="fa-brands fa-discord" />
                </a>
                <a href="#" aria-label="X (Twitter)" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <font-awesome-icon icon="fa-brands fa-square-x-twitter" />
                </a>
                <a href="#" aria-label="GitHub" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <font-awesome-icon icon="fa-brands fa-square-github" />
                </a>
            </div>
        </div>
    </footer>
</template>