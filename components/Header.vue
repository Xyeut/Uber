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

        <button class="header__container header__mobile" @click="displayErrorNotification()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
                    fill="currentColor" />
                <path
                    d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
                    fill="currentColor" />
                <path
                    d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z"
                    fill="currentColor" />
            </svg>
            <h2>Menu</h2>
        </button>
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


.header__mobile {
    color: $colors__secondary;
    gap: 5px;
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

@media screen and (min-width: 520px) {
    .header__mobile {
        display: none;
    }
}



@media screen and (max-width: 520px) {
    .header__right {
        display: none;
    }
}
</style>