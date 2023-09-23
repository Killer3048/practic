const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const formProfile = popupProfile.querySelector('.popup__form');
const closeButton = document.querySelector('.popup__btn-close');
const closeButtonProfile = formProfile.querySelector('.popup__btn-close');
const editButton = document.querySelector('.profile__info-edit');
const nameInput = document.querySelector('.popup__form-input_type_name');
const jobInput = document.querySelector('.popup__form-input_type_job');
const inputsAll = document.querySelectorAll('.popup__form-input')
const profileName = document.querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__info-job');
const popupMesto = document.querySelector('.popup_type_mesto');
const formMesto = popupMesto.querySelector('.popup__form');
const openMestoPopup = document.querySelector('.profile__button-add');
const closeMestoPopup = popupMesto.querySelector('.popup__btn-close');
const nameImageInput = popupMesto.querySelector('input[name="imageName"]');
const linkImageInput = popupMesto.querySelector('input[name="imageSrc"]');
const formElementMesto = popupMesto.querySelector('.popup__form');
const popupImage = document.querySelector('.popup_type_image');
const popupImageImg = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__image-title');
const closePopupImage = popupImage.querySelector('.popup__btn-close');
const cardTemplate = document.querySelector('.template-card').content.querySelector('.card');
const cardElements = document.querySelector('.elements');


const initialCards = [{
        name: "Москва",
        link: "https://sportishka.com/uploads/posts/2022-04/1650683259_2-sportishka-com-p-nochnaya-moskva-krasivo-foto-3.jpg",
    },
    {
        name: "Эльбрус",
        link: "https://sportishka.com/uploads/posts/2022-11/1667585574_37-sportishka-com-p-podnozhe-elbrusa-vkontakte-41.jpg",
    },
    {
        name: "Домбай",
        link: "https://sun9-58.userapi.com/impg/z64FzsXFHRC08BnhXBgU4rokkQek9N2oJJKn6A/3AFN7i0D4M0.jpg?size=1200x1200&quality=96&sign=05bfa07b0d9b57b6b707a27085597bf6&c_uniq_tag=Rw7letVBi4LA-uoqGGG5--XfkwplaBCZAffVh1-7tYg&type=album",
    },
    {
        name: "Шаманка - скала",
        link: "https://sportishka.com/uploads/posts/2022-11/1667557955_57-sportishka-com-p-shaman-kamen-baikal-pinterest-60.jpg",
    },
    {
        name: "Столбы - Красноярск",
        link: "http://x-material.ru/wp-content/uploads/2019/07/BDgk3StO7Jk.jpg",
    },
    {
        name: "Урочище Аккурум",
        link: "https://static.orgpage.ru/socialnewsphotos/55/55eb706a6c8946b3bfc6d22d98d6ffba.jpg",
    },
    {
        name: "Малахитовое озеро",
        link: "https://sportishka.com/uploads/posts/2022-11/1667575865_28-sportishka-com-p-altai-goluboe-ozero-vkontakte-29.jpg",
    },
    {
        name: "Чёртов палец",
        link: "https://masterokblog.ru/wp-content/uploads/ed77c89cd70463282580-4.jpg",
    }
];