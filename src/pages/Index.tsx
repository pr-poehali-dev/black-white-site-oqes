import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.poehali.dev/files/45a25df5-12f2-4e86-bc35-a8f8c2dd2dd7.png"
                alt="OQES Logo"
                className="h-8 w-8 object-contain filter invert"
              />
              <div className="text-2xl font-bold tracking-tight">OQES</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="hover:text-gray-600 transition-colors"
              >
                About
              </a>
              <a
                href="#music"
                className="hover:text-gray-600 transition-colors"
              >
                Music
              </a>
              <a
                href="#videos"
                className="hover:text-gray-600 transition-colors"
              >
                Videos
              </a>
              <a
                href="#social"
                className="hover:text-gray-600 transition-colors"
              >
                Social
              </a>
              <a
                href="#collaboration"
                className="hover:text-gray-600 transition-colors"
              >
                Collaboration
              </a>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Menu" size={16} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-white bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6 tracking-tight text-[#000000]">
                OQES
              </h1>
              <p className="text-2xl mb-8 text-gray-300">
                Beatmaker & Music Producer
              </p>
              <p className="text-lg mb-8 text-gray-400 leading-relaxed">
                Crafting unique beats and collaborating with artists worldwide.
                Specializing in hip-hop, trap, and experimental electronic
                music.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Listen Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  <Icon name="Users" size={20} className="mr-2" />
                  Collaborate
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/99d7d8c3-66c2-42a7-9a82-8c0a807e3320.jpg"
                alt="OQES Producer"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-3 rounded-lg shadow-lg">
                <img
                  src="https://cdn.poehali.dev/files/45a25df5-12f2-4e86-bc35-a8f8c2dd2dd7.png"
                  alt="OQES Logo"
                  className="h-12 w-12 object-contain filter invert"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About OQES</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              A passionate beatmaker dedicated to creating innovative sounds and
              fostering musical collaborations. With years of experience in
              music production, OQES brings a unique perspective to every
              project.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-gray-200">
                <CardHeader>
                  <Icon name="Music" size={32} className="mx-auto mb-4" />
                  <CardTitle>Music Production</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Creating beats across multiple genres with attention to
                    detail and artistic vision.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200">
                <CardHeader>
                  <Icon name="Users" size={32} className="mx-auto mb-4" />
                  <CardTitle>Collaborations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Working with artists globally to bring their musical visions
                    to life.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200">
                <CardHeader>
                  <Icon name="Headphones" size={32} className="mx-auto mb-4" />
                  <CardTitle>Sound Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Crafting unique soundscapes and audio experiences for
                    various media.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Beats</h2>
            <p className="text-xl text-gray-600">
              Discover my latest musical creations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="bg-white border-gray-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="h-48 bg-black rounded-lg flex items-center justify-center mb-4">
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-white rounded-full animate-pulse"
                          style={{ height: `${Math.random() * 40 + 10}px` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <CardTitle>Beat #{item}</CardTitle>
                  <CardDescription>Hip-Hop / Trap</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      <Icon name="Play" size={16} className="mr-2" />
                      Play
                    </Button>
                    <Badge variant="secondary">140 BPM</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Video Content</h2>
            <p className="text-xl text-gray-600">
              Behind the scenes and music videos
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <Card
                key={item}
                className="border-gray-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                    <Button variant="secondary" size="lg">
                      <Icon name="Play" size={24} className="mr-2" />
                      Watch on YouTube
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle>Studio Session #{item}</CardTitle>
                  <CardDescription className="mt-2">
                    Watch the creative process behind the beats
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section id="social" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Connect</h2>
            <p className="text-xl text-gray-300">Follow OQES on social media</p>
          </div>
          <div className="flex justify-center space-x-8">
            {[
              { name: "Youtube", icon: "Youtube" },
              { name: "Instagram", icon: "Instagram" },
              { name: "Twitter", icon: "Twitter" },
              { name: "SoundCloud", icon: "Music" },
              { name: "Spotify", icon: "Music2" },
            ].map((social) => (
              <Button
                key={social.name}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <Icon name={social.icon} size={20} className="mr-2" />
                {social.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="collaboration" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Let's Collaborate</h2>
              <p className="text-xl text-gray-600">
                Ready to create something amazing together? Get in touch.
              </p>
            </div>
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Collaboration Request</CardTitle>
                <CardDescription>
                  Fill out the form below to discuss your project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <Input placeholder="Beat production, mixing, etc." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project, timeline, and vision..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  <Icon name="Send" size={20} className="mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">OQES</div>
            <p className="text-gray-400 mb-8">Beatmaker & Music Producer</p>
            <Separator className="bg-gray-800 mb-8" />
            <p className="text-gray-500">© 2024 OQES. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
