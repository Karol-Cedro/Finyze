-- USERS
INSERT INTO users (id, username, email, password)
VALUES (1, 'karol', 'karol@example.com', 'hashedpassword123');

INSERT INTO users (id, username, email, password)
VALUES (2, 'alice', 'alice@example.com', 'hashedpassword456');

-- PORTFOLIOS
INSERT INTO portfolios (id, name, user_id)
VALUES (1, 'Risky Portfolio', 1);

INSERT INTO portfolios (id, name, user_id)
VALUES (2, 'Safe Portfolio', 1);

INSERT INTO portfolios (id, name, user_id)
VALUES (3, 'Balanced Portfolio', 2);

-- ASSETS
INSERT INTO assets (id, symbol, name, currency, asset_type)
VALUES (1, 'BTC', 'Bitcoin', 'USD', 'CRYPTO');

INSERT INTO assets (id, symbol, name, currency, asset_type)
VALUES (2, 'ETH', 'Ethereum', 'USD', 'CRYPTO');

INSERT INTO assets (id, symbol, name, currency, asset_type)
VALUES (3, 'AAPL', 'Apple Inc.', 'USD', 'STOCK');

INSERT INTO assets (id, symbol, name, currency, asset_type)
VALUES (4, 'TSLA', 'Tesla Inc.', 'USD', 'STOCK');

INSERT INTO assets (id, symbol, name, currency, asset_type)
VALUES (5, 'US10Y', 'US 10Y Treasury Bond', 'USD', 'BOND');

INSERT INTO assets (id, symbol, name, currency, asset_type)
VALUES (6, 'EUR', 'Euro', 'USD', 'CURRENCY');

-- TRANSACTIONS (sample buys)
-- Karol's Risky Portfolio
INSERT INTO transactions (id, portfolio_id, asset_id, quantity, purchase_price, timestamp)
VALUES (1, 1, 1, 0.10, 40000, '2025-01-01 10:00:00');

INSERT INTO transactions (id, portfolio_id, asset_id, quantity, purchase_price, timestamp)
VALUES (2, 1, 1, 0.20, 30000, '2025-02-01 10:00:00');

INSERT INTO transactions (id, portfolio_id, asset_id, quantity, purchase_price, timestamp)
VALUES (3, 1, 4, 5, 200, '2025-03-01 10:00:00');

-- Karol's Safe Portfolio
INSERT INTO transactions (id, portfolio_id, asset_id, quantity, purchase_price, timestamp)
VALUES (4, 2, 5, 1000, 98.5, '2025-01-15 10:00:00');

INSERT INTO transactions (id, portfolio_id, asset_id, quantity, purchase_price, timestamp)
VALUES (5, 2, 6, 5000, 1.10, '2025-02-15 10:00:00');

-- Alice's Balanced Portfolio
INSERT INTO transactions (id, portfolio_id, asset_id, quantity, purchase_price, timestamp)
VALUES (6, 3, 1, 0.05, 35000, '2025-01-20 10:00:00');

INSERT INTO transactions (id, portfolio_id, asset_id, quantity, purchase_price, timestamp)
VALUES (7, 3, 3, 10, 150, '2025-02-20 10:00:00');
