import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog - Conseils Rénovation & Travaux | Le Cercle des Artisans",
    description:
        "Guides, comparatifs et conseils d'experts pour réussir vos travaux de rénovation énergétique, isolation, chauffage et accessibilité.",
    alternates: {
        canonical: "/blog",
    },
};

export default function BlogPage() {
    // First post is featured
    const [featured, ...rest] = blogPosts;

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Hero */}
            <section className="relative bg-slate-900 text-white py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900"></div>
                <div className="container mx-auto relative z-10 text-center max-w-3xl">
                    <div className="inline-flex items-center bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                        <BookOpen className="w-4 h-4 text-blue-300 mr-2" />
                        <span className="text-blue-100 text-sm font-medium">
                            Conseils d'experts
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        Le Blog{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            Rénovation
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed">
                        Guides pratiques, aides financières et comparatifs pour
                        réussir vos travaux de rénovation et d'aménagement.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 -mt-12 relative z-20">
                {/* Featured Article */}
                <Link
                    href={`/blog/${featured.slug}`}
                    className="group block bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 mb-16 hover:shadow-2xl transition-all duration-300"
                >
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden bg-slate-200">
                            <Image
                                src={featured.heroImage}
                                alt={featured.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase rounded-full tracking-wider">
                                    À la une
                                </span>
                            </div>
                        </div>
                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                            <div className="flex items-center text-sm text-slate-500 mb-4 space-x-4">
                                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded font-medium text-xs">
                                    {featured.category}
                                </span>
                                <span className="flex items-center">
                                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                    {new Date(
                                        featured.publishedAt
                                    ).toLocaleDateString("fr-FR", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </span>
                                <span className="flex items-center">
                                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                                    {featured.readTime}
                                </span>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                                {featured.title}
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {featured.excerpt}
                            </p>
                            <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                                Lire l'article{" "}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Other Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {rest.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 overflow-hidden"
                        >
                            <div className="h-52 relative overflow-hidden bg-slate-200">
                                <Image
                                    src={post.heroImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="px-2 py-0.5 bg-white/90 text-slate-700 rounded text-xs font-medium backdrop-blur-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-xs text-slate-500 mb-3 space-x-3">
                                    <span className="flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {new Date(
                                            post.publishedAt
                                        ).toLocaleDateString("fr-FR", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                    <span className="flex items-center">
                                        <Clock className="w-3 h-3 mr-1" />
                                        {post.readTime}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
