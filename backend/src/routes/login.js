// fake db
const users = {
  player1: { userId: 1, username: "player1", password: "player1" },
  player2: { userId: 2, username: "player2", password: "player2" },
};
const getUser = async (username) => {
  // here should be a db query
  return users[username];
};

module.exports = (app) =>
  app.post("/api/login", async (req, res) => {
    console.log(`POST /api/login req.body=${JSON.stringify(req.body)}`);
    const { username, password } = req.body;
    console.log(`POST /api/login username=${username} password=${password}`);
    const user = await getUser(username);

    if (!user || user.password !== password) {
      return res.status(403).json({
        error: "Invalid credentials",
      });
    }

    req.session.regenerate(function (err) {
      if (err) next(err);

      req.session.username = user.username;

      req.session.save(function (err) {
        if (err) return next(err);
        console.log(`POST /api/login req.session.user=${req.session.username}`);
        return res.status(200).json({
          userId: user.userId,
          username: user.username,
        });
      });
    });
  });
