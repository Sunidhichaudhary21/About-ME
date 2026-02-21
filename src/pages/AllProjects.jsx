import React, { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiStar, FiArrowLeft, FiFilter, FiCode } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AllProjects = () => {
    const [filter, setFilter] = useState('all');

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform with payment integration, user authentication, and order management.',
            image: '🛍️',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'fullstack',
            github: '#',
            live: '#',
            featured: true,
            color: 'from-pink-500 to-rose-500'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Collaborative task management application with real-time updates and team workspace organization.',
            image: '✓',
            tags: ['React', 'Firebase', 'Tailwind'],
            category: 'frontend',
            github: '#',
            live: '#',
            featured: true,
            color: 'from-emerald-400 to-teal-500'
        },
        {
            id: 3,
            title: 'Social Media API',
            description: 'RESTful API for a social media platform handling complex relationships, feeds, and authentication.',
            image: '🔗',
            tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
            category: 'backend',
            github: '#',
            live: '#',
            featured: false,
            color: 'from-blue-500 to-indigo-600'
        },
        {
            id: 4,
            title: 'Weather App',
            description: 'Real-time weather application providing location-based forecasting and rich visualization of climate data.',
            image: '⛅',
            tags: ['React', 'API', 'Chart.js'],
            category: 'frontend',
            github: '#',
            live: '#',
            featured: false,
            color: 'from-sky-400 to-blue-500'
        },
        {
            id: 5,
            title: 'Blog Platform',
            description: 'Modern full-stack blogging platform supporting markdown, rich text, comments, and seo optimization.',
            image: '📝',
            tags: ['Next.js', 'Prisma', 'PostgreSQL'],
            category: 'fullstack',
            github: '#',
            live: '#',
            featured: true,
            color: 'from-purple-500 to-violet-600'
        },
        {
            id: 6,
            title: 'Leetcode Metric',
            description: 'Real-time dashboard to visualize and track coding problem-solving progress and statistics.',
            image: '💬',
            tags: ['React', 'Socket.io', 'Node.js'],
            category: 'fullstack',
            github: '#',
            live: '#',
            featured: false,
            color: 'from-yellow-400 to-orange-500'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'fullstack', label: 'Full Stack' }
    ];

    const filtered = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="bg-[#fffcf5] min-h-screen relative overflow-x-hidden">
            {/* Background Decoration */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#335c67]/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#e09f3e]/5 rounded-full blur-[100px]"></div>
            </div>

            {/* Navbar Placeholder / Back Button */}
            <div className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none">
                <div className="max-w-screen-2xl mx-auto">
                    <Link to="/" className="inline-flex pointer-events-auto items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md text-[#335c67] font-bold rounded-full shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 border border-[#335c67]/10 group">
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="hidden sm:inline">Back to Home</span>
                    </Link>
                </div>
            </div>

            <section className="pt-32 pb-20 relative z-10">
                <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12">
                    {/* Header Section */}
                    <div className="text-center mb-16 space-y-4">
                        <span className="inline-block py-1 px-3 rounded-full bg-[#e09f3e]/10 text-[#e09f3e] text-xs font-bold tracking-widest uppercase border border-[#e09f3e]/20">
                            Portfolio
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-[#335c67] tracking-tight">
                            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#335c67] to-[#e09f3e]">Works</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-[#335c67]/70 text-lg md:text-xl font-light leading-relaxed">
                            A curated collection of web applications, APIs, and experiments showcasing my technical expertise and creative problem-solving.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex justify-center mb-16">
                        <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white rounded-full shadow-lg shadow-[#335c67]/5 border border-[#335c67]/5">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setFilter(cat.id)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden group ${filter === cat.id
                                            ? 'text-white bg-[#335c67] shadow-md'
                                            : 'text-[#335c67]/70 hover:text-[#335c67] hover:bg-[#335c67]/5'
                                        }`}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {cat.id === 'all' && <FiFilter size={14} />}
                                        {cat.id === 'fullstack' && <FiCode size={14} />}
                                        {cat.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {filtered.map((project, index) => (
                            <div
                                key={project.id}
                                className="group relative bg-white rounded-[2rem] overflow-hidden border border-[#335c67]/10 shadow-sm hover:shadow-2xl hover:shadow-[#335c67]/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                            >
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="bg-[#e09f3e] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-orange-500/20">
                                            <FiStar size={10} fill="currentColor" /> Featured
                                        </div>
                                    </div>
                                )}

                                {/* Card Header / Image Area */}
                                <div className={`h-52 relative overflow-hidden bg-gradient-to-br ${project.color}`}>
                                    {/* Overlay Pattern */}
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat mix-blend-overlay"></div>

                                    {/* Emoji Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-8xl filter drop-shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">
                                            {project.image}
                                        </div>
                                    </div>

                                    {/* Overlay Gradient on Hover */}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {project.tags.slice(0, 3).map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2.5 py-1 bg-[#335c67]/5 text-[#335c67] text-[10px] font-bold uppercase tracking-wider rounded-md border border-[#335c67]/10"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="px-2.5 py-1 bg-[#335c67]/5 text-[#335c67] text-[10px] font-bold rounded-md border border-[#335c67]/10">+{project.tags.length - 3}</span>
                                            )}
                                        </div>
                                        <h3 className="text-2xl font-black text-[#335c67] mb-2 group-hover:text-[#e09f3e] transition-colors duration-300 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-[#335c67]/70 text-sm leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-auto pt-6 border-t border-[#335c67]/10 flex items-center justify-between">
                                        <a
                                            href={project.github}
                                            className="flex items-center gap-2 text-[#335c67]/70 hover:text-[#335c67] text-sm font-bold transition-colors group/btn"
                                        >
                                            <FiGithub size={18} />
                                            <span className="group-hover/btn:underline decoration-2 underline-offset-4 decoration-[#e09f3e]">Code</span>
                                        </a>
                                        <a
                                            href={project.live}
                                            className="flex items-center gap-2 px-4 py-2 bg-[#335c67] text-white text-sm font-bold rounded-lg hover:bg-[#e09f3e] transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-95"
                                        >
                                            Live Demo <FiExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filtered.length === 0 && (
                        <div className="text-center py-20">
                            <div className="inline-block p-6 rounded-full bg-[#f0f0f0] mb-4 text-4xl">🤔</div>
                            <h3 className="text-2xl font-bold text-[#335c67] mb-2">No projects found</h3>
                            <p className="text-[#335c67]/60">Try selecting a different category.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AllProjects;
