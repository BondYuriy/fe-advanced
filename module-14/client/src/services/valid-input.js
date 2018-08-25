export default function isValidInputUrl(value) {
  const validUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(
    value,
  );
  if (validUrl) {
    return value;
  } else {
    alert('Not a valid url');
    return null;
  }
}
