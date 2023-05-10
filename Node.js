export REPLICATE_API_TOKEN=[r8_7ZJRrY3XJGFoaYtjJhPbRFQetdZAzyE3uFreq]
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const output = await replicate.run(
  "nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b",
  {
    input: {
      image: "..."
    }
  }
);
