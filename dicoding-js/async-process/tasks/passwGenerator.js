// TODO: Implement the generatePassword function
function generatePassword(length, includeSpecialChars) {
  const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
  let password = '';
  for (let i = 0; i < length; i++) {
    if (includeSpecialChars) {
      password += alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
      password += specialChars[Math.floor(Math.random() * specialChars.length)];
      } else {
        password += alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
        }
  }
  return password;
}

export { generatePassword };