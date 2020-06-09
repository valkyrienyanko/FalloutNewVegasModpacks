<div align="center">
  
  [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=valkyrienyanko_FalloutNewVegasModpacks&metric=alert_status)](https://sonarcloud.io/dashboard?id=valkyrienyanko_FalloutNewVegasModpacks)
  [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=valkyrienyanko_FalloutNewVegasModpacks&metric=ncloc)](https://sonarcloud.io/dashboard?id=valkyrienyanko_FalloutNewVegasModpacks)
  [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=valkyrienyanko_FalloutNewVegasModpacks&metric=bugs)](https://sonarcloud.io/dashboard?id=valkyrienyanko_FalloutNewVegasModpacks)
  [![GitHub license](https://img.shields.io/github/license/valkyrienyanko/FalloutNewVegasModpacks?color=brightgreen)](https://github.com/valkyrienyanko/FalloutNewVegasModpacks/blob/master/LICENSE)
  [![Discord](https://img.shields.io/discord/453710350454620160.svg)](https://discord.gg/thMupbv)

</div>

<p align="center">A website that shows what modpacks people play with.
    <br>
</p>

## Preview
![Preview](https://i.imgur.com/q7F2QVV.png)

## Local Setup
View the latest deployments [here](https://github.com/valkyrienyanko/falloutnewvegasmods/deployments)
1. Clone `https://github.com/valkyrienyanko/falloutnewvegasmods.git`
2. Download and install `LTS` [Node.js](https://nodejs.org/en/)
3. Make sure you have yarn installed `npm i -g yarn`
4. Run `yarn install`
5. Get your [Nexus Mod Manager API Key](https://www.nexusmods.com/users/myaccount?tab=api%20access)
6. Create `.env` in project directory and put `APIKEY=yourApiKey`
7. Start server with `yarn dev:server`
8. Go to `http://localhost:4000`

## Contribute your Modpack Page

The purpose of creating your own modpack page is to allow others to see what kind of mods you play with. Follow the steps below to get started.

1. Fork the repository
2. Create your own modpack page with the following [TEMPLATE.md](https://github.com/valkyrienyanko/falloutnewvegasmods/blob/master/TEMPLATE.md)
3. Place the file in the root of the public directory when you are done
4. Create a pull request

## Contributing

Only read [CONTRIBUTING.md](https://github.com/valkyrienyanko/falloutnewvegasmods/blob/master/CONTRIBUTORS.md) if you are contributing to the websites server / client code.

Send me a message over discord at **valk#3277** if you have any questions.
