<template>
    <div>
        <button
                id="generate__password"
                @click="generatePassword">
            Сгенерировать пароль
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            parametersPassword: {
                length: 5,
                isUpperCaseContains: false,
                isLowerCaseContains: false,
                isSpecificSymbolsContains: false,
                isNumbersContains: false
            }
        }
    },
    methods: {
        generatePassword() {
            this.$emit('generate', this.parametersPassword)
        }
    }
}
</script>

<style scoped>
#generate__password {
    background-color: #612d91;
    color: white;
    border: 3px solid white;
    font-weight: bold;
    font-size: 21px;
    padding: 0.5rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

* {
    box-sizing: border-box;
    background-color: #7b31c3;
    font-size: 18px;
}
</style>
