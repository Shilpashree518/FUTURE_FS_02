const router = require("express").Router();
const Lead = require("../models/Lead");

router.post("/", async (req, res) => {
  const lead = new Lead(req.body);
  const saved = await lead.save();
  res.json(saved);
});

router.get("/", async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

router.put("/:id", async (req, res) => {
  const updated = await Lead.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;