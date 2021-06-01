const Firestore = require("@google-cloud/firestore");

const firestore = new Firestore({
  projectId: "our-philosophy-314515",
  keyFilename: "./db.json",
  timestampsInSnapshots: true,
});

const cors = require("cors");

const saveEmail = (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    if (!email) {
      return res.send(401).send({ message: "Email tidak boleh kosong" });
    }
    const created = new Date().getTime();
    return firestore
      .collection("newsletter")
      .add({ created, email })
      .then((doc) => {
        return res
          .status(200)
          .send({ message: "Terima kasih sudah berlanganan" });
      })
      .catch((err) => {
        console.error(err);
        return res.status(404).send({ message: "unable to store", err });
      });
  }
};

exports.newsletter = (req, res) => {
  const corsFn = cors();
  corsFn(req, res, function () {
    saveEmail(req, res);
  });
};
