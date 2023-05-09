<template>
    <div class="app__field">
        <h1 class="app__name">PASSWORD GENERATOR</h1>
        <div class="container__password">
            <div class="field__password">
                123123213
                <button class="copy__to__clipboard">
                    Нажмите чтобы скопировать пароль
                </button>
            </div>
        </div>
        <ul class="list__fields">
            <li class="field__element">
                <p class="text__element__field">
                    Длина
                </p>
                <label for="length_password">
                    <input id="length_password" type="number" min="6" max="20" value="10">
                </label>
            </li>
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
        <button id="generate__password">
            Сгенерировать пароль
        </button>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
    box-sizing: border-box;
    background-color: #7b31c3;
}

.container__password {
    border: 3px solid white;
    display: flex;
    justify-content: flex-start;
    height: 50px;
    width: 100%;
    box-shadow: 2px 2px 2px white;
}

.app__name {
    text-align: center;
    font-size: 22px;
}

.field__password button {
    position: relative;
    bottom: -70%;
    left: 40%;
    transform: translateX(-50%);
    background-color: #612d91;
    color: white;
    font-weight: bold;
    border: 3px solid white;
    cursor: pointer;
    transition: opacity 0.4s ease, transform 0.4s ease;
    opacity: 0;
}

.field__password:hover button {
    opacity: 1;
}

.list__fields {
    padding: 0;
}

p {
    margin: 0
}

.field__element {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
}

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

.app__field {
    margin: 40px auto auto;
    width: 450px;
    height: 390px;
    background-color: #7b31c3;
    border: 3px solid white;
    box-shadow: 2px 2px 2px white;
}
</style>
