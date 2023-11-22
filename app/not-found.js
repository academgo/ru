import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>Страница не найдена</h2>
      <p>Мы не можем найти страницу, которую вы запросили</p>
      <Link href="/">Вернуться на главную</Link>
    </div>
  )
}