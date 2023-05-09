<template>
    <div>
        <Application class="app__field"/>
    </div>
</template>

<script>
import Application from "@/components/ApplicationWindow.vue";
import {defineComponent} from "vue";

export default defineComponent({
    components: {Application}
})

</script>

<style>
* {
    background-color: cyan;
}
</style>
