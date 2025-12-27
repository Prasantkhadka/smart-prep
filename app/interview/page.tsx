import { auth, currentUser } from "@clerk/nextjs/server";
import { RedirectToSignIn } from "@clerk/nextjs";

const InterviewPage = async () => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <RedirectToSignIn />;
  }

  return (
    <div className="flex flex-col gap-4">
      <h1>Interview</h1>
      <p className="text-muted-foreground">
        Placeholder for the interview flow. Build your experience here.
      </p>
    </div>
  );
};

export default InterviewPage;
