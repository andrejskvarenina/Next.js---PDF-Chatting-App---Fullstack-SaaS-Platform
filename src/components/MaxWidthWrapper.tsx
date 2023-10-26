import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type Props = {
  classname? : string,
  children : ReactNode
}

const MaxWidthWrapper = ({
  classname,
  children
}: Props) => {
  return (
    <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', classname)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper