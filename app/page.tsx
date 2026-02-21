export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-8 lg:p-16">
      <main className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          Welcome to kennethloto.dev!
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground max-w-lg mx-auto">
          Domain is live. Projects coming soon — stay tuned.
        </p>
      </main>
      <footer className="absolute bottom-8 text-sm text-muted-foreground">
        &copy;{currentYear} kennethloto.dev
      </footer>
    </div>
  );
}
