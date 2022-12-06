const exchangeCodeForToken = async (code) => {
  console.log(`CALLING MOCK exchangeCodeForToken! ${code}`);
  return 'MOCK TOKEN FOR CODE';
};

const getGithubProfile = async (token) => {
  console.log(`CALLING MOCK getGithubProfile ${token}`);
  return {
    login: 'lottie_dog',
    avatar_url: 'https://www.placecage.com/gif/300/300',
    email: 'lottie@lottie.com',
  };
};

module.exports = { exchangeCodeForToken, getGithubProfile };
