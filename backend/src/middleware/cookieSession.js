exports.cookieSession = (req, res, next) => {
  const token = req.cookies.auth;
  try {
    const verify = jwt.verify(token, process.env.MY_SECRET);
    req.user = { userId: verify.userId, username: verify.username };
    next();
  } catch (err) {
    res.clearCookie("auth");
    return res.status(401).json({
      error: "Unauthorized",
    });
  }
};
