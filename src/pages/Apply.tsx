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
              Request an Invite
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Join India’s invite‑only SwapLuxe circle
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              A short, private application so we can understand you, your garage, and whether SwapLuxe is the right
              fit. It takes under two minutes to complete.
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

