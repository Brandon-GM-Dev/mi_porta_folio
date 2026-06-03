<script setup>
    import Inicio from '@views/portafolio/secciones/Inicio.vue';
    import Proyectos from '@views/portafolio/secciones/Proyectos.vue';
    import SobreMi from '@views/portafolio/secciones/SobreMi.vue';
    import Cursos from '@views/portafolio/secciones/Cursos.vue';
    import Contacto from '@views/portafolio/secciones/Contacto.vue';
</script>

<template>
    <div class="flex min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div class="flex flex-col flex-1 min-w-0">
            <div class="flex-1">
                <Inicio/>
                <Proyectos/>
                <SobreMi/>
                <Cursos/>
                <Contacto/>
            </div>
        </div>
    </div>
</template>
