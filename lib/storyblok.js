import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "1HkPN6FaYwEDKXAKtAwCgQtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default Storyblok;
