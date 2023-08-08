function checkInput(input) {
  const githubUrlPattern = /^https?:\/\/github\.com\/([^/]+)$/;
  const isGitHubUrl = githubUrlPattern.test(input);
  if (isGitHubUrl) {
    const match = input.match(githubUrlPattern);
    const username = match[1];
    return username;
  } else {
    const isValidUsername = /^[a-zA-Z0-9-]+$/.test(input);
    if (isValidUsername) {
      return input;
    }
  }
}

export default checkInput;
