<template>
    <div>
        <h1 class="app__name">PASSWORD GENERATOR</h1>
        <div class="container__password">
            <div class="field__password">
                <input
                        class="password-value"
                        ref="passInput"
                        :value="password"
                        @focus="$event.target.select()"
                        @click="copy"
                >
                <button class="copy__to-clipboard" @click="generatePassword">
                    Нажмите чтобы скопировать пароль
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {getRandomElementArray} from "@/utils";
import {NUMS} from "@/const";

export default {
    data() {
        return {
            password: "",
        }
    },
    methods: {
        generatePassword() {
            let password = ''
            let lengthPassword = 10

            for (let i = 0; i < lengthPassword; i++) password += getRandomElementArray(NUMS).toString()

            this.password = password
        },
        copy() {
            this.$refs.passInput.focus();
            navigator.clipboard.writeText(document.activeElement.value);
        }
    }
}
</script>

<style scoped>
* {
    background-color: #7b31c3;
}

.container__password {
    border: 3px solid white;
    display: flex;
    justify-content: flex-start;
    height: 50px;
    width: 100%;
    box-shadow: 0 2px 5px white;
    border-left: 0;
    border-right: 0;
}

.app__name {
    text-align: center;
    font-size: 26px;
}

.field__password {
    text-align: center;
}

.copy__to-clipboard {
    position: relative;
    bottom: -30%;
    left: 180px;
    transform: translateX(-50%);
    background-color: #612d91;
    color: white;
    font-weight: bold;
    border: 3px solid white;
    cursor: pointer;
    transition: opacity 0.4s ease, transform 0.4s ease;
    opacity: 0;
    font-size: 18px
}

.field__password:hover button {
    opacity: 1;
}

.password-value {
    width: 444px;
    margin: auto;
    padding: 0;
    border: 0;
    text-align: center;
}
</style>
