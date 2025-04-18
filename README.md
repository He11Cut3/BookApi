# Bookstore API

![Node.js](https://img.shields.io/badge/Node.js-14.x+-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-orange)
![MS SQL](https://img.shields.io/badge/MS%20SQL-2019+-blue?logo=microsoft-sql-server)

Простое REST API для управления коллекцией книг с полным CRUD функционалом.

## 🚀 Функциональность
- Полноценный CRUD для книг
- Валидация входных данных
- Централизованная обработка ошибок
- Логирование запросов

## 🗃️ Модель данных
```javascript
{
  id: Integer,          // Автоинкрементный ID
  Book_Name: String,    // Название книги (обязательное)
  Book_Data: String,    // Дата публикации
  Book_Author: String,  // Автор книги (обязательное)
  createdAt: Date,      // Дата создания
  updatedAt: Date       // Дата обновления
}
```
## 🌐 API Endpoints

| Метод  | Путь               | Описание                          | Контроллер-метод      |
|--------|--------------------|-----------------------------------|-----------------------|
| GET    | `/all`             | Получить все книги                | `GetAllBook`          |
| GET    | `/find/:id`        | Получить книгу по ID              | `FindBook`            |
| GET    | `/delete/:id`      | Удалить книгу                     | `DeletBook`           |
| POST   | `/addBook`         | Добавить новую книгу              | `AddBook`             |
| PUT    | `/update/:id`      | Обновить информацию о книге       | `UpdateBook`          |

### Примеры использования:

**Получить все книги:**
```bash
GET http://localhost:3000/book/all
