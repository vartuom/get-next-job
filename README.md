## Поиск работы c использованием API «Работа России»

Комбинированное SPA приложение на Next JS.  
Демка с реализацией основных фич фреймворка (Pages Router).  

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

Что сделано:  
1. api-роуты, сохранение истории и закладок в локальную БД SQLite с использованием Prisma ORM;
2. useSWR, кэширование запросов к API Роструда и инвалидация кэша;
3. поиск с дебаунсером;
4. CSR с использованием mui на главной странице;
5. SSR страницы с историей просмотра вакансий;
6. SSG для индивидуальных страниц добавленных в базу вакансий;

## Планы на доработку:
Сделать адаптив.
Рефакторинг мелких недочетов.

![Анимация](https://i.ibb.co/X7V90ZK/ezgif-com-optimize.gif)

## Установка и работа
Для работы приложения требуется локальный сервер Node.js.  
Запуск dev-сборки осуществляется командами:
### `npm i`
### `npx prisma generate`
### `npm run dev`