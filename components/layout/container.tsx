import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  narrow?: boolean
}

export default function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div
      style={{
        maxWidth: narrow ? 860 : 1200,
        margin: '0 auto',
        padding: '0 48px',
        width: '100%',
      }}
      className={cn('container-inner', className)}
    >
      {children}
      <style>{`
        @media (max-width: 768px) {
          .container-inner { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </div>
  )
}
