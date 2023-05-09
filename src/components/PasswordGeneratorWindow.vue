<template>
    <div class="app__field">
        <ContainerPassword/>
        <parameters-list/>

        <generate-password-button/>
    </div>
</template>

<script>
import ContainerPassword from "@/components/ContainerPassword.vue";
import ParametersList from "@/components/ParametersList.vue";
import GeneratePasswordButton from "@/components/GeneratePasswordButton.vue";

export default {
    components: {GeneratePasswordButton, ParametersList, ContainerPassword}
}
</script>

<style>
* {
    background-color: cyan;
}

.app__field {
    margin: 40px auto auto;
    width: 450px;
    height: 430px;
    background-color: #7b31c3;
    border: 3px solid white;
    box-shadow: 2px 2px 2px white;
}
</style>
