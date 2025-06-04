// app/terms/page.tsx
"use client";

import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground colorVariant="orange" />
      
      <main className="flex flex-col bg-background text-foreground font-sans">
        <section className="max-w-4xl mx-auto py-20 px-6">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

          <div className="space-y-6 text-muted-foreground">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Use License</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Disclaimer</h2>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Limitations</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
              corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Revisions and Errata</h2>
            <p>
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem 
              rerum facilis est et expedita distinctio.
            </p>

            <p className="mt-8 text-xs text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
