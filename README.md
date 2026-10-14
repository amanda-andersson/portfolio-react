# Portfolio

Min personliga portfolio skapad som en del av kursen JavaScript-ramverk på Medieinstitutet.

Portfolion är byggd med React och TypeScript och innehåller information om mig, mina kompetenser och ett urval av projekt som jag har arbetat med under utbildningen och på egen hand.

## Tekniker

- React
- TypeScript
- Vite
- CSS
- Git & GitHub

## Funktioner

- Responsiv design för mobil och desktop
- Projekt skapade från separat projektdata
- Filtrering av projekt utifrån flera valda tekniker
- Kontaktformulär med validering och felmeddelanden
- Mobil navigation med hamburgermeny
- Animation på LIA-kortet
- Separat CV-sida

## Kör projektet lokalt

Klona projektet:

git clone https://github.com/amanda-andersson/portfolio-react.git

Gå in i projektmappen:

cd portfolio-react

Installera dependencies:

npm install

Starta projektet:

npm run dev

## Live

Vercel: LÄNK KOMMER

## Design

Figma:
LÄNK KOMMER

## Reflektion

Jag valde att dela upp portfolion i flera komponenter för att göra projektet tydligare och enklare att arbeta med. De olika delarna av sidan, till exempel Header, Hero, About, Projects, Skills och Contact, ligger därför i egna komponenter. Projektinformationen ligger separat från komponenterna och hämtas in i Projects där projektkorten skapas med map. På så sätt behöver jag inte skriva samma struktur flera gånger.

Jag använder state på de ställen där innehållet faktiskt behöver förändras. I projektsektionen används en array för de valda teknikerna. Det gör att användaren kan välja flera filter samtidigt och även ta bort valen igen. I kontaktformuläret används state för formulärets innehåll, felmeddelanden och meddelandet som visas när formuläret är korrekt ifyllt. Mobilmenyn använder också state för att hålla reda på om menyn är öppen eller stängd.

Om jag skulle fortsätta utveckla portfolion skulle jag bland annat vilja arbeta vidare med animationer och göra kontaktformuläret möjligt att använda för att faktiskt skicka meddelanden. Jag skulle också kunna göra projektinformationen ännu mer detaljerad och lägga till nya projekt efter hand.

Jag har använt ChatGPT som stöd under arbetet. Jag har bland annat använt det för att diskutera struktur och design, få hjälp vid felsökning och få förslag på hur vissa delar av React- och CSS-koden kan lösas. Jag har sedan testat lösningarna i projektet och anpassat dem efter min design och uppgiftens krav.
