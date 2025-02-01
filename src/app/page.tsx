import Header from "../components/Header"
import Hero from "../components/Hero"
import Message from "../components/Message"
import Gallery from "../components/Gallery"
import MusicPlayer from "../components/MusicPlayer"

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Message />
            <Gallery />
            <MusicPlayer />
        </main>
    )
}

