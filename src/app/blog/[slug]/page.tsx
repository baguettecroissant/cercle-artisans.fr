import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";
import { services } from "@/data/service-content";
import { Calendar, Clock, ChevronRight, ArrowRight, Phone } from "lucide-react";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return {};

    return {
        title: `${post.title} | Le Cercle des Artisans`,
        description: post.metaDescription,
        openGraph: {
            title: post.title,
            description: post.metaDescription,
            images: [post.heroImage],
            type: "article",
            publishedTime: post.publishedAt,
        },
        alternates: {
            canonical: `/blog/${params.slug}`,
        },
    };
}

export default function BlogPostPage({
    params,
}: {
    params: { slug: string };
}) {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) notFound();

    // Get related service objects
    const relatedServiceObjects = services.filter((s) =>
        post.relatedServices.includes(s.slug)
    );

    // Other articles for "Read more"
    const otherPosts = blogPosts
        .filter((p) => p.slug !== post.slug)
        .slice(0, 2);

    // Schema.org Article
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        image: `https://cercle-artisans.fr${post.heroImage}`,
        datePublished: post.publishedAt,
        author: {
            "@type": "Organization",
            name: "Le Cercle des Artisans",
        },
        publisher: {
            "@type": "Organization",
            name: "Le Cercle des Artisans",
            url: "https://cercle-artisans.fr",
        },
    };

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Image */}
            <div className="relative h-[350px] md:h-[450px] overflow-hidden bg-slate-900">
                <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 p-8 md:p-16">
                    <div className="container mx-auto max-w-4xl">
                        {/* Breadcrumbs */}
                        <nav className="flex text-sm text-slate-400 mb-4">
                            <Link
                                href="/"
                                className="hover:text-white transition"
                            >
                                Accueil
                            </Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <Link
                                href="/blog"
                                className="hover:text-white transition"
                            >
                                Blog
                            </Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <span className="text-slate-300 truncate">
                                {post.title}
                            </span>
                        </nav>
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase rounded-full tracking-wider mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center text-sm text-slate-300 space-x-4">
                            <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1.5" />
                                {new Date(post.publishedAt).toLocaleDateString(
                                    "fr-FR",
                                    {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }
                                )}
                            </span>
                            <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1.5" />
                                {post.readTime} de lecture
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Main Article */}
                    <article className="lg:w-2/3">
                        <div
                            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-li:text-slate-600 prose-table:shadow-sm prose-th:bg-slate-100 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100"
                            dangerouslySetInnerHTML={{
                                __html: post.content,
                            }}
                        />
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3 space-y-8">
                        {/* CTA Devis */}
                        <div className="sticky top-28 space-y-8">
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg">
                                <h3 className="text-xl font-bold mb-3">
                                    Besoin d'un devis ?
                                </h3>
                                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                                    Recevez jusqu'à 3 devis gratuits
                                    d'artisans certifiés RGE près de chez
                                    vous.
                                </p>
                                <Link
                                    href="/devis"
                                    className="flex items-center justify-center w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-50 transition shadow-lg"
                                >
                                    <Phone className="w-4 h-4 mr-2" />
                                    Demander un devis
                                </Link>
                            </div>

                            {/* Related Services */}
                            {relatedServiceObjects.length > 0 && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                                        Services associés
                                    </h3>
                                    <div className="space-y-3">
                                        {relatedServiceObjects.map((s) => (
                                            <Link
                                                key={s.slug}
                                                href={`/service/${s.slug}`}
                                                className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition group"
                                            >
                                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                                    <Image
                                                        src={s.hero.image}
                                                        alt={s.name}
                                                        width={40}
                                                        height={40}
                                                        className="rounded object-cover"
                                                    />
                                                </div>
                                                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition">
                                                    {s.name}
                                                </span>
                                                <ArrowRight className="w-3 h-3 ml-auto text-slate-300 group-hover:text-blue-600" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Other Articles */}
                            {otherPosts.length > 0 && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                                        Articles similaires
                                    </h3>
                                    <div className="space-y-4">
                                        {otherPosts.map((p) => (
                                            <Link
                                                key={p.slug}
                                                href={`/blog/${p.slug}`}
                                                className="block group"
                                            >
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition leading-snug mb-1">
                                                    {p.title}
                                                </h4>
                                                <span className="text-xs text-slate-500">
                                                    {p.readTime} ·{" "}
                                                    {p.category}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </div>

            {/* Read More Section */}
            <section className="bg-white border-t border-slate-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">
                        Continuez votre lecture
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {otherPosts.map((p) => (
                            <Link
                                key={p.slug}
                                href={`/blog/${p.slug}`}
                                className="group bg-slate-50 rounded-xl p-6 hover:bg-blue-50 transition-colors text-left"
                            >
                                <span className="text-xs text-blue-600 font-medium uppercase tracking-wider">
                                    {p.category}
                                </span>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition mt-2 mb-2 leading-snug">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-slate-600 line-clamp-2">
                                    {p.excerpt}
                                </p>
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center mt-8 text-blue-600 font-semibold hover:text-blue-700 transition"
                    >
                        ← Retour au blog
                    </Link>
                </div>
            </section>
        </div>
    );
}
