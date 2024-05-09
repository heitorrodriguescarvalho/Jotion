'use client'

import Spinner from '@/components/Spinner'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import { useConvexAuth } from 'convex/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth()

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Your Ideas, Documents, & Plans. Unified, Welcome to{' '}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl">
        Jotion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="flex w-full items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter jotion <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      )}

      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Jotion free <ArrowRight className="ml-2 size-4" />
          </Button>
        </SignInButton>
      )}
    </div>
  )
}