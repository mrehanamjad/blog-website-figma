import Container from '@/components/Container';
import Image from 'next/image';
import React from 'react';
import data from '@/data/data.json';
import { remark } from 'remark';
import html from 'remark-html';
import CommentSection from '@/components/CommentSection';

async function parseMarkdown(content: string) {
    const processedContent = await remark().use(html).process(content);
    return processedContent.toString();
}

async function post({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const article = data.articles.find(article => article.id === slug);

    const parsedContent = article?.content ? await parseMarkdown(article.content) : '';

    return (
        <div className="bg-gray-50 text-gray-800 py-10">
            <Container className="max-w-6xl">
                <div className="w-full mx-auto max-w-5xl mb-6">
                    <div className="flex gap-5 text-sm text-gray-700 my-4">
                        <span className="font-semibold">{article?.category.toUpperCase()}</span>
                        <span className="font-light">{article?.date}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold">{article?.title}</h1>
                </div>
                <div className="py-2 px-4 relative my-16 max-w-5xl mx-auto w-full h-[35rem] rounded-2xl flex justify-center items-center bg-gray-500">
                    <Image
                        src={article?.imgSrc as string}
                        alt="blog image"
                        fill
                        priority
                        className="mx-auto object-cover rounded-2xl"
                    />
                </div>
                <div className="prose lg:prose-xl mb-12 max-w-5xl text-gray-700 mx-auto">
                    <div dangerouslySetInnerHTML={{ __html: parsedContent }} />
                </div>
                <div>
                    <CommentSection />
                </div>
            </Container>
        </div>
    );
}

export default post;
