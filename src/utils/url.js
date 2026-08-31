export function withBase(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
