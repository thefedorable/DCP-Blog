import { Post } from "@/lib/Post";
import { CalendarIcon } from "lucide-react";


interface DisplayPostProps {
    post: Post;
}

export default function DisplayPost({ post }: DisplayPostProps) {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <article className="space-y-8">
            {/* Title and Date Section */}
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                {post.getTitle()}
              </h1>
              <div className="flex items-center">
                <CalendarIcon className="mr-1 h-4 w-4" />
                <time dateTime={new Date().toISOString()}>
                    {post.getDate().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
            </div>
    
            {/* Featured Image */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={post.getImage()}
                alt="Featured image for blog post"
                width={1200}
                height={900}
                className="object-cover w-full aspect-[4/3]"
              />
            </div>
    
            {/* Description */}
            <div className="prose prose-lg max-w-none text-lg sm:text-base md:text-xl">
              {post.getDescription().split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
    
            {/* Embedded Video */}
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/i3rBO41DdB0?si=tGZ1s7QNmqnxPUZs"
                title="Embedded video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
    
            {/* Main Content */}
            <div className="prose prose-lg max-w-none text-lg sm:text-base md:text-xl">
              {post.getContent().split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
          </article>
        </div>
      );
}