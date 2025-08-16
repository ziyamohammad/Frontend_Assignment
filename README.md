# 🎨 Frontend Assignment – React Components

This project contains two reusable React components (**InputField** and **DataTable**) built with **React, TypeScript, and TailwindCSS**, and documented using **Storybook**.

---

## 📂 Folder Structure

```
Frontend_Assignment/
├── .storybook/          # Storybook configuration
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── InputField.tsx
│   │   └── DataTable.tsx
│   └── stories/         # Storybook stories for components
│       ├── InputField.stories.tsx
│       └── DataTable.stories.tsx
├── public/              # Static assets (empty or optional)
├── package.json
├── tailwind.config.js
└── README.md
```

---

## ⚡ Tech Stack

* **React** (with TypeScript)
* **TailwindCSS** for styling
* **Storybook** for documentation
* **Vercel** / **Chromatic** for deployment

---

## 🛠️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/<your-username>/Frontend_Assignment.git
cd Frontend_Assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Storybook

```bash
npm run storybook
```

Storybook will open at [http://localhost:6006](http://localhost:6006).

### 4. Build Storybook (for deployment)

```bash
npm run build-storybook
```

This generates the `storybook-static/` folder.

---

## 🎯 Components

### **1. InputField**

A flexible and accessible input component.

**Features:**

* Label, placeholder, helper text, error message
* States: disabled, invalid, loading
* Variants: filled, outlined, ghost
* Sizes: small, medium, large
* Optional: clear button, password toggle

---

### **2. DataTable**

A lightweight, reusable table component.

**Features:**

* Display tabular data
* Column sorting
* Row selection (single/multiple)
* Loading and empty states

---

## 📘 Storybook Documentation

Each component includes:

* Props & API definitions (TypeScript types)
* States & variants
* Example use cases
* Accessibility notes
* Theming & responsiveness

---

## 🚀 Deployment

This project is deployed using **Vercel**:
🔗 [Live Storybook Link]((https://frontend-assignment-p1t3.vercel.app/?path=/docs/configure-your-project--docs))

---

## 📝 Approach

* **Scalability First**: Each component is isolated inside `components/` with strongly typed props.
* **Reusability**: Variants and sizes are driven by props, making the components flexible.
* **Documentation**: Storybook covers all states, ensuring usability and clarity.
* **Accessibility**: Components support focus states, ARIA roles, and keyboard navigation.

---
