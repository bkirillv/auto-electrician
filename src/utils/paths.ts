const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function path(route = '/') {
  const normalized = route.startsWith('/') ? route : `/${route}`;
  return `${base}${normalized}` || '/';
}
