<template>
    <div v-if="parameterField.type === `number`" class="field__element">
        <div class="text-field-element">
            {{ parameterField.title }}
        </div>
        <label :for="parameterField.class">
            <input
                    :class="parameterField.class"
                    :type="parameterField.type"
                    :value="parameterField.value"
                    class="field-param"
            >
        </label>
    </div>
    <div v-else class="field__element">
        <div class="text-field-element">
            {{ parameterField.title }}
        </div>
        <label :for="parameterField.class">
            <input
                    :class="parameterField.class"
                    :type="parameterField.type"
                    :checked="parameterField.value"
                    class="field-param"
            >
        </label>
    </div>
</template>

<script>
export default {
    props: {
        parameterField: {
            type: Object,
            required: false
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    background-color: #7b31c3;
    font-size: 18px;
}

.field__element {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    border: 3px solid white;
    padding-left: 5px;
}

.text-field-element {
    margin: 0
}

.field-param {
    border: none;
    border-left: 2px solid white;
}
</style>
