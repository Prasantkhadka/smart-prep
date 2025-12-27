import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const page = async () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice and Feedback</h2>
          <p>Practice on real interview questions & get instant feedback</p>
          <SignedIn>
            <Button asChild className="btn-primary max-sm:w-full">
              <Link href="/interview">Start an Interview</Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <Button asChild className="btn-primary max-sm:w-full">
              <Link href="/sign-in">Sign in to start</Link>
            </Button>
          </SignedOut>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <SignedIn>
          <div className="interviews-section">
            {dummyInterviews.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))}
          </div>
        </SignedIn>
        <SignedOut>
          <div className="interviews-section">
            <p className="text-muted-foreground">
              Sign in to view and resume your saved interviews.
            </p>
          </div>
        </SignedOut>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <SignedIn>
          <div className="interviews-section">
            {dummyInterviews.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))}
          </div>
        </SignedIn>
        <SignedOut>
          <div className="interviews-section">
            <p className="text-muted-foreground">
              Create a free account to start practicing interviews.
            </p>
          </div>
        </SignedOut>
      </section>
    </>
  );
};

export default page;
