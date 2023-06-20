<template>
    <section class="safety">
        <header class="safety__header">
            <h1 class="header--h1">Prioritizing safety, no matter where you venture</h1>
            <img src="~/assets/images/facemask_driving.png" alt="Man driving with Uber customer in back"
                class="header--img">
        </header>

        <article class="safety__info">
            <div class="info">
                <div class="info__header flex--wrap">
                    <h2 class="info--h1">Our commitment to your safety</h2>
                    <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542256135/assets/dd/c53d7b-8921-4dc7-93f4-45fb59f4ffb9/original/person-multiple-outlined.svg"
                        alt="Uber Profile Asset" class="info--img">
                </div>
                <p class="info--paragraph">We're dedicated to fostering a safe environment for our users through a variety
                    of safety features and Community Guidelines. Your well-being is our top priority, and we're constantly
                    working to maintain the highest standards of safety and security on our platform.</p>
                <div class="info__links">
                    <a href="" class="info--link">Read More</a>
                    <a href="" class="info--link">See all our safety features</a>
                </div>
            </div>
            <div class="info">
                <div class="info__header">
                    <h2 class="info--h1">Setting 10,00+ cities in motion</h2>
                    <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542255370/assets/64/58118a-0ece-4f80-93ee-8041b53593d5/original/home-outlined.svg"
                        alt="Uber Home Asset" class="info--img">
                </div>
                <p class="info--paragraph">Our app has a vast global presence, with availability in thousands of cities
                    across the world. So, regardless of whether you're traveling abroad or simply exploring a new area in
                    your own city, you can easily request a ride from wherever you are.</p>
                <div class="info__links">
                    <a href="" class="info--link">Read More</a>
                    <a href="" class="info--link">See all of our locations</a>
                </div>
            </div>
        </article>
    </section>
</template>



<style lang="scss" scoped>
.safety {
    --safety-padding: clamp(30px, 8vw, 70px) clamp(10px, 5vw, 110px);
    ;
}


.header--h1 {
    padding: var(--safety-padding);

    font-weight: 600;
    font-size: clamp(23px, 4vw, 40px);
}


.header--img {
    object-fit: cover;
    width: 100%;
}

.safety__info {
    padding: var(--safety-padding);

    gap: clamp(50px, 10vw, 100px) 0;
    display: flex;
    flex-direction: column;

}


.info {
    gap: clamp(30px, 2vw, 40px);
    display: flex;
    flex-direction: column;
}

.info__header {
    display: flex;
    align-items: center;
    gap: clamp(10px, 2vw, 30px);

    .info--h1 {
        font-weight: 700;
        font-size: clamp(rem(22), 4vw, rem(35));
    }

    .info--img {
        width: clamp(20px, 4vw, 30px);
        height: clamp(20px, 4vw, 30px);
    }
}

.info--paragraph {
    font-size: clamp(rem(18), 2vw, rem(26));
}

.info__links {
    gap: 25px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .info--link {
        font-size: clamp(rem(16), 2vw, rem(17));

        cursor: pointer;
        // pointer-events: none;
    }
}


@media screen and (min-width: 1900px) {
    .info--paragraph {
        width: 80%;
    }

    .info--link {
        font-size: rem(20) !important
    }
}
</style>

