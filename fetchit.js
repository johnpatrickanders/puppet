const fetch = require("node-fetch");

(async () => {
  const res = await fetch('https://www.gameinformer.com');
  try {
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    }
  } catch (e) {
    console.log(e);
  }
})()
