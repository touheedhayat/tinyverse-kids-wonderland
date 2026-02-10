import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/context/StoreContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Logo from "@/components/layout/Logo";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useStore();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const displayName = isLogin ? email.split("@")[0] : name;
    login(displayName, email);
    toast({ title: isLogin ? "Welcome back! ✨" : "Account created! 🎉", description: `Hello, ${displayName}!` });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-md bg-card rounded-2xl border border-border p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4"><Logo size="lg" /></div>
            <h1 className="font-heading text-2xl font-bold">{isLogin ? "Welcome Back" : "Create Account"}</h1>
            <p className="text-sm text-muted-foreground mt-1">{isLogin ? "Sign in to your account" : "Join the TinyVerse family"}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
            )}
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity">
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button onClick={() => setIsLogin(!isLogin)} className="text-primary font-medium hover:underline">
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
