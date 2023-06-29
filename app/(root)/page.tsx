import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

const SetupPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}


export default SetupPage; 