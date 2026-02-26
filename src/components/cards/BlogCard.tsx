import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import logo from "../../../public/Logo.png";

const BlogCard = ({ post, index  }: { post: any; index: number }) => {
  return (
    <Card
      key={index}
      className="bg-white/5 border p-0! border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm"
    >
      {/* Image Wrapper */}
      <div className="relative h-[240px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority={index === 0}
        />

        {/* Logo */}
        <div className="absolute top-3 left-3">
          <Image src={logo} alt="Logo" width={60} height={40} />
        </div>

        {/* Category */}
        <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
          {post.category}
        </div>
      </div>

      <CardContent className="p-4 text-right text-white space-y-4">
        {/* Title */}
        <h3 className="text-primary text-lg md:text-2xl font-bold leading-relaxed">
          {post.title}
        </h3>

        {/* AI Summary */}
        <div className="text-sm text-primary flex items-center gap-2 ">
          ✨ ملخص بالذكاء الاصطناعي
        </div>

        {/* Description */}
        <p className="text-sm text-primary leading-relaxed">
          {post.description}
        </p>

        <hr className="border-white/20" />

        {/* Footer */}
        <div className="flex justify-between items-center text-sm text-white">
          <span>{post.readTime}</span>
          <Button
            variant={"link"}
            className="hover:text-primary text-white/70 transition cursor-pointer"
          >
            اقرأ المزيد <ArrowLeft size={20} className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
