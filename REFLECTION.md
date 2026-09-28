# Reflektion: Laboration 2 – Skriv en modul, inte en app

<!--
    Komplettera filen och lämna in den tillsammans med din Merge Request.
    Du får skriva på svenska eller engelska.
-->

## 1. Namngivning

| Namn             | Förklaring                                                                                                       | Reflektion och regler från Clean Code                                                                                                                                                                                                                                                                                                               |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GameControls`   | Klassen som fungerar som huvudpunkt för att hantera kontrollprofiler och input.                                  | Jag tycker att namnet är tydligt eftersom det beskriver klassens övergripande ansvar. `GameControls` ger också ett tydligt sammanhang för metoder som `press()`, `release()` och `isActionActive()`.                                                                 |
| `ControlProfile` | Representerar en uppsättning kontroller med actions, bindings och control groups.                                | Namnet beskriver tydligt vad objektet representerar och skiljer det från `GameControls`, som hanterar flera profiler. Jag tycker att detta följer principen om meningsfulla namn och meningsfulla distinktioner. Jag hade kunnat kalla den exempelvis `Profile`, men `ControlProfile` ger mer sammanhang och gör det tydligare vad profilen gäller. |
| `Action`         | Representerar en handling i spelet, exempelvis `Jump`, som kan ha en eller flera bindings.                       | `Action` är ett kort men meningsfullt namn, det är också lätt att uttala och söka efter. I kombination med exempelvis `addBinding()` och `isActive()` blir det tydligt vad en action betyder i modulen.                                                           |
| `Binding`        | Representerar kopplingen till en specifik input, exempelvis `SPACE`, och håller reda på om inputen är nedtryckt. | `Binding` är ett programmeringsbegrepp som passar bra för lösningen. Det följer Clean Code-regeln om att använda solution-domain-namn. Jag tycker också att namnet är bättre än exempelvis `InputData`, då `Data` är otydligt.                                                        |
| `ControlGroup`   | Representerar en grupp av actions som kan aktiveras eller inaktiveras tillsammans.                               | `ControlGroup` beskriver både vad objektet är och vilket sammanhang gruppen tillhör. Namnet gör skillnaden mot `Action` och `ControlProfile` tydlig. Jag tycker att detta är ett exempel på meaningful context: ordet `Group` ensamt hade varit för generellt.                          |

**Upptäckte du någon brist i din egen namngivning när du läste kapitlet om namngivning? Höll du med om alla "reglerna", eller finns det någon du ifrågasätter?**

**Svar:**

När jag läste kapitlet om meningsfulla namn upptäckte jag att jag generellt hade valt ganska tydliga namn i modulen. Namn som `GameControls`, `ControlProfile`, `Action`, `Binding` och `ControlGroup` beskriver de centrala koncepten och gör det möjligt att förstå mycket av koden utan att först läsa implementationen.

Att namn ska ge sammanhang är relevant för min kod. Exempelvis hade `Group` varit ett ganska generellt namn, medan `ControlGroup` direkt visar vad gruppen hör ihop med. På samma sätt hade `Profile` varit mindre tydligt än `ControlProfile`.

Jag håller också med om regeln att metoder bör ha namn som beskriver vad de gör. I min kod använder jag exempelvis `addAction()`, `bindAction()`, `press()`, `release()`, `enable()`, `disable()` och `isActive()`. Det gör att metodanropen går att förstå utan att läsa implementationen direkt.

Jag håller i stort sett med om reglerna i kapitlet. Däremot tycker jag inte att längre namn automatiskt är bättre än kortare namn. `Action` är exempelvis ett mycket kort namn, men eftersom det är ett centralt begrepp i modulen är det ändå tydligt. För mig är det viktigaste att namnet beskriver konceptet och att sammanhanget gör betydelsen tydlig.


## 2. Funktioner

| Metodnamn                       | Länk eller kod      | Antal rader (ej ws) | Reflektion                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------- | ------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getName()`                     | `Action.js`         | 1                   | Funktionen gör endast en sak: returnerar namnet på actionen. Den har inga argument och inga sidoeffekter. Detta följer principen om små funktioner och "Do One Thing".                                                                                                                                                                                                                                            |
| `disable()`                     | `Action.js`         | 1                   | Funktionen har ett tydligt ansvar: att inaktivera actionen. Den har inga argument och är enkel att förstå. Den ändrar objektets tillstånd, vilket är en avsiktlig sidoeffekt. Jag tycker ändå att sidoeffekten är tydlig eftersom metodnamnet beskriver kommandot.                                                                                                                                                |
| `addBinding(binding)`           | `Action.js`         | 5                   | Funktionen lägger till en binding om samma input inte redan finns. Den gör fortfarande en avgränsad sak, även om den innehåller kontrollogik. Namnet beskriver tydligt vad metoden gör och parametern `binding` beskriver vad som skickas in.                                                                                                                                                                     |
| `bindAction(actionName, input)` | `ControlProfile.js` | 17                  | Detta är en av de längre metoderna i modulen. Den hittar actionen, kontrollerar att inputen inte redan används av en annan action och skapar sedan en binding. Funktionen har fortfarande ett sammanhängande ansvar, men den är mer komplex än mina enklaste metoder. Detta är ett exempel där regeln om små funktioner är relevant och där metoden eventuellt skulle kunna delas upp om den fortsätter att växa. |
| `isActive()`                    | `Action.js`         | 13                  | Funktionen kontrollerar flera villkor för att avgöra om en action är aktiv: actionen måste vara aktiverad, minst en kontrollgrupp måste vara aktiverad om grupper används, och minst en binding måste vara nedtryckt. Den returnerar ett värde och ändrar inte objektets tillstånd. Jag tycker att den följer Command-Query Separation eftersom den frågar efter ett tillstånd utan att samtidigt ändra det.      |

**Upptäckte du någon brist i hur du tidigare skrivit funktioner/metoder när du läste kapitlet om funktioner? Höll du med om alla "reglerna", eller finns det någon du ifrågasätter?**

**Svar:**

När jag läste kapitlet såg jag att jag redan hade försökt hålla de flesta metoderna små och fokuserade. Många metoder gör bara en sak, till exempel `getName()`, `enable()`, `disable()`, `press()` och `release()`. Detta gör koden lättare att läsa eftersom metodernas ansvar går att förstå från både namnet och den korta implementationen.

Jag märkte också att `bindAction()` och `isActive()` är mer komplexa än flera av de andra metoderna. De innehåller flera kontroller och i `bindAction()` finns även loopar. Jag tycker fortfarande att deras logik hör ihop med metodens ansvar, men de visar att "Do One Thing" och regeln om små funktioner inte alltid är helt svartvita. En funktion kan innehålla flera steg och fortfarande ha ett sammanhängande syfte.

Jag tycker att kapitlets idé om att funktioner ska ligga på en tydlig abstraktionsnivå är användbar. Exempelvis behöver användaren av `GameControls` inte veta hur en `Binding` lagrar sitt tillstånd. Användaren kan istället använda `press()` och `release()` på en högre nivå.

Jag håller med om de flesta reglerna i kapitlet, särskilt att funktioner bör vara små, ha tydliga namn och göra en sak. Däremot tycker jag att man inte bör dela upp funktioner enbart för att uppfylla en viss radgräns. Om en funktion har ett tydligt och sammanhängande ansvar kan en något längre funktion ibland vara lättare att förstå än flera mycket små funktioner som tillsammans utför samma operation.


## 3. Din kodkvalitet

*Beskriv dina erfarenheter av att arbeta med din egen kodkvalitet i den här laborationen. Använd
vedertagna begrepp. (Cirka en halv sida.)*

Svar:

## 4. Att skriva en modul

*Hur var det att skriva kod för andra programmerare istället för en app med egna slutanvändare?
Vad blev din USP, och ändrades den under arbetets gång?*

Svar:

## 5. Testning

*Vilket av testalternativen valde du, och varför? Vad var svårast att testa i din modul?*

Svar:

## 6. AI-samarbete

*Använde du AI-assistenter (t.ex. ChatGPT, GitHub Copilot, Claude) annorlunda i den här
laborationen jämfört med laboration 1 — nu när uppgiften är en större, mer kvalitetskänslig modul
snarare än ett enkelt program? Var det till exempel till mer eller mindre hjälp vid design,
testning eller kodkvalitetsreflektionerna, eller valde du bort AI i delar där du använde det förra
gången?*

Svar:
