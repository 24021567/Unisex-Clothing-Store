function requireAuth(req, res, next) {
  if (!req.currentUser) {
    // Check if this is an AJAX request
    if (req.headers['x-requested-with'] === 'XMLHttpRequest' || req.xhr) {
      return res.status(401).json({
        success: false,
        message: "Vui lòng đăng nhập để tiếp tục"
      });
    }
    return res.redirect("/login");
  }
  return next();
}

function requireAdmin(req, res, next) {
  if (!req.currentUser || req.currentUser.role !== "admin") {
    return res.status(403).render("error", {
      title: "Forbidden",
      message: "Ban khong co quyen truy cap trang nay.",
    });
  }
  return next();
}

module.exports = {
  requireAuth,
  requireAdmin,
};
