import { createBanner } from "./88x31";

const astext = `
astro
monero
// blockchain
tor
// i2p
// yggdrasil
// nymvpn
// ungoverned
// grapheneos
firefox
// ghostty
// localsend
// linux
git
obsidian
// beets
// caddy
docker
// cryptography
rust
typescript
`;

const banners = astext
  .trim()
  .split("\n")
  .filter((banner) => !banner.startsWith("//"));
banners.forEach(async (banner) => await createBanner(banner));
