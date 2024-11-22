# Welkom

Dit voorbeeld is gemaakt door Paul Appeldoorn en door iedereen vrij te gebruiken.

🔗 Website: [www.apula.nl](https://www.apula.nl) \
🔗 Youtube: [@AppiePau](https://www.youtube.com/@Appiepau) \
🔗 LinkedIn: [@Apula](https://www.linkedin.com/company/apula) \
🔗 GitHub: [@Apula](https://github.com/AppiePau)

📜 Licentie: MIT

## Vereiste tools
Voor deze demo moet je minimaal geinstalleerd hebben:
* .NET 9.0 SDK
* NodeJS v20.16 of hoger

## Dit voorbeeld starten
Om deze demo te kunnen starten moet je eerst de NPM packages installeren:

Ga naar de map `frontend` en voer uit: `npm i`

Ga terug naar de hoofdmap en voer uit: `dotnet run -p AspireDemo.AppHost`


# Naslagwerk
Om zelf aan de gang te gaan is dit hoofdstuk gewijd aan de aanpassingen. Een soort van checklijst om stap voor stap na te gaan wat je moet doen.

## Aspire installeren

Aller eerst moet de .NET workload bijgewerkt worden. Dit zijn templates om projecten aan te maken. Daar zit standaard geen Aspire in. Gebruik `dotnet workload list` om dit overzicht te krijgen.

Voor de volgende opdrachten met beheer rechten uit:

```sh
dotnet workload update
dotnet workload install aspire
```

In de solution map voer de volgende opdracht uit:

```sh
dotnet new aspire
```

## Aanpassingen in projecten

De volgende aanpassingen zijn gedaan bij het maken van dit voorbeeld. Deze zitten al in deze demo en dienen hier alleen als naslagwerk.

In de Aspire.AppHost map:

```sh
dotnet add package Aspire.Hosting.NodeJs
```

app.config.ts
```js
    provideHttpClient()
```

Package.json

```json
{
    "ng": "ng",
    "start": "run-script-os",
    "start:win32": "ng serve --port %PORT%",
    "start:default": "ng serve --port $PORT",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
}
```

Dev dependency:

```json
{
    "run-script-os": "^1.1.6"
}
```

