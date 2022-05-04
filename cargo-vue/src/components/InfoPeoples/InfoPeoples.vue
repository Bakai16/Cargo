<template>
     <div class="items-blocks">
         <img class="items-blocks__img" :src="img" alt="">

        <div class="items-blocks__item">
            <div class="items-blocks__item__text-blocks">
                <h5 class="items-blocks__item__title">{{ name + ' ' + lastName }}</h5>
                <p class="items-blocks__item__sub-title">{{ position }}</p>

                <a class="items-blocks__item__link" :href="`mailto:${emailLink}`">
                    <div class="items-blocks__item__email">
                        <svg class="items-blocks__item__email__icon">
                            <use xlink:href="../../assets/img/icon-email.svg#email"></use>
                        </svg>
                        <p class="items-blocks__item__email__text-email">{{ emailText }}</p>
                    </div>
                </a>
                <a class="items-blocks__item__link" :href="`tel:${phoneLink}`">
                    <div class="items-blocks__item__call">
                        <svg class="items-blocks__item__call__icon">
                            <use xlink:href="../../assets/img/icon-call.svg#call"></use>
                        </svg>
                        <p class="items-blocks__item__call__text-call">{{ phoneText }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfoPeoples',
    props: {
        img: String,
        name: String,
        lastName: String,
        position: String,
        emailLink: String,
        emailText: String,
        phoneLink: String,
        phoneText: String
    },
}
</script>

<style lang="scss">
@import '../../../layouts/Vars.scss';

.items-blocks {
    box-shadow: 0px 0px 20px 0px rgba(189, 189, 189, 0.5);
    border-radius: 4px;
    background-color: $color-white;
    max-width: 279px;

    &__img {
        border-radius: 4px 4px 0 0;
        height: 250px;
        object-fit: cover;
    }

    &__item {

        &__text-blocks {
            padding: 14px 0;
        }
        
        &__title {
            font-family: $font-family-montserrat;
            font-weight: $font-weight-sm;
            font-style: $font-style-normal;
            font-size: 18px;

            color: $color-red;

            text-align: center;
            margin: 0 0 8px 0;
        }

        &__sub-title {
            font-family: $font-family-montserrat;
            font-weight: $font-weight-rl;
            font-style: $font-style-normal;
            font-size: 18px;

            line-height: 22px;
            color: $color-black;
            text-align: center;
        }

        &__link {
            text-decoration: none;
        }

        &__email {
            display: flex;
            align-items: center;
            justify-content: center;

            margin: 8px 0;
                
            &__icon {
                width: 18.5px;
                height: 11.81px;
            }

            &__text-email {
                font-family: $font-family-montserrat;
                font-weight: $font-weight-rl;
                font-style: $font-style-normal;
                font-size: 18px;

                color: $color-red;
                margin-left: 7px;
            }
        }

        &__call {
            display: flex;
            align-items: center;
            justify-content: center;

            &__icon {
                width: 20px;
                height: 20px;
            }

            &__text-call {
                font-family: $font-family-montserrat;
                font-weight: $font-weight-rl;
                font-style: $font-style-normal;
                font-size: 18px;

                color: $color-red;
                margin-left: 4px;
            }
        }
    }
}

.items-blocks + .items-blocks {
    margin-left: 14px;
}
</style>