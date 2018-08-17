export const set = value => {
  localStorage.setItem('storage-url', JSON.stringify(value));
};

export const get = () => {
  const data = localStorage.getItem('storage-url');
  return data ? JSON.parse(data) : null;
}
