/* eslint-disable @next/next/no-img-element */
"use client"

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Pagination from "@/components/common/pagination";

const Blog = () => {
  const [posts, setPosts] = useState<any[] | undefined>();

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wefundofficial";

        const data: any = (await axios.get(mediumURL)).data;
        const avatar = data.feed.image;
        const profileLink = data.feed.link;
        const res = data.items;
        const posts = res.filter((item: any) => item.categories.length > 0);

        const itemRows: any[] = [];
        posts.forEach((item: any, i: number) => {
          item["avatar"] = avatar;
          item["profilelink"] = profileLink;
          const row = Math.floor(i / 3);
          if (!itemRows[row]) itemRows[row] = [];
          itemRows[row].push(item);
        });
        setPosts(posts);
      } catch (e) {
        console.log(e)
      }
    }
    loadBlog();
  }, []);

  const shorten = (cnt: string, len: number) => {
    return cnt.length > len ? cnt.slice(0, len) + "..." : cnt;
  }
  const toText = (node: string) => {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    return tag.innerText;
  }

  const [page, setPage] = useState({ start: 0, count: 0 });
  const onChangePage = (start: number, count: number) => {
      setPage({ start, count })
      console.log("hrere", start, count)
    };
  console.log(page)

  return (
    <div className="w-full">
      <h1 className="text-3xl lg:text-5xl text-center capitalize pt-10 !leading-normal">
        find interesting articles<br />
        about building web 3
      </h1>
      <div className="flex flex-wrap w-full gap-14 pt-10 pb-24 justify-center bg-black" >
        {posts && posts.slice(page.start, page.start + page.count).map((post, index) => (
          <div
            className="w-60 lg:w-[400px] h-50 lg:h-[540px] py-12 px-3 lg:px-10 rounded-lg" key={index}
            style={{
              background: "#0E0F2D"
            }}
          >
            <img src={post.thumbnail} className="w-full h-[100px] lg:h-[168px] rounded-sm" alt="avatar" />
            <h1 className="text-2xl lg:text-4xl font-semibold h-16 mt-5 text-white break-all">
              {shorten(post.title, 28)}
            </h1>
            <p className="text-sm lg:text-base !leading-[150%] text-[#009DFF] h-4 mt-6">
              {post.pubDate}
            </p>
            <p className="text-sm lg:text-base !leading-[150%] text-[#B0B0B0] h-16 mt-6">
              {shorten(toText(post.description), 100)}
            </p>
            <div className="flex w-full justify-end mt-2">
              <Link
                href={post.link}
                className="text-sm lg:text-base w-28 h-9 flex justify-center items-center rounded-lg mt-8"
                style={{
                  background: "linear-gradient(277.23deg, #089DF1 14.86%, #082DF1 80.61%, #08ABF1 120.59%)"
                }}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full my-10">
        <Pagination total={posts?.length} countPerPage={2} onChangePage={onChangePage} />
      </div>
    </div>
  )
};

export default Blog;