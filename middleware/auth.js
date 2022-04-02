export default function ({ store, redirect, route }) {
  if (!store.getters['auth/authenticated'] && route.path !== '/auth') {
    return redirect('/auth')
  }
}
