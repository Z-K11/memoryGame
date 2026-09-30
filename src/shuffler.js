export default function shuffler(array) {
  let copy = [...array];
  for (let i = 0; i < copy.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[j], copy[i]] = [copy[i], copy[j]];
  }
  return copy;
}
