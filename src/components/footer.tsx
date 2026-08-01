export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border bg-background text-center font-mono text-xs text-muted-foreground">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 Muhammad Muaz Ahmed <span className="opacity-40">·</span> Built solo
        </div>
        <div className="flex items-center gap-4 text-xs">
          <a
            href="https://github.com/muhammadmuazahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <span className="opacity-40">·</span>
          <a
            href="https://www.linkedin.com/in/muhammad-muaz-ahmed/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <span className="opacity-40">·</span>
          <a
            href="mailto:muhammadmuazahmed@gmail.com"
            className="hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}