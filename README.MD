# Welkom - Aspire Demo

Dit voorbeeld is gemaakt door Paul Appeldoorn en door iedereen vrij te gebruiken.

🔗 Website: [apula.nl](https://apula.nl) \
🔗 Youtube: [@AppiePau](https://www.youtube.com/@Appiepau) \
🔗 LinkedIn: [@Apula](https://www.linkedin.com/company/apula) \
🔗 GitHub: [github.com/AppiePau](https://github.com/AppiePau)

📜 Licentie: MIT

## Vereiste tools
Voor deze demo moet je minimaal geinstalleerd hebben:
* .NET 9.0 SDK.
* Node.Js v20.16 of hoger.

## Dit voorbeeld starten
Om deze demo te kunnen starten moet je eerst de NPM packages installeren:

Ga naar de map `frontend` en voer uit: `npm i`

Ga terug naar de hoofdmap en voer uit: `dotnet run -project aspire.apphost`


# Naslagwerk
Om zelf aan de gang te gaan is dit hoofdstuk gewijd aan de aanpassingen. Een soort van checklijst om stap voor stap na te gaan wat je moet doen.

## Aspire installeren

Installeer de templates

```sh
dotnet new install Aspire.ProjectTemplates::9.00
```

> [!WARNING] 
> Als je al gebruikt maakt van de dotnet workload, deinstalleer deze dan eerst. `donet workload unintall aspire`

Creer een project map om je nieuwe Aspire AppHost in te maken:

```sh
mkdir aspire.apphost
cd aspire.apphost
dotnet new aspire-apphost
```

Voeg je aspire-apphost project to aan de solution file (.sln):
```sh
dotnet sln add aspire-apphost
```

## Aanpassingen in projecten

De volgende aanpassingen zijn gedaan bij het maken van dit voorbeeld. Deze zitten al in deze demo en dienen hier alleen als naslagwerk.

In de Aspire.AppHost map:

```sh
dotnet add package Aspire.Hosting.NodeJs
```

In een nieuw Angular 18 project is de service HttpClient niet standaard inbegrepen. Deze kan als volgt worden toegevoegd.

app.config.ts
```js
providers: [...,
    provideHttpClient(),
    ...]
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

