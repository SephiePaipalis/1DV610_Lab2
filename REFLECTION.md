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

| Metodnamn | Länk eller kod | Antal rader (ej ws) | Reflektion |
| --------- | --------------- | -------------------- | ---------- |
|           |                 |                       |            |
|           |                 |                       |            |
|           |                 |                       |            |
|           |                 |                       |            |
|           |                 |                       |            |

*Upptäckte du någon brist i hur du tidigare skrivit funktioner/metoder när du läste kapitlet om
funktioner? Höll du med om alla "reglerna", eller finns det någon du ifrågasätter?*

Svar:

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
