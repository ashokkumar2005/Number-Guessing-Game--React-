# 🎯 Number Guessing Game (React)

A simple and interactive Number Guessing Game built using **React** and **Vite**. The player must guess a randomly generated number between **1 and 10** while receiving hints after each attempt.

## 🚀 Features

* 🎲 Random number generation (1–10)
* ⌨️ Controlled input field using React state
* ✅ Input validation
* 📊 Attempt counter
* 🔼 "Too High" feedback
* 🔽 "Too Low" feedback
* 🎉 Success message on correct guess
* 🔄 Automatic game reset after winning
* ⚡ Fast development environment with Vite

---

## 🛠️ Technologies Used

* React
* Vite
* JavaScript (ES6+)
* CSS

---

## 📂 Project Structure

```text
src/
├── App.jsx
├── Result.jsx
├── App.css
└── main.jsx
```

---

## 🧠 How It Works

1. When the game starts, a random number between **1 and 10** is generated.
2. The player enters a guess in the input field.
3. Clicking **Check Guess** compares the entered number with the generated number.
4. The application displays:

   * 🔼 Too High
   * 🔽 Too Low
   * 🎉 Correct Guess
5. The number of attempts is tracked throughout the game.
6. When the correct number is guessed:

   * The input field is cleared.
   * A new random number is generated.
   * A new round begins automatically.

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/ashokkumar2005/Number-Guessing-Game--React-.git
```

### Navigate to the Project Folder

```bash
cd Number-Guessing-Game--React-
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

---

## 📸 Screenshot

Add a screenshot of your project:

```markdown
![Number Guessing Game](./screenshot.png)
```

---

## 💡 Future Enhancements

* Difficulty levels (Easy, Medium, Hard)
* Maximum attempt limits
* Previous guesses history
* Score tracking system
* Sound effects and animations
* Online leaderboard

---

## 🎓 Concepts Practiced

* React Components
* Props
* useState Hook
* useEffect Hook
* Conditional Rendering
* Event Handling
* State Management

---

## 👨‍💻 Author

**Ashok Sam**

GitHub: https://github.com/ashokkumar2005

---

## ⭐ Support

If you found this project helpful, please consider giving it a **Star ⭐** on GitHub.
