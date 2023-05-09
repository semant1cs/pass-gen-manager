<template>
    <div>
        <ul class="list__fields">
<parameter-element/>
            <li class="field__element">
                <p class="text__element__field">
                    Верхний регистр
                </p>
                <label>
                    <input id="upper_case" type="checkbox">
                </label>
            </li>
            <li class="field__element">
                <p class="text__element__field">
                    Нижний регистр
                </p>
                <label>
                    <input id="lower_case" type="checkbox">
                </label>
            </li>
            <li class="field__element">
                <p class="text__element__field">
                    Специфичные символы
                </p>
                <label>
                    <input id="specific_symbols" type="checkbox">
                </label>
            </li>
            <li class="field__element">
                <p class="text__element__field">
                    Цифры
                </p>
                <label>
                    <input id="numbers" type="checkbox">
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
import ParameterElement from "@/components/ParameterElement.vue";
export default {
    components: {ParameterElement}
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    background-color: #7b31c3;
    font-size: 18px;
}

.list__fields {
    padding-left: 10px;
    padding-right: 10px;
}

.field__element {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    border: 3px solid white;
    padding-left: 5px;
}

p {
    margin: 0
}
</style>
