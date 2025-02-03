'use client';
import React, { useState } from 'react';
import {addDoc, serverTimestamp} from "@firebase/firestore";
import {collection} from "firebase/firestore";
import { db } from '@/app/firebase/firebase';
import {Problem} from "@/utils/types/problem";
const SubmitProblem = () => {

    const [formData, setFormData] = useState<Omit<Problem, 'id'>>({
        title: '',
        category: '',
        difficulty: 'Easy',
        problemDescription: '',
        input: '',
        output: '',
        reasoning: '',
        starterFunction: '',
        handlerFunction: '',
        note: '',
    });

    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        try {
            // Add a new document with auto-generated ID
            const docRef = await addDoc(collection(db, 'problems'), {
                ...formData,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
                status: 'pending', // For moderation purposes
                votes: 0,         // Initialize voting system
            });

            setMessage({
                type: 'success',
                text: `Problem submitted successfully!`
            });

            // Reset form
            setFormData({
                title: '',
                category: '',
                difficulty: 'Easy',
                problemDescription: '',
                input: '',
                output: '',
                reasoning: '',
                starterFunction: '',
                handlerFunction: '',
                note: '',
            });

        } catch (err) {
            console.error('Error adding document: ', err);
            setMessage({
                type: 'error',
                text: 'Failed to submit problem. Please try again.'
            });
        }
    };

    return (
        <>
        <div className="max-w-4xl mx-auto p-6 text-white">
            <header className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 p-8 rounded-2xl mb-8 border border-white/10">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center gap-3 mb-4">
                        <span className="text-4xl">👋</span> {/* Optional waving hand emoji */}
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Contribute to Our Problem Database
                        </h1>
                    </div>

                    <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                        Help shape the future of machine learning education! We're actively seeking
                        <span className="text-purple-300 font-medium"> high-quality problems</span> across all difficulty levels and categories.
                        Your contribution will directly help thousands of developers improve their ML skills.
                    </p>

                    <div className="mt-4 p-4 bg-black/20 rounded-lg">
                        <p className="text-sm text-blue-200">
                            💡 Pro Tip: Please ensure problems are original or properly attributed,
                            and include clear input/output examples for best results.
                        </p>
                    </div>
                </div>
            </header>

            <form onSubmit={handleSubmit} className="space-y-8 bg-gray-900/50 p-8 rounded-xl border border-white/10">
                {/* Form Sections */}
                <section className="space-y-8">
                    {/* Section Heading */}
                    <div className="pb-6 border-b border-white/10">
                        <h3 className="text-xl font-semibold text-purple-300">Problem Basics</h3>
                        <p className="text-gray-400 mt-2">Core information about the problem</p>
                    </div>

                    {/* Title Input */}
                    <div className="relative">
                        <label className="block text-sm font-medium mb-2">Title *</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-900 transition-all"
                                placeholder="E.g., Image Classification with CNN"
                                required
                            />
                            <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                    </div>

                    {/* Category & Difficulty */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative">
                            <label className="block text-sm font-medium mb-2">Category *</label>
                            <div className="relative">
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg appearance-none focus:border-purple-500 focus:ring-2 focus:ring-purple-900 transition-all"
                                    required
                                >
                                    <option value="">Select Category</option>
                                    <option value="Linear Algebra">Linear Algebra</option>
                                    <option value="Machine Learning">Machine Learning</option>
                                    <option value="Deep Learning">Deep Learning</option>
                                    <option value="Statistics">Statistics</option>
                                    <option value="Probability">Probability</option>
                                </select>
                                <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                <svg className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium mb-2">Difficulty *</label>
                            <div className="relative">
                                <select
                                    name="difficulty"
                                    value={formData.difficulty}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg appearance-none focus:border-purple-500 focus:ring-2 focus:ring-purple-900 transition-all"
                                    required
                                >
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                                <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                                </svg>
                                <svg className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem Description Section */}
                <section className="space-y-8">
                    <div className="pb-6 border-b border-white/10">
                        <h3 className="text-xl font-semibold text-purple-300">Problem Details</h3>
                        <p className="text-gray-400 mt-2">Describe the problem and expected solutions</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Problem Description *</label>
                            <textarea
                                name="problemDescription"
                                value={formData.problemDescription}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-900 transition-all h-40"
                                placeholder="Describe the problem in detail..."
                                required
                            />
                            <p className="text-sm text-gray-500 mt-2">Markdown formatting supported</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-medium mb-2">Input Description *</label>
                                <textarea
                                    name="input"
                                    value={formData.input}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-900 transition-all h-32"
                                    placeholder="Describe expected input format..."
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Output Description *</label>
                                <textarea
                                    name="output"
                                    value={formData.output}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-900 transition-all h-32"
                                    placeholder="Describe expected output format..."
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Code Section */}
                <section className="space-y-8">
                    <div className="pb-6 border-b border-white/10">
                        <h3 className="text-xl font-semibold text-purple-300">Code Setup</h3>
                        <p className="text-gray-400 mt-2">Provide starter and handler functions</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-medium mb-2">Starter Function *</label>
                            <div className="relative">
          <textarea
              name="starterFunction"
              value={formData.starterFunction}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg font-mono text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-900 transition-all h-40"
              placeholder="def starter_function(...):"
              required
          />
                                <span className="absolute right-3 bottom-3 text-gray-500 text-sm">Python</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Handler Function *</label>
                            <div className="relative">
          <textarea
              name="handlerFunction"
              value={formData.handlerFunction}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg font-mono text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-900 transition-all h-40"
              placeholder="def handler_function(...):"
              required
          />
                                <span className="absolute right-3 bottom-3 text-gray-500 text-sm">Python</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reasoning & Notes */}
                <section className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-medium mb-2">Reasoning Process *</label>
                            <textarea
                                name="reasoning"
                                value={formData.reasoning}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-900 transition-all h-48"
                                placeholder="Describe the expected reasoning steps..."
                                required
                            />
                            <p className="text-sm text-gray-500 mt-2">Step-by-step explanation</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Additional Notes</label>
                            <textarea
                                name="note"
                                value={formData.note}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-900 transition-all h-48"
                                placeholder="Optional tips, references, or constraints..."
                            />
                            <p className="text-sm text-gray-500 mt-2">Optional field</p>
                        </div>
                    </div>
                </section>

                {/* Submission Section */}
                <div className="pt-8 border-t border-white/10">
                    {message && (
                        <div className={`p-4 rounded-lg mb-6 ${message.type === 'success' ? 'bg-green-900/50 border border-green-800' : 'bg-red-900/50 border border-red-800'}`}>
                            <div className="flex items-center gap-3">
                                <svg className={`w-5 h-5 ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {message.type === 'success' ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    )}
                                </svg>
                                <span>{message.text}</span>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-medium transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                        Submit Problem
                    </button>
                </div>
            </form>
        </div>
        </>
    );
};

export default SubmitProblem;
