function unsplashAPI() {
  async function getRandomPhoto() {
    const randomImage = await fetch('https://source.unsplash.com/random');

    return randomImage.url;
  }

  return { getRandomPhoto };
}

export default unsplashAPI;
