export default function isValidInputUrl(input) {
  const validUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(
    input,
  );
  if (validUrl) {
    return input;
  } else {
    alert('Not a valid url');
    return null;
  }
}
