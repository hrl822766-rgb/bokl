const animals = [
  {
    id: "dog", name: "כלב", emoji: "🐕", type: "mammal", category: "יונק",
    description: "חבר נאמן שאוהב חברה, טיולים ומשחק.",
    color: "#f5eee2", tag: "טיולים, חברה ומשחק",
    food: "מזון מלא שמותאם לגיל, לגודל ולמצב הבריאותי שלו, עם מים טריים בכל זמן. אפשר לתת חטיפים לכלבים במידה ובהתאם להנחיות הווטרינר.",
    avoid: "שוקולד, ענבים וצימוקים, בצל, שום, קסיליטול (ממתיק), אלכוהול ועצמות מבושלות עלולים להיות מסוכנים. במקרה שאכל משהו חשוד, פנו מיד לווטרינר.",
    care: "טיולים ופעילות בכל יום, חברה, חיסונים וטיפול מונע. צרכי הפעילות והטיפוח משתנים מאוד לפי הגזע, הגיל והבריאות.",
    never: "לא משאירים כלב ברכב חם, לא מענישים באלימות ולא נותנים תרופות של בני אדם בלי הוראה מפורשת מווטרינר."
  },
  {
    id: "cat", name: "חתול", emoji: "🐈", type: "mammal", category: "יונק",
    description: "סקרן ועצמאי, אבל תמיד שמח למקום בטוח.",
    color: "#f1e8df", tag: "מקום בטוח ומגרדת",
    food: "מזון מלא לחתולים שמתאים לגיל ולמצב הבריאותי, מים נקיים וזמינים. חתולים זקוקים לתזונה שמיועדת במיוחד להם.",
    avoid: "בצל, שום, שוקולד, ענבים וצימוקים ואלכוהול מסוכנים. גם צמחי בית מסוימים, ובהם שושן צחור, עלולים להיות רעילים מאוד לחתולים.",
    care: "ארגז חול נקי, מתקן גירוד, משחק יומיומי, מקום מסתור ובדיקות וטרינריות. חתולים רבים אוהבים לבחור מתי ואיך מקבלים מגע.",
    never: "לא נותנים תרופות של בני אדם, לא מאפשרים גישה לצמחים לא מזוהים ולא משנים מזון או טיפול רפואי בלי ייעוץ מקצועי."
  },
  {
    id: "rabbit", name: "ארנב", emoji: "🐇", type: "mammal", category: "יונק",
    description: "עדין וחברותי, צריך מרחב ותנועה חופשית.",
    color: "#e9eee3", tag: "חציר, מרחב ושקט",
    food: "חציר דשא איכותי צריך להיות זמין כל הזמן. תזונתו כוללת גם ירוקים מתאימים ומים, וכופתיות בכמות מדודה ובהתאמה לגיל.",
    avoid: "לא נותנים שוקולד, אבוקדו, בצל, שום או מאכלים מתוקים ומעובדים. מזונות חדשים מכניסים בהדרגה ובהתייעצות עם וטרינר שמכיר ארנבים.",
    care: "מרחב בטוח לקפיצה, מקום מסתור, דברים לכרסום בעדינות וגישה לווטרינר שמנוסה בטיפול בארנבים. שינוי בתיאבון או בצואה דורש פנייה מהירה.",
    never: "לא מרימים באוזניים ולא משאירים לבד בחוץ או עם חיית מחמד אחרת ללא השגחה."
  },
  {
    id: "parrot", name: "תוכי", emoji: "🦜", type: "bird", category: "ציפור",
    description: "חכם וחברתי, צריך עניין וחברה בכל יום.",
    color: "#f7eddb", tag: "חברה, משחקים והעשרה",
    food: "תזונה מאוזנת ומותאמת למין התוכי — לרוב כופתיות ייעודיות, ירקות מתאימים ומים טריים. הרכב התפריט משתנה בין מינים.",
    avoid: "אבוקדו, שוקולד, קפאין, אלכוהול, בצל ושום עלולים להזיק. היזהרו גם מאדי כלי בישול מסוימים, עשן וריחות חזקים.",
    care: "חברה ותעסוקה, כלוב מרווח ובטוח, שעות שינה שקטות ובדיקות אצל וטרינר ציפורים. חשוב ללמוד מהם הצרכים של המין הספציפי.",
    never: "לא נותנים לעוף בחדר עם חלונות פתוחים, מאוורר פועל או בעלי חיים אחרים ללא הגנה והשגחה."
  },
  {
    id: "turtle", name: "צב", emoji: "🐢", type: "reptile", category: "זוחל",
    description: "רגוע ומיוחד — וזקוק לסביבה מתאימה.",
    color: "#e8eee4", tag: "סביבה נכונה למין שלו",
    food: "התזונה תלויה במין: צבי יבשה וצבי מים אוכלים דברים שונים. צריך לברר את המין המדויק ולתכנן תזונה עם וטרינר זוחלים.",
    avoid: "לא נותנים מזון של כלבים או חתולים, מוצרי חלב או מזון מתובל. מזון שאינו מתאים למין עלול לגרום לבעיות בריאות.",
    care: "תנאי מחיה, חימום, תאורת UVB ומים מתאימים למין ולגיל. סביבת המחיה צריכה להיות בטוחה וגדולה מספיק.",
    never: "לא אוספים צב בר ולא משחררים צב מחמד לטבע. החזקה או סחר בחלק מהמינים עשויים להיות מוגבלים בחוק."
  },
  {
    id: "fish", name: "דג", emoji: "🐠", type: "fish", category: "דג",
    description: "שקט וצבעוני, עם עולם שלם מתחת למים.",
    color: "#e4eff1", tag: "מים נקיים ויציבים",
    food: "מזון שמתאים למין הדג ובכמות קטנה שהדגים אוכלים במהירות. סוג המזון וגודל המנה משתנים בין דגים.",
    avoid: "לא מאכילים יתר על המידה ולא נותנים פירורי לחם או שאריות מהשולחן. עודפי מזון מלכלכים את המים ופוגעים באיכותם.",
    care: "אקווריום מתאים למין ולמספר הדגים, מסנן תקין, בדיקה ושמירה על איכות המים ושינויים הדרגתיים בסביבה.",
    never: "לא שמים דג בקערה קטנה בלי לברר את צרכיו ולא מחליפים את כל המים בבת אחת."
  }
];

const grid = document.querySelector("#animal-grid");
const search = document.querySelector("#animal-search");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#animal-dialog");
const dialogContent = document.querySelector("#dialog-content");
let selectedFilter = "all";

function renderAnimals() {
  const query = search.value.trim().toLocaleLowerCase("he");
  const visibleAnimals = animals.filter((animal) => {
    const matchesFilter = selectedFilter === "all" || animal.type === selectedFilter;
    const matchesSearch = `${animal.name} ${animal.description} ${animal.category}`.toLocaleLowerCase("he").includes(query);
    return matchesFilter && matchesSearch;
  });

  grid.innerHTML = visibleAnimals.map((animal) => `
    <button class="animal-card" type="button" data-animal="${animal.id}" style="--card-color:${animal.color}" aria-label="מידע על ${animal.name}">
      <span class="animal-card-content">
        <span class="animal-emoji" aria-hidden="true">${animal.emoji}</span>
        <span class="animal-name">${animal.name}</span>
        <span class="animal-description">${animal.description}</span>
        <span class="card-meta">${animal.tag}</span>
      </span>
      <span class="card-arrow" aria-hidden="true">↙</span>
    </button>
  `).join("");
  emptyState.hidden = visibleAnimals.length > 0;
}

function showAnimal(animal) {
  dialogContent.innerHTML = `
    <div class="dialog-header">
      <span class="dialog-emoji" style="--card-color:${animal.color}" aria-hidden="true">${animal.emoji}</span>
      <div><h2 id="dialog-title">${animal.name}</h2><p>${animal.category} · ${animal.description}</p></div>
    </div>
    <section class="detail-block"><h3>🥣 מה אוכלים?</h3><p>${animal.food}</p></section>
    <section class="detail-block"><h3>⚠️ ממה להיזהר?</h3><p>${animal.avoid}</p></section>
    <section class="detail-block"><h3>♡ איך דואגים להם?</h3><p>${animal.care}</p></section>
    <section class="detail-block"><h3>🚫 מה לא לעשות?</h3><p>${animal.never}</p></section>
    <p class="dialog-disclaimer">המידע כללי בלבד. הצרכים משתנים לפי מין, גיל ומצב רפואי. במקרה של חשש להרעלה או שינוי בריאותי — פנו מיד לווטרינר.</p>
  `;
  dialog.showModal();
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedFilter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderAnimals();
  });
});

search.addEventListener("input", renderAnimals);
grid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-animal]");
  if (!card) return;
  const animal = animals.find((entry) => entry.id === card.dataset.animal);
  if (animal) showAnimal(animal);
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    search.focus();
  }
});

renderAnimals();
