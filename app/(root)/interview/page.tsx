import { RedirectToSignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Agent from "@/components/ui/Agent";

const InterviewPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return <RedirectToSignIn />;
  }

  return (
    <>
      <h3>Interview Generation</h3>
      <Agent userName="You" userId={userId} type="generate" />
    </>
  );
};

export default InterviewPage;
