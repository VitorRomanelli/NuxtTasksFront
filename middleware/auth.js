export default function ({ store, redirect }) {
  if (!store.getters['user/authenticated']) {
    return redirect('/auth')
  }
}
