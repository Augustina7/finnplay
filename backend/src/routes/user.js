module.exports = (app) =>
  app.get("/api/user", (req, res) => {
    if (!req.session.username) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }
    res.json({
      username: req.session.username,
    });
  });
