import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative mt-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300">

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">

                {/* Brand */}
                <div>
                    <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Bhoopendra
                    </h2>
                    <p className="mt-4 text-gray-400 leading-relaxed">
                        Building modern, fast and beautiful web experiences using React,
                        Tailwind CSS and clean design principles.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        {["Home", "About", "Projects", "Gallery", "Contact"].map(
                            (item) => (
                                <li key={item}>
                                    <a
                                        href={`#/${item.toLowerCase()}`}
                                        className="hover:text-indigo-400 transition"
                                    >
                                        {item}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Connect with me
                    </h3>
                    <div className="flex gap-4">
                        {[
                            { Icon: FaGithub, link: "https://github.com/bhoopendrachaurasia" },
                            { Icon: FaLinkedin, link: "#" },
                            { Icon: FaTwitter, link: "#" },
                        ].map(({ Icon, link }, i) => (
                            <a
                                key={i}
                                href={link}
                                target="_blank"
                                className="p-3 rounded-full bg-white/10 hover:bg-indigo-500 hover:scale-110 transition transform"
                            >
                                <Icon className="text-xl" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 text-center py-6 text-sm text-gray-400">
                © {new Date().getFullYear()} Bhoopendra. Made with{" "}
                <FaHeart className="inline text-pink-500 animate-pulse" /> using React &
                Tailwind CSS
            </div>
        </footer>
    );
}
