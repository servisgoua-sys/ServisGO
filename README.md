# ServisGO — Онлайн-сервіс для замовлення послуг в Україні 🧰

[![ServisGO](https://partner.servisgo.com.ua/public/uploads/web_settings/1756587204_4511070ed4ea31042458.png)](https://servisgo.com.ua)

**ServisGO** — це сучасна платформа, яка дозволяє легко та швидко знайти і замовити послуги у будь-якому місті України.  
Наш сервіс об'єднує клієнтів і виконавців у зручному онлайн-каталозі.

## 🔹 Основні можливості ServisGO
- Пошук послуг за категоріями: ремонт, клінінг, меблеві роботи, доставки та інше.  
- Онлайн-замовлення послуг у кілька кліків.  
- Рейтинг та відгуки постачальників послуг.  
- Підтримка клієнтів 24/7.

## 🔹 Чому обирають ServisGO
- Зручний інтерфейс для клієнтів та постачальників.  
- Прозора система оцінок та відгуків.  
- Доступ до великої бази перевірених компаній.  

## 🔹 Посилання на сервіс
🌐 Відвідати сайт: [https://servisgo.com.ua](https://servisgo.com.ua)  
📲 Підключитись до нашого Viber-бота: [viber://pa?chatURI=servisgobot](viber://pa?chatURI=servisgobot)  

## 🔹 Контакти
- Пошта: support@servisgo.com.ua  

## 🚀 GitHub Pages Website

Цей репозиторій містить статичний веб-сайт ServisGO, побудований з Jekyll та оптимізований для SEO.

### 📁 Структура проекту

```
├── _config.yml          # Конфігурація Jekyll
├── _layouts/            # Шаблони сторінок
│   ├── default.html     # Основний layout
│   └── home.html        # Layout для головної сторінки
├── assets/              # Статичні ресурси
│   ├── css/            # Стилі CSS
│   └── js/             # JavaScript файли
├── services/            # Сторінки послуг
├── index.html           # Головна сторінка
├── about.html           # Сторінка "Про нас"
├── contact.html         # Сторінка контактів
├── privacy.html         # Політика конфіденційності
├── terms.html           # Умови використання
├── sitemap.xml          # Карта сайту
├── robots.txt           # Інструкції для пошукових роботів
└── Gemfile              # Залежності Ruby
```

### 🛠 Локальна розробка

1. **Встановіть Ruby та Bundler:**
   ```bash
   # macOS (з Homebrew)
   brew install ruby
   
   # Ubuntu/Debian
   sudo apt install ruby ruby-dev build-essential
   
   # Windows (з RubyInstaller)
   # Завантажте з https://rubyinstaller.org/
   ```

2. **Клонуйте репозиторій:**
   ```bash
   git clone https://github.com/yourusername/ServisGO.git
   cd ServisGO
   ```

3. **Встановіть залежності:**
   ```bash
   bundle install
   ```

4. **Запустіть локальний сервер:**
   ```bash
   bundle exec jekyll serve
   ```

5. **Відкрийте браузер:**
   ```
   http://localhost:4000
   ```

### 🌐 Деплой на GitHub Pages

1. **Налаштуйте GitHub Pages:**
   - Перейдіть до Settings → Pages
   - Виберіть "GitHub Actions" як джерело
   - Файл `.github/workflows/pages.yml` автоматично налаштує деплой

2. **Автоматичний деплой:**
   - При кожному push до гілки `main` сайт автоматично перебудовується
   - GitHub Actions виконує збірку Jekyll та деплой

### 📊 SEO Оптимізація

Сайт оптимізований для пошукових систем:

- ✅ **Мета-теги:** Title, description, keywords для кожної сторінки
- ✅ **Структуровані дані:** JSON-LD розмітка для Google
- ✅ **Sitemap:** Автоматично генерується sitemap.xml
- ✅ **Robots.txt:** Налаштований для пошукових роботів
- ✅ **Open Graph:** Теги для соціальних мереж
- ✅ **Мобільна адаптивність:** Responsive дизайн
- ✅ **Швидкість завантаження:** Оптимізовані зображення та CSS

### 🎨 Кастомізація

1. **Зміна кольорів:** Редагуйте CSS змінні в `assets/css/main.css`
2. **Додавання послуг:** Оновіть `_config.yml` та створіть нові сторінки
3. **Зміна контактів:** Оновіть інформацію в `_config.yml`

### 📱 Підтримувані браузери

- Chrome (останні 2 версії)
- Firefox (останні 2 версії)
- Safari (останні 2 версії)
- Edge (останні 2 версії)
- Мобільні браузери

### 🔧 Технології

- **Jekyll 4.3+** - Генератор статичних сайтів
- **Ruby 3.1+** - Мова програмування
- **CSS3** - Стилізація з сучасними можливостями
- **JavaScript ES6+** - Інтерактивність
- **GitHub Pages** - Хостинг
- **GitHub Actions** - CI/CD

### 📞 Підтримка

Якщо у вас виникли питання або проблеми:

- 📧 Email: support@servisgo.com.ua
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/ServisGO/issues)
- 📖 Документація: [Jekyll Docs](https://jekyllrb.com/docs/)

---

> **ServisGO** — ваш надійний онлайн-помічник для пошуку послуг по всій Україні!
