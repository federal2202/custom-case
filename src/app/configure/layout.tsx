import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode}) {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col w-full">
      <Steps />
      {children}
    </MaxWidthWrapper>
  )
}
