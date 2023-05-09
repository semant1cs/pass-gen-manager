<template>
    <div>
        <ul class="list__fields">
            <parameter-element
                    v-for="parameterField in parameterFields"
                    :parameterField="parameterField"
                    :key="parameterField.id"
            />
        </ul>
    </div>
</template>

<script>
import ParameterElement from "@/components/ParameterElement.vue";

export default {
    components: {ParameterElement},
    props: {
        parameterFields: {
            type: Array,
            required: true
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
