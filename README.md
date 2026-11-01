# SIDEQUEST · v1.0

**Make boredom playable.** A polished, minimal, installable iPhone web app with 120 original quests. No accounts, ads, payments, trackers, frameworks, build tools, or API keys.

## What's included

- 120 unique activities across **Adventure, Creative, Social, Chaos, Mind, and Wildcard** (20 in each)
- Filters for category, available time, indoor/outdoor, solo/friends
- Random quest picker, accept, finish, or skip
- **XP and leveling** (150 XP per level), with XP earned only once per unique quest
- Eight achievements, saved favorites, completion history, and progress
- Local-device storage with JSON backup export and import
- Offline PWA support; custom iPhone Home Screen icon
- Responsive, mobile-first minimalist design

The activities are optional, safe and free. Everyone can skip anything they don't want to do.

## Install on an iPhone using GitHub Pages (free)

### 1. Unzip

Right-click **SIDEQUEST_PWA_v1.zip** on your Windows computer and choose **Extract All**. Open the extracted folder.

### 2. Create a public repository

1. Go to <https://github.com/new> and sign in to a free GitHub account.
2. Name the repository **sidequest**.
3. Set visibility to **Public** (needed for GitHub Pages on free accounts).
4. Leave **Add a README file** unchecked, then click **Create repository**.

### 3. Upload the app's files

1. In the new repository choose **uploading an existing file**, or **Add file → Upload files**.
2. Select **everything inside** your unzipped `SIDEQUEST_PWA` folder, including the `assets` folder. Upload the files themselves — **not the ZIP file and not a parent folder**.
3. The repository's top level must contain `index.html`, `styles.css`, `app.js`, `quests.js`, `sw.js`, `manifest.webmanifest`, and the `assets` folder.
4. Click **Commit changes**.

If your browser does not support dragging folders, upload the top-level files first, then use **Add file → Upload files** to drag the full `assets` folder onto GitHub. Verify all icon files are under `assets/`.

### 4. Publish the website

1. In your repository click **Settings**.
2. In the left menu select **Pages**.
3. Under **Build and deployment**, set **Source → Deploy from a branch**.
4. Choose branch `main` and folder `/ (root)`; click **Save**.
5. After the Pages deployment completes, the **Visit site** link will point to `https://YOUR-USERNAME.github.io/sidequest/`.

Open the URL on your computer to check it first.

### 5. Install on iPhone

1. Open the GitHub Pages URL in **Safari** on your iPhone.
2. Tap the **Share** button (you may first need to open the Page Menu).
3. Choose **Add to Home Screen**. If missing, scroll to **Edit Actions** and enable it.
4. Enable **Open as Web App** when offered, then tap **Add**.
5. The **SIDEQUEST** icon will appear on the Home Screen. Open once while online to allow offline caching.

**Important:** GitHub Pages hosts the app publicly, but your personal quest history stays only on your iPhone in browser/app storage. No data is synced. Use Settings → Export progress for backups.

## Test on your computer without GitHub

You can double-click `index.html` for a basic preview, but service workers won't work from `file://`. To test the full PWA locally:

1. Install Python, if needed.
2. Open the extracted app folder in Windows File Explorer.
3. Click the Explorer address bar, type `cmd`, press Enter.
4. Enter `py -m http.server 8000`.
5. Visit `http://localhost:8000` on that computer.

The install and offline features require HTTPS in normal use. GitHub Pages provides that HTTPS for free; localhost is a special exception for testing. On your iPhone, use the GitHub Pages HTTPS URL instead of your PC's localhost address.

## Update the app later

Upload the modified files into the same GitHub repository and commit the changes. For offline-cached code changes, increment the version in `sw.js` (the `CACHE` string) so old files are replaced. Reload SIDEQUEST when it is online. Local progress normally survives file updates because it is stored separately, but keeping a backup is recommended.

## File guide

- `index.html` — app entry point and metadata
- `styles.css` — responsive minimalist UI
- `quests.js` — original 120-quest data
- `app.js` — filters, gameplay, stats, achievements, backups, local storage
- `sw.js` — offline caching
- `manifest.webmanifest` — PWA setup and launch scope
- `assets/` — custom icons and favicon

© SIDEQUEST demo project. Quests were written for this app.
