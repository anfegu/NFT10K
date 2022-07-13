# Moralis Mutants NFT Collection | Generative Art Engine

🧟‍♀️🧟‍♂️ Welcome to Rekt City on behalf of its horribly mutated survivors. 🧟‍♀️🧟‍♂️

## About

Aim: Save time and resources for artists and developers by allowing them to generate and host NFT art, across blockchains, in one place (utilising Moralis).

These tutorial videos are a great introduction.
Part 1: [Link to Moralis YouTube Video](https://youtu.be/KBV4FrCv4ps)
Part 2: [Link to Moralis YouTube Video](https://youtu.be/FcH7qXnOgzs)

## Quick Launch 🚀

Via terminal, navigate to root directory:

```sh
npm install

```

Go to [Moralis.io](https://moralis.io/) to create your server instance. Then rename .env-example file to .env and add your Moralis server credentials.

_Note_: To find your xAPI key: https://deep-index.moralis.io/api-docs/#/storage/uploadFolder

Create your layered artwork and split into folders in `./input` and configure your collection to match your layer structure and preferences accordingly by editing `./input/config.js`:

Finally, via terminal in the project directory run:

```sh
node index.js

```

This injects the mutagen that will bring your Moralis mutants ALIVE!

## Minting ⛓

Via terminal, navigate to root directory:

```sh
npx hardhat run deploy.js --network moralisNode

```
To compile on moralisNode with your own account, change in the .env-change file the constant PRIVATE_KEY = "your own Metamask private key"
To deploy to another network, you can change moralisNode to: local or hardhat
For local changes to the .env file, constant LOCAL_PRIVATE_KEY = "one of the private keys generated with 'npx hardhat node' or taken from Ganache node: http:localhost:8545"
Finally rename ".env-change" file for ".env"

## Dependencies 🏗

`moralis`: [ℹ️ Docs](https://docs.moralis.io/)

`canvas`: [ℹ️ Docs](https://www.npmjs.com/package/canvas)

## Todos ✅

- [x] NFT contract allowing tokens to be minted and tranferred for Opensea.
- [ ] Users can mint NFT collection via custom dapp frontend.
- [ ] Compatibility across-chains (SOL/MATIC).
- [ ] Much more TBA.

## Community BUIDLing 👨‍🔧👩‍🔧

- [Moralis Forum](https://forum.moralis.io/)
- [Moralis Discord](https://discord.com/channels/819584798443569182)
- [Moralis GitHub](https://github.com/MoralisWeb3)
- [Moralis YouTube](https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw)
