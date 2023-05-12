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

p {
    margin: 0
}
</style>
