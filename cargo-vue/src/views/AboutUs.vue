<template>
    <div class="about-us">
        <section class="about-company">
            <div class="container">
                <div class="about-company__inner">
                    <div class="about-company__inner__blocks">
                        <h2 class="about-company__inner__blocks__title-about">О компании</h2>

                        <div class="about-company__inner__blocks__text-presentation">
                            <p class="about-company__inner__blocks__text-presentation__text">«ДА-ТРАНС» — надежная транспортная компания с собственным автопарком, специализирующаяся на перевозке грузов в B2B-сегменте по всей территории России, СНГ и Европы. За 10 лет работы на рынке грузоперевозок нашими Клиентами стали более 5 000 компаний малого и среднего бизнеса.</p>

                            <div class="about-company__inner__blocks__text-presentation__presentation">
                                <div class="about-company__inner__blocks__text-presentation__presentation__title-download">
                                    <p class="about-company__inner__blocks__text-presentation__presentation__title-download__text">Презентация о компании</p>

                                    <a class="about-company__inner__blocks__text-presentation__presentation__title-download__link" href="./assets/img/logo-red.png" download="Презентация о компании">
                                        <div class="about-company__inner__blocks__text-presentation__presentation__title-download__link__icon-text">
                                            <svg class="about-company__inner__blocks__text-presentation__presentation__title-download__link__icon-text__icon">
                                                <use xlink:href="../assets/img/icon-file.svg#download"></use>
                                            </svg>

                                            <p class="about-company__inner__blocks__text-presentation__presentation__title-download__link__icon-text__text">PDF, 1.2 MB</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="about-company__inner__blocks__text-presentation__presentation__red-car">
                                    <svg class="about-company__inner__blocks__text-presentation__presentation__red-car__img">
                                        <use xlink:href="../assets/img/red-car.svg#red-car"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="about-company__inner__slogan">
                        <div class="about-company__inner__slogan__block">
                            <span class="about-company__inner__slogan__block__chr1">“</span>
                                <p class="about-company__inner__slogan__block__prg">Делаем больше других, чтобы перевозки были удобными и безопасными, а бизнес в России честным и предсказуемым</p>
                            <span class="about-company__inner__slogan__block__chr2">“</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="our-team">
            <div class="container">
                <div class="our-team__inner">
                    <h2 class="our-team__inner__title">Наша Команда</h2>

                    <button class="our-team__inner__left-slider-btn">
                        <svg class="our-team__inner__left-slider-btn__icon">
                            <use xlink:href="../assets/img/arrow-left.svg#left"></use>
                        </svg>
                    </button>

                    <button class="our-team__inner__right-slider-btn">
                        <svg class="our-team__inner__right-slider-btn__icon">
                            <use xlink:href="../assets/img/arrow-right.svg#right"></use>
                        </svg>
                    </button>

                    <div class="our-team__inner__slider">
                        <div class="our-team__inner__slider__items-blocks">
                            <InfoPeoples
                                v-for="(people, index) in peoples" :key="index"
                                :img="people.img"
                                :name="people.name"
                                :lastName="people.lastName"
                                :position="people.position"
                                :emailLink="people.emailLink"
                                :emailText="people.emailText"
                                :phoneLink="people.phoneLink"
                                :phoneText="people.phoneText"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import InfoPeoples from '../components/InfoPeoples/InfoPeoples.vue';

export default {
    name: "aboutUs",
    components: {
        InfoPeoples
    },
    data() {
        return {
            peoples: [
                {
                    img: "https://github.com/Bakai16/Cargo/blob/erbol/erbol/assets/img/pp-1.png?raw=true",
                    name: 'Павел',
                    lastName: 'Янченко',
                    position: 'Генеральный директор',
                    emailLink: 'info@datrans.ru',
                    emailText: 'info@datrans.ru',
                    phoneLink: '+79281234567',
                    phoneText: '+7 (928) 123-45-67'
                },
                {
                    img: "https://github.com/Bakai16/Cargo/blob/erbol/erbol/assets/img/pp-2.png?raw=true",
                    name: 'Имя',
                    lastName: 'Фамилия',
                    position: 'Должность',
                    emailLink: 'info@datrans.ru',
                    emailText: 'info@datrans.ru',
                    phoneLink: '+79281234567',
                    phoneText: '+7 (928) 123-45-67'
                },
                {
                    img: "https://github.com/Bakai16/Cargo/blob/erbol/erbol/assets/img/pp-3.png?raw=true",
                    name: 'Имя',
                    lastName: 'Фамилия',
                    position: 'Должность',
                    emailLink: 'info@datrans.ru',
                    emailText: 'info@datrans.ru',
                    phoneLink: '+79281234567',
                    phoneText: '+7 (928) 123-45-67'
                },
                {
                    img: "https://github.com/Bakai16/Cargo/blob/erbol/erbol/assets/img/pp-4.png?raw=true",
                    name: 'Имя',
                    lastName: 'Фамилия',
                    position: 'Должность',
                    emailLink: 'info@datrans.ru',
                    emailText: 'info@datrans.ru',
                    phoneLink: '+79281234567',
                    phoneText: '+7 (928) 123-45-67'
                }
            ]
        }
    }
};
</script>

<style lang="scss">
@import '../../layouts/Vars.scss';

// ABOUT COMPANY
.about-company {
    margin-top: 36px;

    &__inner {
        padding: 0 68px 0 89px;

        &__blocks {

            &__title-about {
                font-family: $font-family-montserrat;
                font-weight: $font-weight-sm;
                font-style: $font-style-normal;
                font-size: 32px;

                text-transform: uppercase;

                line-height: 39.01px;
                letter-spacing: 0.02em;

                color: $color-black;
                margin-bottom: 24px;
            }

            &__text-presentation {
                display: flex;
                align-items: center;
                justify-content: space-between;

                &__text {
                    max-width: 702px;

                    font-family: $font-family-montserrat;
                    font-weight: $font-weight-rl;
                    font-style: $font-style-normal;
                    font-size: 20px;

                    color: $color-black;

                    line-height: 24px;
                }

                &__presentation {
                    display: flex;
                    align-items: center;

                    border: 1px solid $color-red;
                    border-radius: 4px;

                    padding: 0 0 0 23px;

                    &__title-download {

                        &__text {
                            font-family: $font-family-montserrat;
                            font-weight: $font-weight-sm;
                            font-style: $font-style-normal;
                            font-size: 20px;

                            color: $color-red;

                            line-height: 24.38px;
                            text-transform: uppercase;

                            max-width: 198px;
                            margin-bottom: 24px;
                        }

                        &__link {
                            text-decoration: none;

                            &__icon-text {
                                display: flex;
                                align-items: center;

                                &__icon {
                                    width: 22.5px;
                                    height: 26.5px;
                                }

                                &__text {
                                    margin-left: 14px;

                                    font-family: $font-family-montserrat;
                                    font-weight: $font-weight-rl;
                                    font-style: $font-style-normal;
                                    font-size: 16px;

                                    color: $color-red;

                                    line-height: 19.5px;
                                }
                            }
                        }
                    }

                    &__red-car {
                        margin-left: 50px;

                        &__img {
                            width: 122px;
                            height: 121px;
                        }
                    }
                }
            }
        }

        &__slogan {
            padding: 0 53px 0 30px;
            margin-top: 48px;

            &__block {
                display: flex;
                align-items: center;

                &__chr1 {
                    font-family: $font-family-montserrat;
                    font-weight: $font-weight-sm;
                    font-style: $font-style-normal;
                    font-size: 66px;

                    color: $color-red;
                }

                &__prg {
                    font-family: $font-family-montserrat;
                    font-weight: $font-weight-md;
                    font-style: $font-style-italic;
                    font-size: 24px;

                    color: $color-black;

                    text-transform: uppercase;
                    text-align: justify;
                    letter-spacing: 0.02em;

                    margin: 0 24px;
                }

                &__chr2 {
                    font-family: $font-family-montserrat;
                    font-weight: $font-weight-sm;
                    font-style: $font-style-normal;
                    font-size: 66px;

                    color: $color-red;
                    transform: rotate(180deg);
                }
            }
        }
    }
}
// END ABOUT COMPANY

// OUR TEAM
.our-team {
    margin-top: 34px;

    .our-team__inner {
        padding: 0 36px 0 65px;

        &__left-slider-btn {
            background-color: $color-red;
            border: 0;
            padding: 4px 5px;
            border-radius: 4px;

            cursor: pointer;

            position: absolute;
            transform: translate(-180%, 700%);

            &__icon {
                width: 24px;
                height: 19px;
            }
        }

        &__right-slider-btn {
            background-color: $color-red;
            border: 0;
            padding: 4px 5px;
            border-radius: 4px;

            cursor: pointer;

            position: absolute;
            transform: translate(3510%, 700%);

            &__icon {
                width: 24px;
                height: 19px;
            }
        }

        &__title {
            font-family: $font-family-montserrat;
            font-weight: $font-weight-sm;
            font-style: $font-style-normal;
            font-size: 32px;

            letter-spacing: 0.02em;
            text-transform: uppercase;

            color: $color-black;
            margin-bottom: 24px;
        }

        &__slider {
            
            &__items-blocks {
                display: flex;
                align-items: center;
            }
        }
    }
}
// END OUR TEAM
</style>