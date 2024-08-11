import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./eng/translation.json";
import translationRU from "./ru/translation.json";
import translationTM from "./tm/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  tm: {
    translation: translationTM,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// const resources = {
//   en: {
//     translation: {
//       alerts: {
//         accept: "Akzeptieren",
//       },
//       sidebar: {
//         home: "Home",
//         admin: "Admin Panel",
//         settings: "Settings",
//         profile: "Profile",
//         dashboard: "Dashboard",
//         codes: "Codes",
//         search: "Search ...",
//       },
//       table: {
//         code: " Code",
//         title: "Title",
//         description: "Description",
//         short_name: "Short Name",
//         parent_id: "Parent ID",
//         status: "Status",
//         actions: "Actions",
//         active: "Active",
//         pending: "Pending",
//         disabled: "Disabled",
//         delete: "Delete",
//         edit: "Edit",
//       },
//     },
//   },
//   ru: {
//     translation: {
//       alerts: {
//         accept: "aksept",
//       },
//       sidebar: {
//         home: "Главная",
//         admin: "Админ панель",
//         settings: "Настройка",
//         profile: "Профиль",
//         dashboard: "Дашбоардь",
//         codes: "Коди",
//         search: "Поиск ...",
//       },
//       table: {
//         code: " Код",
//         title: "Заголовок",
//         description: "Описание",
//         short_name: "Короткое имя",
//         parent_id: "Parent ID",
//         status: "Положение",
//         actions: "Действия",
//         active: "Активный",
//         pending: "В ожидании",
//         disabled: "Неполноценный",
//         delete: "Удалить",
//         edit: "Редактировать",
//       },
//     },
//   },
// };

// i18n.use(initReactI18next).init({
//   resources,
//   lng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;
