// Requring The Admin Schema
var Mentor = require("../models/mentorSchema");

// Controller For The Creating Operation
function createMentor(req, res, next) {
  if ((!req.body.name, !req.body.email, !req.body.password)) {
    return res.status(401).json("Check Mentor Credentials");
  }
  Mentor.create(req.body, (err, mentor) => {
    if (err) return next(err);
    return res.status(200).json({ mentor: mentor });
  });
}

// Controller For The Getting Single Mentor Data
function singleMentor(req, res, next) {
  const id = req.params.id;
  Mentor.findById(id, (err, mentor) => {
    if (err) return next(err);
    return res.status(200).json({ mentor: mentor });
  });
}

// Controller For The Reading Operation
function readMentor(req, res, next) {
  Mentor.find({}, (err, mentors) => {
    if (err) return next(err);
    res.status(200).json({ mentor: mentors });
  });
}
// Controller For The Update Operation
function updateMentor(req, res, next) {
  const id = req.params.id;
  Mentor.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (err, updatedMentor) => {
      if (err) return next(err);
      return res.status(200).json({ mentor: updatedMentor });
    }
  );
}
// Controller For The Delete Operation
function deleteMentor(req, res, next) {
  const id = req.params.id;
  Mentor.findByIdAndDelete(id, (err, deletedMentor) => {
    if (err) return next(err);
    return res.status(200).json({ mentor: "MentorDeletedSucessfully" });
  });
}

module.exports = {
  createMentor,
  readMentor,
  singleMentor,
  updateMentor,
  deleteMentor
};
