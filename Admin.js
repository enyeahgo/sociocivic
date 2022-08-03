var admin = require("firebase-admin");

var serviceAccount = require("./service-account/socio-civic-firebase-adminsdk-w1njn-13b422f3e7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socio-civic-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

module.exports = admin;