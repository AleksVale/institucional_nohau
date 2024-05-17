import { Navigate } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <Navigate to={'/expert'} />
    </div>
  )
}
