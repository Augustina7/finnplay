module.exports = (app) =>
  app.get("/api/logout", async (req, res) => {
    console.log(`GET /api/logout req.user=${req.session.username}`);

    req.session.username = null;
    req.session.save(function (err) {
      if (err) next(err);

      req.session.regenerate(function (err) {
        if (err) next(err);
        return res.status(200).json({
          message: "Logged out",
        });
      });
    });
  });
