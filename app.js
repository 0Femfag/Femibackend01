const axios = require("axios");
const express = require("express");
const app = express();

app.use(express.json());
app.use(axios());

app.get("/axios-testing", async (req, res) => {
  try {
    const result = await axios.get("http://localhost:5000/post");
    const allpost = result.data;
    console.log(allpost);
    res.json(allpost);
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`app is running at ${PORT}`);
});
