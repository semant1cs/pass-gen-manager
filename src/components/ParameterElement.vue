<template>
    <div>
        <div class="field__element">
            <div class="text-field-element">
                {{ parameterField.title }}
            </div>
            <label v-bind:for="parameterField.class">
                <input
                        v-bind:class="parameterField.class"
                        class="field-param"
                        v-bind:type="parameterField.type"
                >
            </label>
        </div>
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
