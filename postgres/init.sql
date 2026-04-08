CREATE TABLE IF NOT EXISTS players (
  id        SERIAL PRIMARY KEY,
  username  VARCHAR(50) UNIQUE NOT NULL,
  game      VARCHAR(100),
  score     INTEGER DEFAULT 0,
  joined_at TIMESTAMP DEFAULT NOW()
);

-- Seed some data so it's not empty
INSERT INTO players (username, game, score) VALUES
  ('ShadowSniper', 'Valorant', 4200),
  ('PixelKnight', 'Minecraft', 3800),
  ('NovaBurst', 'Fortnite', 5100);
