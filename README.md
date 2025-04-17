# Finyze
Application for tracking and analyzing your financial portfolio.

~Track Smarter. Invest Better.

## Features

* Connect exchanges/brokerages via APIs (e.g., Binance, Coinbase, XTB, etc.)

* Real-time profit/loss, historical charts, alerts

* Support for multiple currencies + automatic FX rate tracking
  
## Monetization:

* Only one portfolio for free, need to buy subscription to have more.
* AI-based price prediction of assets
* Integration with other platforms to automatically fetch the assets e.g fetch owned stocks from XTB

## Tech Stack

| Layer | Technology | Notes |
| ------- | ---------- |------|
| Frontend | Angular (TypeScript) | Strong structure, built-in state mgmt, RxJS for reactivity |
| Backend | Spring Boot (Java) | REST APIs |
| Database | PostgreSQL | Secure and relational |
| APIs | CoinGecko (Crypto), Twelve Data/Yahoo Finance (Stocks) | 
| Charts | ngx-charts / Chart.js / ApexCharts | Angular-compatible libraries |

## Implementation

### Frontend
* Login / Register
* Dashboard (Portfolio view)
* Add/Edit Assets
* Graphs & Charts (e.g., Recharts, Chart.js)
* Real-time value refresh
* Dark mode toggle 🌗

### Backend

Split into microservices if needed later:

#### Auth Service
* Manages user login (via Firebase or Keycloak)
* JWT token generation / validation

#### Portfolio Service
* CRUD operations on user assets
* Calculate profit/loss based on entry prices
* Portfolio total value aggregation

#### Price Service
* Fetches latest prices from:
  * CoinGecko API (crypto)
  * Twelve Data / Yahoo (stocks)
* Cache frequently accessed prices (e.g., Redis)
* Optionally push updates via WebSockets

#### Analytics Service (Optional for later)
* Historical charts
* Performance over time
* Asset allocation breakdown

#### Database
* PostgreSQL:
  * Users
  * Portfolios
  * Transactions
  * Watchlists, settings
* Optionally cache price data with Redis
