import geoSvg from '../public/geo.svg'
import logoSvg from '../public/logo.svg'
import truckSvg from '../public/truck.svg'
import heartSvg from '../public/heart.svg'
import cartSvg from '../public/cart.svg'
import personSvg from '../public/person.svg'
import arrowLeftShortSvg from '../public/arrow-left-short.svg'
import noneImg from '../public/no-image.png'
import starFillSvg from '../public/starFill.svg'
import starHalfSvg from '../public/starHalf.svg'
import starEmptySvg from '../public/starEmpty.svg'

export const SVG = {
    geo: geoSvg.src,
    logo: logoSvg.src,
    truck: truckSvg.src,
    heart: heartSvg.src,
    cart: cartSvg.src,
    person: personSvg.src,
    none: noneImg.src,
    arrow: {
        leftShort: arrowLeftShortSvg.src
    },
    star: {
      fill: starFillSvg.src,
      half: starHalfSvg.src,
      empty: starEmptySvg.src,
    }

}

export const ADMIN_MENU_LIST = [
  {
    id:"1",
    name: "Категории"
  },
  {
    id:"2",
    name: "Товары",
  },
  {
    id:"3",
    name: "Характеристики"
  },
  {
    id:"4",
    name: "Отзывы"
  },
  {
    id:"5",
    name: "Пользователи"
  },
  {
    id:"6",
    name: "Корзина"
  },
  {
    id:"7",
    name: "Избранное"
  },
  {
    id:"8",
    name: "Заказы"
  },
]

export const CATEGORIES_LIST = [
  {
    id:"1234",
    name: "Контроллеры и платы "
  },
  {
    id:"4567",
    name: "Шилды",
  },
  {
    id:"7891",
    name: "Наборы"
  },
  {
    id:"7413",
    name: "Приборы"
  },
  {
    id:"8524",
    name: "Модули"
  },
  {
    id:"9637",
    name: "Провода и кабели"
  },
]


//deldeldel
import one from '../public/del/11.jpg'
import one22 from '../public/del/22.jpg'
import one33 from '../public/del/33.jpg'

import one1 from '../public/del/1.jpg'
import one2 from '../public/del/2.jpg'
import one3 from '../public/del/3.jpg'
import one4 from '../public/del/4.jpg'

import one5 from '../public/del/5.jpg'
import one6 from '../public/del/6.jpg'
import one7 from '../public/del/7.jpg'

const menuList = [
  {
    id:"123",
    name: "Arduino"
  },
  {
    id:"456",
    name: "MICROBIT",
  },
  {
    id:"789",
    name: "STM32"
  },
  {
    id:"741",
    name: "ESP"
  },
  {
    id:"852",
    name: "M5Stack"
  },
  {
    id:"963",
    name: "Arducam"
  },
]

const products = {
  '1234':[
    {
      id: '11',
      title: 'Плата PRO Micro (Arduino-совместимая) с Type-C портом',
      price: '920',
      count: '15',
      src: one1.src,
      description: '​PRO Micro ー Миниатюрная Arduino-совместимая плата, построенная на базе микроконтроллера ATMega32u4.'
    },
    {
      id: '12',
      title: 'Плата микроконтроллера D1 WiFi UNO R3 на чипе ESP8266 ESP-12F',
      price: '403',
      count: '10',
      src: one2.src,
      description: 'Платы этого формата, давно стали предпочитать те, кто делает Wi-Fi устройства. Простота и надежность, Возможность программировать платы прямо из Arduino IDE, делают их очень популярными в среде DIY. Платы изготовлены на чипе ESP8266 модификации 12F,...'
    },
    {
      id: '13',
      title: 'Arduino MKR WAN 1300 с LoRaWAN, разработка IoT',
      price: '3 700',
      count: '4',
      src: one3.src,
      description: 'MKR WAN 1300 - это мощная плата, которая сочетает в себе функциональность подключения MKR Zero и LoRa. Это идеальное решение для тех, кто хочет проектировать проекты IoT с минимальным опытом работы в сети с низким энергопотреблением.'
    },
    {
      id: '14',
      title: 'Arduino Uno R3 SMD (Оригинал)',
      price: '2 100',
      count: '7',
      src: one4.src,
      description: 'Arduino Uno – плата микроконтроллера, основанная на чипе ATmega328P. '
    },
    {
      id: '10',
      title: 'Waveshare Отладочная плата STM32F4 DISCOVERY',
      price: '3 590',
      count: '2',
      src: one5.src,
      description: 'Waveshare Отладочная плата STM32F4 DISCOVERY​ - это плата разработки на серии микроконтроллерах STM, на плате есть все для более легкого старта в среду разработки как и начинающему пользователь так и опытному.​ На плате также присутствуют программа...'
    },
    {
      id: '22',
      title: 'Waveshare Отладочная плата STM32F746G DISCOVERY',
      price: '12 160',
      count: '3',
      src: one6.src,
      description: 'Waveshare Отладочная плата STM32F746G - DISCOVERY - позволяет пользователям разрабатывать и совместно использовать приложения с микроконтроллерами серии STM32F7 на базе ядра ARM® Cortex®-M7. Есть поддержка подключения Arduino что обеспечивает неогра...'
    },
    {
      id: '33',
      title: 'STM32F407G-DISC1 - Отладочная плата на STM32F407 с датчиками и с Аудио ЦАП CS43L22',
      price: '3 048',
      count: '7',
      src: one7.src,
      description: '​TM32F407G-DISC1 – отладочная плата, пришедшая на смену популярнейшей STM32F4DISCOVERY, которая теперь не рекомендована производителем для новых разработок. STM32F407G-DISC1 позволяет пользователю быстро разработать приложения для высокопроизводительн...'
    },
  ],
  '123':[
    {
      id: '11',
      title: 'Плата PRO Micro (Arduino-совместимая) с Type-C портом',
      price: '920',
      count: '15',
      // src: one1.src,
      description: '​PRO Micro ー Миниатюрная Arduino-совместимая плата, построенная на базе микроконтроллера ATMega32u4.'
    },
    {
      id: '12',
      title: 'Плата микроконтроллера D1 WiFi UNO R3 на чипе ESP8266 ESP-12F',
      price: '403',
      count: '10',
      src: one2.src,
      description: 'Платы этого формата, давно стали предпочитать те, кто делает Wi-Fi устройства. Простота и надежность, Возможность программировать платы прямо из Arduino IDE, делают их очень популярными в среде DIY. Платы изготовлены на чипе ESP8266 модификации 12F,...'
    },
    {
      id: '13',
      title: 'Arduino MKR WAN 1300 с LoRaWAN, разработка IoT',
      price: '3 700',
      count: '4',
      src: one3.src,
      description: 'MKR WAN 1300 - это мощная плата, которая сочетает в себе функциональность подключения MKR Zero и LoRa. Это идеальное решение для тех, кто хочет проектировать проекты IoT с минимальным опытом работы в сети с низким энергопотреблением.'
    },
    {
      id: '14',
      title: 'Arduino Uno R3 SMD (Оригинал)',
      price: '2 100',
      count: '7',
      src: one4.src,
      description: 'Arduino Uno – плата микроконтроллера, основанная на чипе ATmega328P. '
    },
  ],
  '456':[
    {
      id: '12',
      title: 'Плата микроконтроллера D1 WiFi UNO R3 на чипе ESP8266 ESP-12F',
      price: '403',
      count: '10',
      src: one2.src,
      description: 'Платы этого формата, давно стали предпочитать те, кто делает Wi-Fi устройства. Простота и надежность, Возможность программировать платы прямо из Arduino IDE, делают их очень популярными в среде DIY. Платы изготовлены на чипе ESP8266 модификации 12F,...'
    },
    {
      id: '13',
      title: 'Arduino MKR WAN 1300 с LoRaWAN, разработка IoT',
      price: '3 700',
      count: '4',
      src: one3.src,
      description: 'MKR WAN 1300 - это мощная плата, которая сочетает в себе функциональность подключения MKR Zero и LoRa. Это идеальное решение для тех, кто хочет проектировать проекты IoT с минимальным опытом работы в сети с низким энергопотреблением.'
    },
    {
      id: '22',
      title: 'Waveshare Отладочная плата STM32F746G DISCOVERY',
      price: '12 160',
      count: '3',
      src: one6.src,
      description: 'Waveshare Отладочная плата STM32F746G - DISCOVERY - позволяет пользователям разрабатывать и совместно использовать приложения с микроконтроллерами серии STM32F7 на базе ядра ARM® Cortex®-M7. Есть поддержка подключения Arduino что обеспечивает неогра...'
    },
  ],
  '789':[
    {
      id: '10',
      title: 'Waveshare Отладочная плата STM32F4 DISCOVERY',
      price: '3 590',
      count: '2',
      src: one5.src,
      description: 'Waveshare Отладочная плата STM32F4 DISCOVERY​ - это плата разработки на серии микроконтроллерах STM, на плате есть все для более легкого старта в среду разработки как и начинающему пользователь так и опытному.​ На плате также присутствуют программа...'
    },
    {
      id: '22',
      title: 'Waveshare Отладочная плата STM32F746G DISCOVERY',
      price: '12 160',
      count: '3',
      src: one6.src,
      description: 'Waveshare Отладочная плата STM32F746G - DISCOVERY - позволяет пользователям разрабатывать и совместно использовать приложения с микроконтроллерами серии STM32F7 на базе ядра ARM® Cortex®-M7. Есть поддержка подключения Arduino что обеспечивает неогра...'
    },
    {
      id: '33',
      title: 'STM32F407G-DISC1 - Отладочная плата на STM32F407 с датчиками и с Аудио ЦАП CS43L22',
      price: '3 048',
      count: '7',
      src: one7.src,
      description: '​TM32F407G-DISC1 – отладочная плата, пришедшая на смену популярнейшей STM32F4DISCOVERY, которая теперь не рекомендована производителем для новых разработок. STM32F407G-DISC1 позволяет пользователю быстро разработать приложения для высокопроизводительн...'
    },
    
  ]
}

const product = {
  id: '11',
  title: 'Плата PRO Micro (Arduino-совместимая) с Type-C портом',
  price: '920',
  count: '15',
  description: '​PRO CMicro ー Миниатюрная Arduino-совместимая плата, построенная на базе микроконтроллера ATMega32u4.',
  images: [
      one1.src,
      one2.src,
      one3.src,
      one4.src,
      one5.src,
  ],
  specifications: [
      {name: 'Микроконтроллер', value: 'ATMega32u4',},
      {name: 'Напряжение питания', value: '5 В',},
      {name: 'Цифровые входные/выходные выводы', value: '12',},
      {name: 'ШИМ каналы', value: '5',},
      {name: 'Аналоговые входные выводы', value: '4',},
      {name: 'Постоянный ток через входные/выходные выводы', value: '40 мА',},
      {name: 'Флеш-память', value: '32 Кб (ATmega32u4), из которых 4 Кб используются загрузчиком',},
  ],
  feedbacks: [
      {userName: 'Вова',     createdAt:'15.02.2021', feedback: 'Очень хороший товар всем рекомендую', stars: 4},
      {userName: 'Петя',     createdAt:'11.05.2020', feedback: 'норм пойдет', stars: 3},
      {userName: 'Вася',     createdAt:'23.08.2022', feedback: 'Сломался на 3 день', stars: 2},
      {userName: 'Анатолий', createdAt:'07.09.2022', feedback: 'Китай но работает', stars: 5},
      {userName: 'Евгений',  createdAt:'09.04.2022', feedback: 'Долго шел', stars: 4},
  ]
}