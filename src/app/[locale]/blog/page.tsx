import dynamic from "next/dynamic";

import { HeroBlog } from "@/components/HeroBlog";

const BlogCards = dynamic(() => import("@/components/BlogCards"))

export default function Blog() {
    return (
        <section>
            <HeroBlog />
            <BlogCards />
        </section>
    )
}