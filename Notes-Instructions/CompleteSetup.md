Below is a **condensed, end-to-end guide** to set up a **Cloudflare Pages** project that:

1. Injects a secret from `.env` using **dotenv-webpack** (locally).  
2. Uses the **Cloudflare Pages** environment variable for the same secret in production.  
3. Avoids committing secrets (or the final build files) to GitHub.  

---

## 1. Prerequisites

- **Node & npm** installed on your machine.  
- A **Cloudflare Pages** account and project set up.  
- A **GitHub (or other repo)** to push your code to.

---

## 2. Initialize Project Locally

1. **Create a Folder** (e.g., `my-ham-dashboard`).  
2. **Open a terminal** in that folder.  
3. **Initialize npm**:
   ```bash
   npm init -y
   ```
   This creates a basic `package.json` file.

---

## 3. Install Webpack & dotenv-webpack

1. **Webpack** (bundler) and **webpack-cli** (CLI tool):
   ```bash
   npm install --save-dev webpack webpack-cli
   ```
2. **dotenv-webpack** (to load `.env` and replace `process.env.*` references):
   ```bash
   npm install --save-dev dotenv-webpack
   ```

---

## 4. Create a `.env` Locally (Not Committed)

1. In your project root, create a **`.env`** file.  
2. **Add a secret** (example):
   ```bash
   SECRET_NAME=michael-toop
   ```
3. **Add `.env`** to your **`.gitignore`** so you don’t commit it:
   ```bash
   # .gitignore
   .env
   dist/
   node_modules/
   ```

---

## 5. Create/Modify `webpack.config.js`

**`webpack.config.js`** (in your project root):

```js
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  // Use "production" for a minified build, "development" if you prefer unminified output
  mode: "production",

  // Entry point for your JS
  entry: "./config.js",

  // Output file and folder
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Creates a "dist" folder
  },

  plugins: [
    // Load variables from .env and replace process.env.* in code
    new Dotenv({
      // optional debug: true,
    }),
  ],
};
```

> **Note**: `dotenv-webpack` looks for `.env` in the same directory as `webpack.config.js` by default.

---

## 6. Create `config.js` with Your Secret Reference

**`config.js`** (same folder as `webpack.config.js`):

```js
// Force a side-effect so Webpack doesn't remove this code:
window.topBarCenterText = process.env.SECRET_NAME || "Ham Dashboard";

// rest of your code here, e.g.:
var layout_cols = 4;
var layout_rows = 3;

// etc...
// ...
```

- The important part is referencing `process.env.SECRET_NAME`. **dotenv-webpack** replaces that with your actual secret from `.env` at build time.

---

## 7. Reference the Bundle in `index.html`

Assume you have **`index.html`** in your root folder (or a `public` folder). In your HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Ham Dashboard</title>
  </head>
  <body>
    <!-- Your HTML content here -->

    <!-- Import the final bundle after building -->
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

- Now **after** you run the build, `dist/bundle.js` will contain the injected secret.

---

## 8. Add a Build Script in `package.json`

Open **`package.json`** and add a `"build"` script:

```json
{
  "name": "hamdashboard",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack"
  },
  "devDependencies": {
    "webpack": "^5.x.x",
    "webpack-cli": "^5.x.x",
    "dotenv-webpack": "^8.x.x"
  }
}
```

Now you can **build locally** with:
```bash
npm run build
```
This generates **`dist/bundle.js`** which includes `"michael-toop"` in place of `process.env.SECRET_NAME`.

**Don’t commit `dist/`**—it’s in your `.gitignore`.

---

## 9. Test Locally

1. **Build**:
   ```bash
   npm run build
   ```
2. **Open** `index.html` in a browser (or serve it via a local server).  
3. In the browser console (`F12` → Console), type:
   ```js
   console.log(window.topBarCenterText);
   ```
   You should see **`"michael-toop"`**.

---

## 10. Push to GitHub (Without .env and dist/)

1. **Commit** your source files (e.g., `config.js`, `index.html`, `webpack.config.js`, `package.json`, etc.), **not** `.env` or `dist/`.  
2. **Push** to your GitHub repo.

---

## 11. Configure Cloudflare Pages

1. In **Cloudflare Pages** → **Settings → Build & Deploy**:
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
2. **Environment Variables**:  
   - Add a variable **named** `SECRET_NAME` **(the same key)** with the **value** you want in production (for example, `"michael-toop"`).

When Cloudflare builds, it:

1. Runs `npm install`.  
2. Runs `npm run build`.  
3. **dotenv-webpack** sees the environment variable `SECRET_NAME` set by Cloudflare.  
4. Produces `dist/bundle.js` with the actual secret string.  
5. Serves the site from the `dist` folder.

---

## 12. Final Verification

- **Cloudflare Pages** will deploy your site.  
- Visit your Cloudflare Pages URL.  
- If your code references `topBarCenterText` (in console or your UI), you’ll see the **secret**.  
- You’ve **not** committed `.env` or `dist/`.  
- In GitHub, nobody sees your secret in the repo.  
- In Cloudflare, you manage the secret as an environment variable.

---

## Done!

**Recap** of essential points:

1. **Install** Node, npm, Webpack, dotenv-webpack.  
2. Create a **`.env`** locally with `SECRET_NAME=...` (ignored by Git).  
3. **`webpack.config.js`** uses `new Dotenv()` to replace `process.env.SECRET_NAME`.  
4. **`config.js`** references `process.env.SECRET_NAME`. Attach it to `window` or use an import/export so Webpack doesn’t strip it.  
5. **`npm run build`** → produces `dist/bundle.js` with your secret.  
6. **`.gitignore`** includes `.env` and `dist/`.  
7. **Push** your source only. Let **Cloudflare** do `npm run build` and set `SECRET_NAME` from its environment variables.  

You’ve now injected a secret at build time safely, both locally and on Cloudflare Pages!