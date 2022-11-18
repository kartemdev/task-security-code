# task-security-code
## _WEB-form for JSON-file (TREE, TAB)_

Нужно загрузить JSON-файл, в следующей архитектуре
```json
[
  {
    "name": "Фрукты",
    "list": [
      {
        "nameItem": "Яблоки",
        "order": {
          "count": "100",
          "sort": "Голден"
        },
        "delivery": {
          "Adress": "Москва, ул. октябрьская, дом 15",
          "date": "14.12.2022",
          "time": "14:00"
        }
      },
    ]
  },
]
```

#### Функционал:
- Загрузка JSON-файла на сайт (сначала он загружается на бэкенд и там записывается его копия в папку [files](https://github.com/kartemdev/task-security-code/tree/main/files), после парсится в объект и ответом уходит на фронт);
- Просмотр дерева элементов, у каждого элемента есть две закладки (Заказ, Доставка) между ними можно переключаться;
- В заказе можно изменить данные, нажав кнопку "изменить", изменения буду сохранены в Redux хранилище;
- Сохранение и перезапись JSON-файла на бэкенде по нажатию кнопки "сохранить" (JSON-файл в папке [files](https://github.com/kartemdev/task-security-code/tree/main/files) перезапишется с новыми значениями, тот JSON-файл который конкретно вы загрузили ни как не изменится, его копия с изменениями хранится в папке [files](https://github.com/kartemdev/task-security-code/tree/main/files));
- В консоли браузера можно отследить перезапись JSON-файла на бэкенде.

#### Установка
После клонирования репозитория выполните следующий код, понадобиться два терминала:

Терминал бэкенда:
```sh
npm install
node server.js
```

Терминал фронтенда:
```sh
cd client/
npm install
npm start
```

#### Примечание
-> [JSON-файл](https://disk.yandex.ru/d/MqQi2-chQe7ugQ) с правильной архитектурой

Тот файл который вы изменили и сохранили будет находить в папке [files](https://github.com/kartemdev/task-security-code/tree/main/files), также если у вас уже есть [JSON-файл](https://disk.yandex.ru/d/MqQi2-chQe7ugQ) с правильной архитектурой в папке [files](https://github.com/kartemdev/task-security-code/tree/main/files), при перезагрузке(загрузке) страницы всё равно нужно загрузить [JSON-файл](https://disk.yandex.ru/d/MqQi2-chQe7ugQ)
