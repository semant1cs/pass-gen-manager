<template>
    <div class="app__field">
        <ContainerPassword/>
        <parameters-list :parameter-fields="parametersFields"/>
        <generate-password-button
                @generate="generatePassword"
        />
    </div>
</template>

<script>
import ContainerPassword from "@/components/ContainerPassword.vue";
import GeneratePasswordButton from "@/components/GeneratePasswordButton.vue";
import ParametersList from "@/components/ParametersList.vue";

export default {
    components: {ParametersList, GeneratePasswordButton, ContainerPassword},
    data() {
        return {
            parametersFields: [
                {id: 1, title: "Длина", type: "number", class: "length_password"},
                {id: 2, title: "Верхний регистр", type: "checkbox", class: "upper_case"},
                {id: 3, title: "Нижний регистр", type: "checkbox", class: "lower_case"},
                {id: 4, title: "Специфичные символы", type: "checkbox", class: "specific_symbols"},
                {id: 5, title: "Цифры", type: "checkbox", class: "numbers"}
            ]
        }
    },
    methods: {
        generatePassword(parametersPassword) {
            console.log(parametersPassword)
        }
    }
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
