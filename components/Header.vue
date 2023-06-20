<template>
    <nav class="header flex--wrap" aria-label="Navigation">
        <div class="header__container header__left flex--wrap">
            <div class="header__logo flex--wrap">
                <img src="~/assets/images/uber_logo.png" alt="Uber Logo" class="logo--image">
                <h2 class="logo--company">Uber</h2>
            </div>

            <div class="header__navigation flex--wrap">
                <button class="navigation__button button__hover" role="button" aria-label="Company Button"
                    @click="displayErrorNotification()">Company</button>
                <button class="navigation__button button__hover" aria-label="hi button" role="button" tabindex="0"
                    @click="displayErrorNotification()">Products</button>
                <button class="navigation__button button__hover" @click="displayErrorNotification()">Help</button>
            </div>
        </div>

        <div class="header__container header__right">
            <button class="header__button button button__hover" @click="displayErrorNotification()">Log In</button>
            <button class="header__button button--primary" @click="displayErrorNotification()">Sign Up</button>
        </div>
    </nav>
</template>


<script setup>
</script>

<style lang="scss" scoped>
// * Header

.header {
    height: 100px;
    min-height: 88px;

    padding: 0 clamp(30px, 5vw, 100px);

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: $colors__primary;
}

.header__container {
    height: 100%;
    display: flex;
    align-items: center;
}

// * Left Section

.header__left {
    gap: 0 50px;
}

.header__logo {
    gap: 0px 26px;
    display: flex;
    align-items: center;
    position: relative;

    &::before {
        content: "";
        right: -25px;
        position: absolute;

        width: 2px;
        height: 50%;

        background-color: $colors__secondary;
    }
}

.logo--image {
    width: 48px;
    height: 48px;
}

.logo--company {
    font-weight: 500;
    font-size: rem(27);

    color: $colors__secondary
}


.header__navigation {
    height: 100%;

    gap: 0 10px;
    display: flex;
    align-items: center;
}

.navigation__button {
    height: 100%;
    min-width: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: rem(18);
    color: $header__secondary;
}

// * Right Section

.header__right {
    gap: 0 10px;
}

.header__button {
    min-width: 100px;
    height: 100%;

    font-size: rem(18);
    color: $colors__secondary;
}

.button--primary {
    padding: 10px 25px;
    height: fit-content;

    font-weight: 500;
    color: $colors__primary;

    background: $colors__secondary;
    transition: background .2s linear;

    &:hover {
        background: $primary--button--overlay;
    }
}

// * Animations

.button__hover {
    transition: background .2s linear;

    &:hover {
        background: $primary--overlay;
    }
}


@media screen and (max-width: 808px) {
    .header__logo::before {
        display: none;
    }

    .header__navigation {
        display: none;
    }
}

@media screen and (max-width: 520px) {
    .header__right {
        display: none;
    }
}
</style>