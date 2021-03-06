/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const Firestore = require("@google-cloud/firestore");

const firestore = new Firestore({
  projectId: "our-philosophy-314515",
  keyFilename: "./db.json",
});

const cors = require("cors");

const saveFeddback = (req, res) => {
  if (req.method === "DELETE") throw "not yet built";
  if (req.method === "POST") {
    // store/insert a new document
    const data = req.body || {};
    const email = data.email;
    const score = Number.parseInt(data.score);
    const feedback = data.feedback;
    if (!email || !score || !feedback) {
      return res.status(401).send({ message: "semua field harus terisi" });
    }
    const created = new Date().getTime();
    return firestore
      .collection("feedback-pengguna")
      .add({ created, email, score, feedback })
      .then((doc) => {
        return res.status(200).send({ message: "feedback berhasil dikirm" });
      })
      .catch((err) => {
        console.error(err);
        return res
          .status(404)
          .send({ error: "Tidak bisa mengirim feedback", err });
      });
  }
};

exports.main = (req, res) => {
  const corsFn = cors();
  corsFn(req, res, function () {
    saveFeddback(req, res);
  });
};
