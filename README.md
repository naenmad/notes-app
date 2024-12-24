# Notes App

A modern, feature-rich note-taking application built with React that allows users to create, edit, archive, and manage notes with categories and reminders.

## Features

- Create and manage notes with titles and content
- Add categories (General, Work, Personal) to notes
- Set reminders for notes
- Archive/unarchive functionality
- Search notes by title
- Dark/Light mode toggle
- Character limit for note titles (50 characters)
- Responsive design for all devices
- Edit existing notes
- Delete notes

## Tech Stack

- React 18
- Vite
- CSS3
- ESLint for code quality

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
```
2. Install dependencies
```bash
npm install
```
3. Run development server
```bash
npm run dev
```
4. Build for production
```bash
npm run dev
```

## Project Structure
```
└── 📁notes-app
    └── 📁public
        └── icon.svg
    └── 📁src
        └── App.jsx
        └── 📁components
            └── NoteForm.jsx
            └── NoteItem.jsx
            └── NoteList.jsx
            └── SearchBar.jsx
        └── index.jsx
        └── 📁styles
            └── style.css
        └── 📁utils
            └── index.js
    └── .gitignore
    └── eslint.config.js
    └── index.html
    └── package-lock.json
    └── package.json
    └── README.md
    └── vite.config.js
```

## Available Scripts
Available Scripts
- npm run dev - Start development server
- npm run build - Build for production
- npm run preview - Preview production build
- npm run lint - Run ESLint

## Contributing

1. Fork the project
2. Create your feature branch
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes
```bash
git commit -m 'Add some AmazingFeature'
```
3. Push to the branch
```bash
git push origin feature/AmazingFeature
```
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Ahmad Zulkarnaen 