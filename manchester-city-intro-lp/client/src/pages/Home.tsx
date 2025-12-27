import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ChevronDown, Target, Users, Zap, Activity, PlayCircle } from "lucide-react";
import { TermTooltip } from "@/components/TermTooltip";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-xl tracking-tighter text-primary">
            MCI<span className="text-foreground">.INTRO</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-mono text-muted-foreground">
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">ABOUT</button>
            <button onClick={() => scrollToSection("tactics")} className="hover:text-primary transition-colors">TACTICS</button>
            <button onClick={() => scrollToSection("roles")} className="hover:text-primary transition-colors">ROLES</button>
            <button onClick={() => scrollToSection("guide")} className="hover:text-primary transition-colors">GUIDE</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="Tactical Blueprint Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        </div>

        <div className="container relative z-10 px-4 py-12 md:py-24 flex flex-col items-start max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            UNOFFICIAL FAN INTRODUCTION
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            強くて　玄人好みで<br />
            <span className="text-primary text-glow">静かに熱い</span>チーム<br />
            <span className="text-2xl md:text-4xl text-muted-foreground font-normal mt-2 block">── マンチェスター・シティ。</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            マンチェスター・シティは、ここ数年プレミアリーグで優勝争いを続けている強豪クラブです。
            ただ、単に「勝っているチーム」ではありません。
            90分を通して自分の役割を淡々とこなし、細かなポジション調整やタイミングで相手を崩していく、
            非常にプロフェッショナルで、どちらかといえば玄人好みのサッカーをするチームです。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button onClick={() => scrollToSection("about")} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono">
              READ MORE <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Section 1: About */}
      <section id="about" className="py-24 relative border-t border-border/30">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block text-primary font-mono text-sm tracking-wider border-b border-primary/30 pb-1">01. ABOUT THE CLUB</div>
              <h2 className="text-3xl md:text-4xl font-bold">マンチェスター・シティは<br/>どのようなクラブか</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  マンチェスター・シティは、イングランド北西部の都市マンチェスターを本拠地とするサッカークラブで、イングランド1部リーグである<TermTooltip term="プレミアリーグ" description="イングランドのプロサッカー1部リーグ。世界最高峰のレベルと人気を誇り、激しい順位争いが特徴。" />に所属しています。
                  近年はリーグ優勝や欧州大会での上位進出を繰り返しており、「結果を残し続けているクラブ」として世界的に知られています。
                </p>
                <p>
                  現在のチームを語るうえで欠かせないのが、監督の<strong className="text-foreground">ペップ・グアルディオラ</strong>です。
                  グアルディオラは、ボールの持ち方や選手の配置、<TermTooltip term="ラインの高さ" description="ディフェンダーたちが位置する高さのこと。ラインが高いほど相手ゴールに近く攻撃的だが、裏のスペースを使われるリスクも増える。" />に至るまで細かく設計し、「試合全体をどのような構造にするか」を考え抜くタイプの監督です。
                </p>
                <p>
                  バルセロナ時代から続くそのスタイルは、現代サッカーの一つの標準をつくってきたとも言われており、個人的には「近代サッカーの設計者の一人」のような存在だと感じています。
                </p>
              </div>
            </div>
            <div className="relative tech-border p-6 bg-card/30 backdrop-blur-sm">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-1">STRATEGIC DESIGN</h3>
                    <p className="text-sm text-muted-foreground">試合全体を構造的に設計し、偶然ではなく必然で勝利を目指すスタイル。</p>
                  </div>
                </div>
                <Separator className="bg-border/50" />
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-1">CONSISTENCY</h3>
                    <p className="text-sm text-muted-foreground">一発勝負の強さだけでなく、リーグ戦を通して安定したパフォーマンスを発揮する継続性。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Possession */}
      <section id="tactics" className="py-24 relative bg-secondary/5 border-y border-border/30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img src="/images/tactics-possession.png" alt="" className="absolute top-0 right-0 w-2/3 h-full object-cover opacity-10 mix-blend-screen" />
        </div>
        
        <div className="container px-4 mx-auto max-w-5xl relative z-10">
          <div className="mb-12">
            <div className="inline-block text-primary font-mono text-sm tracking-wider border-b border-primary/30 pb-1">02. TACTICAL PHILOSOPHY</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">ボール保持が<br/>そのまま攻め手になっていく</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-mono text-xl font-bold">1</div>
                <h3 className="font-bold text-xl">準備のためのパス</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  一見すると「安全なパスを回しているだけ」のようにも見えますが、実際には次の一手のための準備が細かく行われています。あえて安全な場所にボールを動かし、相手チームを片側に寄せたうえで、逆サイドの空いた<TermTooltip term="スペース" description="選手がいない空間のこと。攻撃側はいかにスペースを作り出して使うか、守備側はいかにスペースを消すかが勝負の鍵となる。" />へパスを通します。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-mono text-xl font-bold">2</div>
                <h3 className="font-bold text-xl">崩れそうな予感</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  こうした動きを何度も繰り返すことで、相手は少しずつポジションを崩されていきます。試合を見慣れてくると、「この形になったらそろそろ崩れそうだ」という予感が分かるようになります。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-mono text-xl font-bold">3</div>
                <h3 className="font-bold text-xl">追い詰めるプロセス</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ボールを持っている時間そのものが、相手を追い詰めていくプロセスになっている点が、このチームの大きな魅力です。守備に回る時間が少ないため、ゲームを支配している感覚を強く味わえます。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Roles */}
      <section id="roles" className="py-24 relative">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="tech-border aspect-video w-full overflow-hidden rounded-sm bg-card/30">
                <img src="/images/tactics-roles.png" alt="Fluid Roles Diagram" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 font-mono text-6xl text-primary/10 font-bold select-none">ROLES</div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block text-primary font-mono text-sm tracking-wider border-b border-primary/30 pb-1">03. FLUIDITY</div>
              <h2 className="text-3xl md:text-4xl font-bold">名前ではなく<br/>“その瞬間の役割”で選手を見る</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  サッカーには、<TermTooltip term="サイドバック" description="守備ラインの両端に位置する選手。現代サッカーでは攻撃参加も重要な役割。" />や<TermTooltip term="ウイング" description="攻撃ラインの両端に位置する選手。サイドからの突破やクロスボールの供給を担う。" />といったポジション名があります。しかし、マンチェスター・シティの選手たちは、名前どおりの位置だけでプレーしているわけではありません。
                </p>
                <p>
                  守備の場面ではサイドバックとして振る舞っていた選手が、攻撃の場面になると中盤の中央に移動し、パスをさばく役割を担うことがあります。<TermTooltip term="センターバック" description="守備ラインの中央に位置する、守りの要。通常は守備に専念するが、シティでは攻撃の起点としても機能する。" />が一列前に出て、攻撃の組み立てに深く関わる試合も少なくありません。
                </p>
                <p>
                  こうした動きは偶然ではなく、「チームとしてどこを強くしたいか」に応じて、あらかじめ設計されたパターンです。選手をポジション名だけでなく、「今この瞬間、どの役割を担っているか」という視点で見ると、試合の見え方が大きく変わります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Professionalism */}
      <section className="py-24 relative bg-secondary/5 border-y border-border/30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img src="/images/professionalism.png" alt="" className="absolute bottom-0 left-0 w-full h-2/3 object-cover opacity-10 mix-blend-screen" />
        </div>

        <div className="container px-4 mx-auto max-w-5xl relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block text-primary font-mono text-sm tracking-wider border-b border-primary/30 pb-1 mb-4">04. PROFESSIONALISM</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">派手さより　「仕事ぶり」が光るチーム</h2>
            <p className="text-muted-foreground leading-relaxed">
              マンチェスター・シティには、目立つスター選手だけでなく、「自分の仕事を淡々とこなすタイプの選手」が多く在籍している印象があります。
              表情や仕草で大きく感情を表に出す選手は多くありませんが、自分の役割を全うしようとする姿勢には静かな情熱があります。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-border/50 bg-card/30 backdrop-blur-sm rounded-sm">
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-mono font-bold text-lg mb-2">RISK MANAGEMENT</h3>
              <p className="text-sm text-muted-foreground">危ない場面の一歩手前で相手の攻撃を止めることや、味方のミスをさりげなく<TermTooltip term="カバー" description="味方が抜かれたりポジションを空けたりした際に、その穴を埋めるように動くこと。" />する動き。</p>
            </div>
            <div className="p-6 border border-border/50 bg-card/30 backdrop-blur-sm rounded-sm">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-mono font-bold text-lg mb-2">SILENT WORK</h3>
              <p className="text-sm text-muted-foreground">ボールに触らなくても相手の<TermTooltip term="パスコースを消す" description="相手がパスを出したい方向や場所に立ち、パスを出させないようにする守備の技術。" />など、“地味な仕事”を続ける選手たち。</p>
            </div>
            <div className="p-6 border border-border/50 bg-card/30 backdrop-blur-sm rounded-sm">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-mono font-bold text-lg mb-2">EXECUTION</h3>
              <p className="text-sm text-muted-foreground">プロフェッショナルな仕事人たちが、それぞれの持ち場でベストを尽くす集合体。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Guide */}
      <section id="guide" className="py-24 relative">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <PlayCircle className="h-6 w-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold">サッカーをあまり知らない方への<br/>試合の楽しみ方のヒント</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-mono font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">ボールを持っている時間に注目する</h3>
                    <p className="text-muted-foreground text-sm">単にパスがつながっているのではなく、「どの方向に相手を動かそうとしているのか」を意識すると、攻撃の意図が分かりやすくなります。</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-mono font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">選手の位置ではなく役割を見る</h3>
                    <p className="text-muted-foreground text-sm">守備時と攻撃時で立ち位置が大きく変わる選手もいるため、「今はどのような仕事をしているのか」という視点で見ると、試合の理解が深まります。</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-mono font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">試合後に、誰の動きが印象に残ったかを振り返る</h3>
                    <p className="text-muted-foreground text-sm">得点を決めた選手だけでなく、その前のプレーで流れを変えた選手に目を向けると、チーム全体のつながりが見えてきます。</p>
                  </div>
                </div>
              </div>

              <Separator className="my-8 bg-border/50" />
              
              <div className="text-center">
                <p className="text-lg font-medium mb-6">
                  もし機会があれば、一度だけでも構いませんので、<br/>
                  マンチェスター・シティの試合を<span className="text-primary">「戦い方」</span>と<span className="text-primary">「チームとしての振る舞い」</span>に<br className="hidden md:block"/>
                  注目しながら見ていただければ嬉しく思います。
                </p>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono w-full md:w-auto">
                  OFFICIAL SITE (EXTERNAL) <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30 bg-background text-center">
        <div className="container px-4 mx-auto">
          <div className="font-mono font-bold text-xl tracking-tighter text-primary mb-4">
            MCI<span className="text-foreground">.INTRO</span>
          </div>
          <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
            This is an unofficial fan-made introduction page. Not affiliated with Manchester City FC.
            Created to share the passion for the tactical beauty of the team.
          </p>
          <div className="text-xs text-muted-foreground/50 font-mono">
            © 2025 MANCHESTER CITY INTRO LP. DESIGNED WITH TACTICAL BLUEPRINT STYLE.
          </div>
        </div>
      </footer>
    </div>
  );
}
