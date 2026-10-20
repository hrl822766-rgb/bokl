# חבר על ארבע

אתר מידע סטטי בעברית לטיפול בחיות מחמד. האתר משתמש ב-HTML, CSS ו-JavaScript רגילים, ללא שרת, התקנות או משתני סביבה.

## פרסום ב-Render

### אפשרות מומלצת: פרסום לפי Blueprint

1. העלו את המאגר ל-GitHub וודאו שהקבצים `index.html`,‏ `style.css`,‏ `script.js` ו-`render.yaml` נמצאים בענף שברצונכם לפרסם.
2. היכנסו ל-[Render](https://dashboard.render.com/) וחברו את חשבון GitHub אם צריך.
3. בחרו **New +** ואז **Blueprint**.
4. בחרו את המאגר ואת הענף. Render יקרא את `render.yaml` ויציג שירות מסוג **Static Site** בשם `bokl`.
5. אשרו את יצירת השירות. בסיום הפריסה, Render יציג קישור לאתר.

### הגדרה ידנית

ב-Render בחרו **New +** ואז **Static Site**, חברו את מאגר GitHub והגדירו:

| הגדרה ב-Render | ערך |
| --- | --- |
| Branch | הענף שברצונכם לפרסם, למשל `main` |
| Root Directory | להשאיר ריק |
| Build Command | `echo "No build required"` |
| Publish Directory | `.` |

אין לבחור **Web Service**: האתר אינו זקוק לשרת Node.js או לפקודת הפעלה. אין צורך להגדיר משתני סביבה. אחרי שמירה, Render יבנה ויפרסם את האתר; אפשר למצוא את כתובת האתר בכרטיס השירות.

### העלאת הקבצים ל-GitHub

אם הקבצים עדיין לא הועלו למאגר, הריצו מתוך תיקיית הפרויקט:

```sh
git add README.md index.html script.js style.css render.yaml
git commit -m "Add Render static site configuration"
git push origin main
```

אם הענף שלכם אינו `main`, החליפו את `main` בשם הענף הנכון גם בפקודת `git push` וגם בבחירת הענף ב-Render. לאחר העלאות נוספות ל-GitHub, Render יפרסם אותן מחדש אוטומטית.

## הרצה מקומית

פתחו את `index.html` בדפדפן. לחלופין, מתוך תיקיית הפרויקט אפשר להריץ:

```sh
python3 -m http.server 8000
```

ואז לפתוח את `http://localhost:8000`.
