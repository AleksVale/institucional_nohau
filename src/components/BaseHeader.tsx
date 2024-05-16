import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'

interface HeaderMeetingProps {
  label: string
  goBack?: boolean
}

export function BaseHeader({ label, goBack }: Readonly<HeaderMeetingProps>) {
  const navigate = useNavigate()
  return (
    <section className="mb-6 flex gap-4">
      {goBack && (
        <Button
          onClick={() => navigate(-1)}
          className="flex items-center"
          variant={'ghost'}
        >
          <ArrowLeft className="size-6" />
          <span className="ml-2 text-sm font-medium">Voltar</span>
        </Button>
      )}
      <h1 className="text-3xl">{label}</h1>
    </section>
  )
}
