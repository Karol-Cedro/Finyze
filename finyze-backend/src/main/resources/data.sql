-- USERS
INSERT INTO users (nickname, email, password)     -- hashedpassword123
VALUES ('karol', 'karol@example.com', '$2a$12$0Qg52a.plqzyB/3J/q5K2ekEu5Qvri/2gi4K7aNyi.m8FsWW4FjqO');

INSERT INTO users (nickname, email, password)
VALUES ('alice', 'alice@example.com', 'hashedpassword456');

-- PORTFOLIOS
INSERT INTO portfolios (name, user_id)
VALUES ('Risky Portfolio', 1);

INSERT INTO portfolios (name, user_id)
VALUES ('Safe Portfolio', 1);

INSERT INTO portfolios (name, user_id)
VALUES ('Balanced Portfolio', 2);

-- ASSETS
INSERT INTO assets (symbol, name, currency, asset_type)
VALUES ('BTC', 'Bitcoin', 'USD', 'CRYPTO');

INSERT INTO assets (symbol, name, currency, asset_type)
VALUES ('ETH', 'Ethereum', 'USD', 'CRYPTO');

INSERT INTO assets (symbol, name, currency, asset_type)
VALUES ('AAPL', 'Apple Inc.', 'USD', 'STOCK');

INSERT INTO assets (symbol, name, currency, asset_type)
VALUES ('TSLA', 'Tesla Inc.', 'USD', 'STOCK');

INSERT INTO assets (symbol, name, currency, asset_type)
VALUES ('US10Y', 'US 10Y Treasury Bond', 'USD', 'BOND');

INSERT INTO assets (symbol, name, currency, asset_type)
VALUES ('EUR', 'Euro', 'USD', 'CURRENCY');

-- TRANSACTIONS (sample buys)
-- Karol's Risky Portfolio
INSERT INTO transactions (portfolio_id, asset_id, quantity, purchase_price, timestamp)
VALUES (1, 1, 0.10, 40000, '2025-01-01 10:00:00');

INSERT INTO transactions (portfolio_id, asset_id, quantity, purchase_price, timestamp)
VALUES (1, 1, 0.20, 30000, '2025-02-01 10:00:00');

INSERT INTO transactions (portfolio_id, asset_id, quantity, purchase_price, timestamp)
VALUES (1, 4, 5, 200, '2025-03-01 10:00:00');

-- Karol's Safe Portfolio
INSERT INTO transactions (portfolio_id, asset_id, quantity, purchase_price, timestamp)
VALUES (2, 5, 1000, 98.5, '2025-01-15 10:00:00');

INSERT INTO transactions (portfolio_id, asset_id, quantity, purchase_price, timestamp)
VALUES (2, 6, 5000, 1.10, '2025-02-15 10:00:00');

-- Alice's Balanced Portfolio
INSERT INTO transactions (portfolio_id, asset_id, quantity, purchase_price, timestamp)
VALUES (3, 1, 0.05, 35000, '2025-01-20 10:00:00');

INSERT INTO transactions (portfolio_id, asset_id, quantity, purchase_price, timestamp)
VALUES (3, 3, 10, 150, '2025-02-20 10:00:00');
