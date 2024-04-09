module.exports = (app) =>
  app.get("/api/user", (req, res) => {
    console.log(`GET /api/user req.user=${req.session.username}`);
    if (!req.session.username) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }
    res.json({
      username: req.session.username,
    });
  });
