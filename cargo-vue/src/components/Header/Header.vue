<template>
    <div>
        <header>
            <div class="header">
                <div class="container">
                    <div class="header__inner">
                        <div class="header__inner__logo">
                            <a class="header__inner__logo__link" href="/">
                                <img class="header__inner__logo__link__img" src="../../assets/img/logo-red.png" alt="">
                            </a>
                        </div>

                        <nav class="header__inner__nav">
                            <ul class="header__inner__nav__list">
                                <li class="header__inner__nav__list__item" v-for="(menu, index) in headerMenuList" :key="index">
                                    <router-link class="header__inner__nav__list__item__link" :to="menu.path">{{ menu.name }}</router-link>
                                </li>

                                <li class="header__inner__nav__list__item__search">
                                    <div class="header__inner__nav__list__item__search-block">
                                        <form class="header__inner__nav__list__item__search-block__form">
                                            <input class="header__inner__nav__list__item__search-block__form__input" type="text" placeholder="Поиск">
                                            <button class="header__inner__nav__list__item__search-block__form__button-img" type="submit">
                                                <svg class="header__inner__nav__list__item__search-block__form__button-img__img">
                                                    <use xlink:href="../../assets/img/search.svg#search"></use>
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </li>

                                <li class="header__inner__nav__list__item__contact">
                                    <div class="header__inner__nav__list__item__contact-block">
                                        <a class="header__inner__nav__list__item__contact-block__link" href="tel:+88002500660">8 (800) 250-06-60</a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="geo__navbar__personal-area">
                <div class="container">
                    <div class="geo__navbar__personal-area__inner">
                        <div class="geo__navbar__personal-area__inner__geo">
                            <a class="geo__navbar__personal-area__inner__geo__link" href="#">
                                <div class="geo__navbar__personal-area__inner__geo__link__img-text">
                                    <svg class="geo__navbar__personal-area__inner__geo__link__img-text__svg">
                                        <use xlink:href="../../assets/img/map-pin.svg#geo"></use>
                                    </svg>
                                    <p class="geo__navbar__personal-area__inner__geo__link__img-text__text">г. Москва</p>
                                </div>
                            </a>
                        </div>

                        <nav class="geo__navbar__personal-area__inner__navbar">
                            <ul class="geo__navbar__personal-area__inner__navbar__list">
                                <li class="geo__navbar__personal-area__inner__navbar__list__item" v-for="(menugeo, indexgeo) in geoNabBar" :key="indexgeo">
                                    <router-link class="geo__navbar__personal-area__inner__navbar__list__item__link" :to="menugeo.path">{{ menugeo.name }}</router-link>
                                </li>
                            </ul>
                        </nav>

                        <div class="geo__navbar__personal-area__personal-area-block">
                            <a class="geo__navbar__personal-area__personal-area-block__link" href="#">
                                <div class="geo__navbar__personal-area__personal-area-block__link__inner-blocks">
                                    <svg class="geo__navbar__personal-area__personal-area-block__link__inner-blocks__logo">
                                        <use xlink:href="../../assets/img/user.svg#user"></use>
                                    </svg>
                                    <p class="geo__navbar__personal-area__personal-area-block__link__inner-blocks__text">Личный кабинет</p>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div class="links-about">
                <div class="container">
                    <div class="links-about__inner">
                        <nav class="links-about__inner__nav">
                            <ul class="links-about__inner__nav__list">
                                <li class="links-about__inner__nav__list__item" v-for="(linksmenu, linksindex) in aboutLinks" :key="linksindex">
                                    <router-link class="links-about__inner__nav__list__item__link" :to="linksmenu.path">{{ linksmenu.name }}</router-link>
                                </li>
                                <!-- <li class="links-about__inner__nav__list__item">
                                    <a class="links-about__inner__nav__list__item__link" href="#">Наша команда</a>
                                </li>
                                <li class="links-about__inner__nav__list__item">
                                    <a class="links-about__inner__nav__list__item__link" href="#">Карьера в ДА-ТРАНС</a>
                                </li>
                                <li class="links-about__inner__nav__list__item">
                                    <a class="links-about__inner__nav__list__item__link" href="#">Документы</a>
                                </li>
                                <li class="links-about__inner__nav__list__item">
                                    <a class="links-about__inner__nav__list__item__link" href="#">Отзывы </a>
                                </li>
                                <li class="links-about__inner__nav__list__item">
                                    <a class="links-about__inner__nav__list__item__link" href="#">Благотворительность </a>
                                </li> -->
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
name: "HelloWorld",
    props: {
        msg: String,
    },
    data() {
        return {
            headerMenuList: [
                { name: 'Бизнесу', path: '/business' },
                { name: 'Частным лицам', path: '/individuals'},
            ],
            geoNabBar: [
                { name: 'О компании', path: '/about-company' },
                { name: 'Услуги', path: '/services' },
                { name: 'Направления', path: '/directions' },
                { name: 'Тарифы', path: '/tariffs' },
                { name: 'Партнёрам', path: '/partners' },
                { name: 'Вопросы', path: '/questions' },
                { name: 'Контакты', path: '/contacts' },
            ],
            aboutLinks: [
                { name: 'О нас', path: '/about-us' },
                { name: 'Наша команда', path: '/our-team' },
                { name: 'Карьера в ДА-ТРАНС', path: '/career-in-DATrans' },
                { name: 'Документы', path: '/documents' },
                { name: 'Отзывы', path: '/reviews' },
                { name: 'Благотворительность', path: '/donations' },
            ]
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>