import { cn } from '@/lib/utils'

export default function CommandKey({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={cn('fill-muted-foreground', className)}
      viewBox="0 0 32 32"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M24,13a4,4,0,0,0,4-4V8a4,4,0,0,0-4-4H23a4,4,0,0,0-4,4v3H13V8A4,4,0,0,0,9,4H8A4,4,0,0,0,4,8V9a4,4,0,0,0,4,4h3v6H8a4,4,0,0,0-4,4v1a4,4,0,0,0,4,4H9a4,4,0,0,0,4-4V21h6v3a4,4,0,0,0,4,4h1a4,4,0,0,0,4-4V23a4,4,0,0,0-4-4H21V13ZM21,8a2,2,0,0,1,2-2h1a2,2,0,0,1,2,2V9a2,2,0,0,1-2,2H21ZM8,11A2,2,0,0,1,6,9V8A2,2,0,0,1,8,6H9a2,2,0,0,1,2,2v3H8Zm3,13a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2V23a2,2,0,0,1,2-2h3Zm8-5H13V13h6Zm2,2h3a2,2,0,0,1,2,2v1a2,2,0,0,1-2,2H23a2,2,0,0,1-2-2Z" />
      <rect
        id="_Transparent_Rectangle_"
        data-name="&lt;Transparent Rectangle&gt;"
        fill="none"
      />
    </svg>
  )
}
