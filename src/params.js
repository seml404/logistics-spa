export default {
  section: [
    {
      number: 1,
      title: "Маршрут",
    },
    {
      number: 2,
      title: "Транспорт",
    },
    {
      number: 3,
      title: "Груз",
    },
    {
      number: 4,
      title: "Время",
    },
  ],
  type: {
    select1: {
      title: "Грузоподъемность",
      defaultValue: "Не выбрана",
      options: [
        {
          optionName: "Вариант 1",
          id: Math.random(),
        },
        {
          optionName: "Вариант 2",
          id: Math.random(),
        },
        {
          optionName: "Вариант 3",
          id: Math.random(),
        },
        {
          optionName: "Вариант 4",
          id: Math.random(),
        },
        {
          optionName: "Вариант 5",
          id: Math.random(),
        },
      ],
      class: "select select_small",
    },
    select2: {
      title: "Способ погрузки",
      defaultValue: "Не выбран",
      options: [
        {
          optionName: "Вариант 1",
          id: Math.random(),
        },
        {
          optionName: "Вариант 2",
          id: Math.random(),
        },
        {
          optionName: "Вариант 3",
          id: Math.random(),
        },
        {
          optionName: "Вариант 4",
          id: Math.random(),
        },
        {
          optionName: "Вариант 5",
          id: Math.random(),
        },
      ],
      class: "select select_small",
    },
    select3: {
      title: "Тип груза",
      defaultValue: "Не выбран",
      options: [
        {
          optionName: "Вариант 1",
          id: Math.random(),
        },
        {
          optionName: "Вариант 2",
          id: Math.random(),
        },
        {
          optionName: "Вариант 3",
          id: Math.random(),
        },
        {
          optionName: "Вариант 4",
          id: Math.random(),
        },
        {
          optionName: "Вариант 5",
          id: Math.random(),
        },
      ],
      class: "select",
    },
    select4: {
      title: "Класс опасности",
      defaultValue: "Не выбран",
      options: [
        {
          optionName: "Класс 1",
          id: Math.random(),
        },
        {
          optionName: "Класс 2",
          id: Math.random(),
        },
        {
          optionName: "Класс 3",
          id: Math.random(),
        },
      ],
      class: "select select_small",
    },
    input1: {
      title: "Откуда",
      defaultValue: "",
      class: "input",
    },
    input2: {
      title: "Куда",
      defaultValue: "",
      class: "input",
    },
    input3: {
      title: "Объявленная ценность",
      defaultValue: ">1",
      class: "input",
    },
    input4: {
      title: "Требуется температурный режим",
      defaultValue: "",
      class: "",
    },
    input5: {
      title: "Комментарий к заказу",
      defaultValue:
        "Укажите особенности въезда на территорию склада или подъезда к адресу",
      class: "",
    },
  },
};
