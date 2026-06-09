# 🎯 Number Guessing Game (React)

A fun and interactive Number Guessing Game built with **React** and **Vite**. The player tries to guess a randomly generated number between **1 and 10**, receiving feedback after each attempt.

## 🚀 Features

* 🎲 Random number generation (1–10)
* ⌨️ Controlled input using React state
* ✅ Guess validation
* 📊 Attempt counter
* 🔼 "Too High" feedback
* 🔽 "Too Low" feedback
* 🎉 Success message when the correct number is guessed
* 🔄 Automatic game reset after winning
* ⚡ Fast development with Vite

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

## 🧠 How the Game Works

1. A random number between **1 and 10** is generated when the game starts.
2. The user enters a guess.
3. Clicking **Check Guess** compares the input with the generated number.
4. The application displays:

   * 🔼 Too High
   * 🔽 Too Low
   * 🎉 Correct Guess
5. The number of attempts is tracked.
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

### Navigate to the Project Directory

```bash
cd Number-Guessing-Game--React-
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

---

## 📸 Screenshot

Add a screenshot of your project here.

```markdown
![Number Guessing Game](./screenshot.png)
```

---

## 💡 Future Improvements

* Add difficulty levels (Easy, Medium, Hard)
* Limit the number of attempts
* Display previous guesses
* Add score tracking
* Add animations and sound effects
* Create a leaderboard

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

If you found this project useful, consider giving it a **star ⭐** on GitHub.
