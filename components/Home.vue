<template>
    <main class="home">

        <div class="home__container">
            <div class="home__menu flex--wrap" @click="displayErrorNotification()" role="tablist">
                <button class="menu__item " role="tab" tabindex="0" aria-selected="true">
                    <img src="~/assets/svg/Earn-filled.svg" alt="Drive & Deliver" class="menu--svg">
                    <h2 class="menu--name">Drive and Deliver</h2>
                </button>
                <button class="menu__item" @click="displayErrorNotification()" role="tab" tabindex="0" aria-selected="true">
                    <img src="~/assets/svg/restaurant-outlined.svg" alt="Uber Eat" class="menu--svg">
                    <h2 class="menu--name">Eat</h2>
                </button>
                <button class="menu__item" @click="displayErrorNotification()" role="tab" tabindex="0" aria-selected="true">
                    <img src="~/assets/svg/car-front-outlined.svg" alt="Uber Ride" class="menu--svg">
                    <h2 class="menu--name">Ride</h2>
                </button>
            </div>
            <article class="home__menu__content">
                <h1 class="menu--title">Get in the driver's seat <br />and get paid</h1>
                <p class="menu--paragraph">Drive on the platform with the largest network of active riders</p>
                <span class="menu--tip">12.5k Drivers are Actively Delivering Right Now</span>
                <a href="" class="menu--faq">Learn more about driving and delivering</a>
                <button class="menu__ctn--button">Sign up to Drive</button>

            </article>

        </div>

    </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.home {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 0 0 100px 0;
    height: clamp(70dvh, 40dvw, calc(80dvh - 100px));
    min-height: 600px;

    background-color: $colors__primary;
    background: url("~/assets/images/driver_front.png") center / cover no-repeat;
    box-shadow: inset 0 0 0 5000px $primary--image--color, inset 0px -100px 0 $colors__primary;
}

.home__container {
    display: flex;

    background-color: $colors__secondary;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: -1px;
        right: 0;

        width: 100%;
        height: 100%;
        box-sizing: border-box;

        background-color: $colors__primary;
        clip-path: polygon(100% 29%, 26% 100%, 100% 100%);
    }
}



.home__menu {
    border-right: 1px solid $secondary--outline;

    display: flex;
    flex-direction: column;
    justify-content: space-between;


}

.menu__item {
    width: 100%;
    min-width: 100px;
    padding: 0 30px;

    flex: 1;
    gap: 20px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    cursor: pointer;
    transition: background .2s linear;

    &:hover {
        background: $primary--overlay;

    }
}

.menu--svg {
    width: clamp(40px, 2vw, 50px);
    height: clamp(40px, 2vw, 50px);
    ;
}

.menu--name {
    font-size: clamp(rem(15), 2vw, rem(19));
    font-weight: 500;
    overflow-wrap: break-word
}

.home__menu__content {
    overflow-y: scroll;
    gap: 25px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;

    padding: clamp(20px, 5vw, 75px) 130px 120px clamp(20px, 5vw, 35px);

}


.menu--title {
    font-size: clamp(rem(32), 5vw, rem(47));
    font-weight: bold;
}

.menu--paragraph {
    width: 80%;

    font-size: clamp(rem(17), 2vw, rem(19));
    font-weight: 500;
}

.menu--tip {
    font-size: clamp(rem(14), 2vw, rem(15));
    font-weight: 500;

    color: $primary--links;
}

.menu--faq {
    color: $primary--links;
    font-size: rem(15);
}

.menu__ctn--button {
    color: $colors__secondary;
    background: $colors__primary;

    padding: 15px 40px;
    border-radius: 25px;

    font-weight: 400;
    font-size: clamp(rem(16), 2vw, rem(18));
}


@media screen and (max-width: 768px) {
    .home {
        justify-content: center;
    }

    .home__container {
        flex-direction: column;
    }

    .home__menu {
        flex-direction: row;

        border-right: none;
        border-bottom: 1px solid $secondary--outline;
    }

    .menu__item {
        gap: 10px;
        padding: 25px 0;
    }
}


@media screen and (max-width: 520px) {
    .home {
        align-items: initial;
    }

    .menu--title {
        word-break: break-all;
    }

    .home__container {
        width: 100%;
        clip-path: polygon(0 0, 100% 0, 100% 51%, 0 100%, 0 100%, 0% 50%);

        &::after {
            display: none;
        }
    }
}


@media screen and (max-width: 445px) {
    .home__container {
        clip-path: polygon(50% 0%, 100% 0, 100% 73%, 0 100%, 0 100%, 0% 60%, 0 0);
    }

    .home__menu__content {
        padding: 10px;
    }
}


@media screen and (max-width: 330px) {
    .home__menu__content {
        gap: 10px;

    }
}
</style>