<template>
    <modal class="error">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="error--icon">
            <path fill="currentColor"
                d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.713T12 15q-.425 0-.713.288T11 16q0 .425.288.713T12 17Zm-1-4h2V7h-2v6Zm1 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z" />
        </svg>

        <h2 class="error--text">This is a mock design, please <b>note</b> none of the buttons work </h2>
    </modal>
</template>


<style lang="scss" scoped>
.error {
    z-index: 2;

    padding: 20px;
    width: clamp(350px, 50vw, 800px);

    left: 50%;
    position: fixed;
    transform: translateY(20px) translateX(-50%);

    gap: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 15px;
    background: $colors__secondary;
    filter: invert(95%);
}


.error--icon {
    width: 32px;
    height: 32px;
}

.error--text {
    font-size: clamp(16px, 2vw, 18px);
}
</style>