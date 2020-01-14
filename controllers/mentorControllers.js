// Requring The Admin Schema
var Mentor = require("../models/mentorSchema");

// Mentor Registration Controller
function mentorRegistration(req, res, next) {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(401).json(" Please Fill All Fields");
  }
  Mentor.create(req.body, (err, registeredMentor) => {
    if (err) return next(err);
    return res.status(200).json({ mentor: registeredMentor });
  });
}

// Exporting The Mentor Controller
module.exports = { mentorRegistration };
