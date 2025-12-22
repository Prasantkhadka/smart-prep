import Header from '@/components/Header'
import { auth } from '@clerk/nextjs/server';


const page = async () => {

  const { userId } = await auth();
  return (
    <div>
      <Header />
      Home Page
    </div>
  )
}

export default page
