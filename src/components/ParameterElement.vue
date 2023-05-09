<template>
    <div>
        <div class="field__element">
            <p class="text__element__field">
                Длина
            </p>
            <label for="length_password">
                <input class="choose__length-password" id="length_password" type="number" min="6" max="20"
                       value="10">
            </label>
        </div>
    </div>
</template>

<script>
export default {}
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

p {
    margin: 0
}

.choose__length-password {
    border: none;
    border-left: 2px solid white;
}
</style>
