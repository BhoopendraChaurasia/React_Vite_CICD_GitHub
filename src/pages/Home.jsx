export default function Home() {
    return (
        <div className="bg-slate-950 text-white overflow-hidden">

            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center px-6">
                {/* Glow background */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -right-32 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl" />

                <div className="relative max-w-5xl text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        We Build{" "}
                        <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                            Powerful Websites
                        </span>
                        <br /> That Grow Your Business
                    </h1>

                    <p className="mt-6 text-lg text-slate-300">
                        Premium web development services using modern technologies like
                        React, Tailwind CSS, and scalable architectures.
                    </p>

                    <div className="mt-10 flex justify-center gap-6 flex-wrap">
                        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 font-semibold hover:scale-105 transition">
                            Get Started
                        </button>
                        <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold">Our Services</h2>
                    <p className="mt-4 text-slate-400">
                        Everything you need to build a strong online presence
                    </p>

                    <div className="mt-16 grid gap-10 md:grid-cols-3">
                        {[
                            {
                                title: "Web Development",
                                desc: "Fast, scalable, and modern websites built with the latest technologies."
                            },
                            {
                                title: "UI / UX Design",
                                desc: "Beautiful, intuitive designs focused on user experience and conversions."
                            },
                            {
                                title: "E-Commerce Solutions",
                                desc: "High-performance online stores with secure payment integration."
                            }
                        ].map((service, i) => (
                            <div
                                key={i}
                                className="bg-slate-800 rounded-2xl p-8 hover:-translate-y-3 transition shadow-lg"
                            >
                                <h3 className="text-xl font-semibold text-indigo-400">
                                    {service.title}
                                </h3>
                                <p className="mt-4 text-slate-400">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY US */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold">
                            Why Choose Our Team?
                        </h2>
                        <p className="mt-6 text-slate-400">
                            We focus on quality, performance, and long-term success for your business.
                        </p>

                        <ul className="mt-8 space-y-4 text-slate-300">
                            <li>⚡ High-performance & fast loading</li>
                            <li>🎨 Modern & responsive UI</li>
                            <li>🔒 Secure and scalable solutions</li>
                            <li>🚀 SEO-friendly development</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-600 to-pink-600 rounded-3xl p-10 shadow-2xl">
                        <p className="text-2xl font-semibold">
                            “We don’t just build websites —
                            we create digital experiences that convert.”
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-indigo-600 to-pink-600 text-center">
                <h2 className="text-4xl font-bold">
                    Ready to Start Your Project?
                </h2>
                <p className="mt-6 text-white/90">
                    Let’s build something amazing together.
                </p>

                <button className="mt-10 px-10 py-4 rounded-full bg-white text-indigo-600 font-semibold hover:scale-105 transition">
                    Contact Us
                </button>
            </section>

        </div>
    );
}
