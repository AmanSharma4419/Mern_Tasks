// Requring The Admin Schema
var Admin = require("../models/adminSchema");
var auth = require("../utils/auth");

// Adminlogin Controller
function adminLogin(req, res, next) {
  if (!req.body.email || !req.body.password) {
    return res.status(401).json(" Please Fill All Fields");
  }
  const { email, password } = req.body;
  Admin.findOne({ email }, (err, admin) => {
    if (err) return next(err);
    if (!admin) {
      return res.status(401).json({ admin: "Admin Not Found With This Email" });
    }
    if (!admin.confirmPassword(password)) {
      return res.status(401).json({ admin: "Password Is Not Correct" });
    }
    var token = auth.genToken(email);
    return res.status(200).json({ admin, token });
  });
}

module.exports = { adminLogin };
