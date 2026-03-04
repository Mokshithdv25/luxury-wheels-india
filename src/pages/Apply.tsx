import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MemberProfileForm } from "@/components/MemberProfileForm";

const ApplyPage = () => {
  return (
    <div className="min-h-screen bg-background grain-overlay flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-4xl space-y-8">
          <div className="space-y-3">
            <p className="text-primary font-accent text-xs tracking-[0.35em] uppercase">
              SwapLuxe Membership Application
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Join India’s invite‑only luxury swap club
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              Share a few details about yourself and your garage so we can determine fit for the SwapLuxe community and
              curate the right swaps for you.
            </p>
          </div>

          <MemberProfileForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyPage;

