# Defillama API

A javascript wrapper around the defillama api. Complete with docs and tests.

## Install

```
npm install defillama-api

```

## Get started

```javascript
import defillama from "defillama-api";

const response = await defillama.tvl.protocols();
const data = await response.json();
```

## API documentation

[Official Defillama api docs](https://defillama.com/docs/api)

## API overview

The defillama api consists of different categories. Each of these categories can be acccessed with their matching name.

### Categories

- TVL
- coins
- stablecoins
- yields
- abi-decoder
- bridges
- volumes
- fees and revenue

### Mapping

#### TVL

- `defillama.tvl.protocols()` - /protocols
- `defillama.tvl.protocol(protocol)` - /protocols/{protocol}
- `defillama.tvl.current(protocol)` - /tvl/{protocol}
- `defillama.tvl.chainsHistorical()` - /v2/historicalChainTvl
- `defillama.tvl.chainHistorical(chain)` - /v2/historicalChainTvl/{chain}
- `defillama.tvl.charts()` - /charts
- `defillama.tvl.chainCharts(chain)` - /charts/{chain}
- `defillama.tvl.chains()` - /chains

#### coins

- `defillama.coins.pricesCurrent()` - /protocols
- `defillama.coins.pricesFirst(protocol)` - /protocols/{protocol}
- `defillama.coins.pricesHistorical(protocol)` - /tvl/{protocol}
- `defillama.coins.chart()` - /v2/historicalChainTvl
- `defillama.coins.percentage(chain)` - /v2/historicalChainTvl/{chain}
- `defillama.coins.block()` - /charts

#### stablecoins

- `defillama.stablecoins.all(params)` - /stablecoins
- `defillama.stablecoins.chartAll(params)` - /stablecoincharts/all
- `defillama.stablecoins.historyChain(chain, params)` - /stablecoincharts/{chain}
- `defillama.stablecoins.historyAsset(stablecoinId)` - /stablecoin/{stablecoinId}
- `defillama.stablecoins.overviewChains(chain)` - /stablecoinchains
- `defillama.stablecoins.historyPrices()` - /stablecoinprices

#### yields

- `defillama.yields.pools()` - /pools
- `defillama.yields.chartPool(pool)` - /chart/{pool}

#### abi-decoder

- `defillama.abiDecoder.getABI(params)` - /fetch/signature
- `defillama.abiDecoder.getVerboseABI(chain, address, params)` - /fetch/contract/{chain}/{address}

#### bridges

- `defillama.bridges.all(params)` - /bridges
- `defillama.bridges.summary(bridgeId)` - /bridge/{bridgeId}
- `defillama.bridges.historyVolume(chain, params)` - /bridgevolume/{chain}
- `defillama.bridges.statsDay(timestamp, chain, params)` - /bridgedaystats/{timestamp}/{chain}
- `defillama.bridges.transactions(id, params)` - /transactions/{id}

#### volumes

- `defillama.volumes.dexsAll(params)` - /overview/dexs
- `defillama.volumes.dexsChain(chain, params)` - /overview/dexs/{chain}
- `defillama.volumes.dexsProtocol(protocol, params)` - /summary/dexs/{protocol}
- `defillama.volumes.dexsOptions(params)` - /overview/options
- `defillama.volumes.dexsOptionsChain(chain, params)` - /overview/options/{chain}
- `defillama.volumes.dexsOptionsProtocol(protocol, params)` - /summary/options/{protocol}

#### fees and revenue

- `defillama.feesRevenue.all(params)` - /overview/fees
- `defillama.feesRevenue.chain(chain, params)` - /overview/fees/{chain}
- `defillama.feesRevenue.protocol(protocol, params)` - /summary/fees/{protocol}

## Contributing

Defillama is shipping fast and things will change, if you see new or changed things, feel free to open an issue and/or contribute.

Other things that need to happen:

- [ ] Add CI.
- [ ] If needed, more tests.
