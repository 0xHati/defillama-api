# Defillama API

A javascript wrapper around the defillama api.

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

- [TVL](#tvl)
- [coins](#coins)
- [stablecoins](stablecoins)
- [yields](#yields)
- [abi-decoder](#abi-decoder)
- [bridges](#bridges)
- [volumes](#volumes)
- [fees and revenue](#fees-and-revenue)

### Overview

#### TVL

| Category   |      Method      |  Endpoint |
|:----------:|-----------------|-----------|
|TVL         |`defillama.tvl.protocols()` | /protocols |
|TVL         |`defillama.tvl.protocol(protocol)` | /protocols/{protocol} |
|TVL         |`defillama.tvl.current(protocol)` | /tvl/{protocol} |
|TVL         |`defillama.tvl.chainsHistorical()` | /v2/historicalChainTvl |
|TVL         |`defillama.tvl.chainHistorical(chain)` | /v2/historicalChainTvl/{chain} |
|TVL         |`defillama.tvl.charts()` | /charts |
|TVL         |`defillama.tvl.chainCharts(chain)` | /charts/{chain} |
|TVL         |`defillama.tvl.chains()` | /chains |

#### coins

| Category   |      Method      |  Endpoint |
|:----------:|-----------------|-----------|
|coins         |`defillama.coins.pricesCurrent()` | /prices/current/{coins} |
|coins         |`defillama.coins.pricesFirst(protocol)` | /prices/first/{coins} |
|coins         |`defillama.coins.pricesHistorical(protocol)` | /prices/historical/{timestamp}/{coins}|
|coins         |`defillama.coins.batchHistorical` | /batchHistorical |
|coins         |`defillama.coins.chart()` | /chart/{coins} |
|coins         |`defillama.coins.percentage(chain)` | /percentage/{coins} |
|coins         |`defillama.coins.block()` | /block/{chain}{timestamp} |

#### stablecoins

| Category   |      Method      |  Endpoint |
|:----------:|-----------------|-----------|
|stablecoins         |`defillama.stablecoins.all(params)` | /stablecoins |
|stablecoins         |`defillama.stablecoins.chartAll(params)` | /stablecoincharts/all |
|stablecoins         |`defillama.stablecoins.historyChain(chain, params)` | /stablecoincharts/{chain} |
|stablecoins         |`defillama.stablecoins.historyAsset(stablecoinId)` | /stablecoin/{stablecoinId} |
|stablecoins         |`defillama.stablecoins.overviewChains(chain)` | /stablecoinchains |
|stablecoins         |`defillama.stablecoins.historyPrices()` | /stablecoinprices |

#### yields

| Category   |      Method      |  Endpoint |
|:----------:|-----------------|-----------|
|yields         |`defillama.yields.pools()` | /pools |
|yields         |`defillama.yields.chartPool(pool)` | /chart/{pool}|

#### abi-decoder

| Category   |      Method      |  Endpoint |
|:----------:|-----------------|-----------|
|abi-decoder         |`defillama.abiDecoder.getABI(params)` | /fetch/signature|
|abi-decoder          |`defillama.abiDecoder.getVerboseABI(chain, address, params)` | /fetch/contract/{chain}/{address}|

#### bridges

| Category   |      Method      |  Endpoint |
|:----------:|-----------------|-----------|
|bridges        |`defillama.bridges.all(params)` | /bridges|
|bridges        |`defillama.bridges.summary(bridgeId)` |  /bridge/{bridgeId}|
|bridges        |`defillama.bridges.historyVolume(chain, params)` | /bridgevolume/{chain}|
|bridges        |`defillama.bridges.statsDay(timestamp, chain, params)` | /bridgedaystats/{timestamp}/{chain}|
|bridges        |`defillama.bridges.transactions(id, params)` |  /transactions/{id}|

#### volumes

| Category   |      Method      |  Endpoint |
|:----------:|-----------------|-----------|
|volumes        |`defillama.volumes.dexsAll(params)` |  /overview/dexs|
|volumes        |`defillama.volumes.dexsChain(chain, params)` |  /overview/dexs/{chain}|
|volumes        |`defillama.volumes.dexsProtocol(protocol, params)` |  /summary/dexs/{protocol}|
|volumes        |`defillama.volumes.dexsOptions(params)` |  /overview/options|
|volumes        |`defillama.volumes.dexsOptionsChain(chain, params)` |  /overview/options/{chain}|
|volumes        |`defillama.volumes.dexsOptionsProtocol(protocol, params)` |  /summary/options/{protocol}|

#### fees and revenue    

| Category   |      Method      |  Endpoint |
|:----------:|-----------------|-----------|
|fees and revenue        |`defillama.feesRevenue.all(params)` |  /summary/options/{protocol}|
|fees and revenue        |`defillama.feesRevenue.chain(chain, params)` |  /overview/fees/{chain}|
|fees and revenue        |`defillama.feesRevenue.protocol(protocol, params)` |  /summary/fees/{protocol}|



## Contributing

Defillama is shipping fast and things will change, if you see new or changed things, feel free to open an issue and/or contribute.

Other things that need to happen:

- [ ] Add CI.
- [ ] If needed, more tests.
