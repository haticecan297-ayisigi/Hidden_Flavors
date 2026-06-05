# Hidden Flavors 🏺🍲

Taste the history of the world! **Hidden Flavors** is a front-end web application that bridges the gap between history and culinary arts. It allows users to explore, filter, and interact with authentic recipes from ancient civilizations, including the Ottoman Empire, Ancient Rome, Anatolian Seljuks, and more. 

## 🚀 Features

* **Historical Timeline & Era Filtering:** Browse recipes based on specific historical eras and categories (Soups, Main Courses, Olive Oil Dishes, Desserts, etc.).
* **Dynamic Portion Calculator:** Automatically scales ingredient amounts up or down based on the user's desired portion size.
* **User Authentication Simulation:** A front-end login/registration system that uses `LocalStorage` to manage user sessions securely within the browser.
* **Personalized Favorites:** Logged-in users can save recipes to their personal favorites list, which persists across sessions.
* **Interactive Rating & Review System:** Users can leave 1-5 star ratings and comments on historical recipes.
* **Daily Dashboards:** A dynamic "Recipe of the Day" and a rotating "Historical Menu of the Day" slider.
* **Fully Responsive UI:** A modern, grid-based layout that adapts seamlessly to desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

This project was built entirely with core web technologies, without the use of external front-end frameworks:
* **HTML5:** Semantic structuring and accessible markup.
* **CSS3:** Custom styling, CSS Grid/Flexbox layouts, and CSS animations (no external libraries like Bootstrap).
* **Vanilla JavaScript (ES6+):** Module-based architecture (`import`/`export`), DOM manipulation, and state management using `LocalStorage` and `SessionStorage`.

## 📁 Project Structure

```text
├── index.html               # Main entry point and UI structure
├── style.css                # Global styles, variables, and responsive media queries
├── script.js                # Core application logic, DOM manipulation, and auth handling
├── data.js                  # Comprehensive JSON-like structure containing all recipe data
├── README.md                # Project documentation
├── /images                  # Directory containing historical era and recipe images
└── Hidden_flavors_logo.png  # Logo for website