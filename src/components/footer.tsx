import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Copyright © 2025 Muhammad Muaz Ahmed. All rights reserved.
          </div>
          
          <div className="text-xs text-muted-foreground">
            Passionate about creating innovative solutions and secure digital experiences.
          </div>
        </div>
      </div>
    </footer>
  );
}