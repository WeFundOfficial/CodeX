/* eslint-disable @next/next/no-img-element */
"use client"

import Pagination from "@/components/common/pagination";
import { loadBlog } from "@/util/blog";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetail = ({ params }: { params: any }) => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any[] | undefined>();
  const [page, setPage] = useState(params.id);

  useEffect(() => {
    const load = async () => {
      setBlogs(await loadBlog());
    }
    load();
  }, []);

  const onChangePage = (start: number, count: number) => {
    setPage(start)
  };

  return (
    <div className="px-4 lg:px-16 pt-10 pb-20">
      <h1 className="text-5xl font-bold">The CodeX Blog</h1>
      <div className="flex flex-col lg:flex-row w-full mt-12 gap-10">
        <div>
          <h1 className="text-xl lg:text-2xl font-semibold h-16 text-white break-all">
            Introducing the CodeX Names Integration Library
          </h1>
          <p className="text-sm lg:text-base !leading-[150%] text-[#009DFF] h-4">
            April 04, 2023 - (15 days ago)
          </p>
          <img src={"/images/blog/normal.png"} className="w-full rounded-sm mt-5" alt="avatar" />
          <p className="text-sm lg:text-base !leading-[150%] text-[#B0B0B0] mt-6">
            The CodeX Names Integration Library is a front-end library that simplifies the integration of CodeX Names into ecosystem projects.
            dApps in the CodeX ecosystem can now provide a drastically improved user experience to their users.
            CodeX Labs is committed to improving the user experience of the CodeX Network by focusing on making its products both accessible and human-readable. Despite being a crucial part of the CodeX user experience, CodeX Names can be challenging for new users to discover. Users need to actively search for a name service, and this lack of awareness limits users’ understanding of the convenience of using a domain. That’s where the CodeX Names Integration Library comes in.
            Our Integration Library offers a front-end library and SDK that simplifies the integration of CodeX Names into other ecosystem projects. With this library, dApps in the CodeX ecosystem can seamlessly integrate ANS workflows and features into their UIs, making it easier for end-users to discover and create .CDX domains.
          </p>
          <div className="w-full my-10">
            <Pagination total={blogs?.length} countPerPage={1} onChangePage={onChangePage} />
          </div>
        </div>
        <div className="min-w-1/3" style={{minWidth: "20%"}}>
          <h1 className="text-xl lg:text-2xl font-semibold h-16 text-white break-all">
            Check Other Articles
          </h1>
          <div className="flex flex-col bg-[#001029] p-4 mt-4 gap-6">
            {new Array(3).fill(null).map((blog, index) => (
              <div key={index}>
                <h1 className="text-xl lg:text-2xl font-semibold text-white break-all">
                  CodeX Labs brings Web3 to Gaming with its new SDK for Unity developers
                </h1>
                <p className="text-sm lg:text-base !leading-[150%] text-[#FFFFFF88] mt-4">
                  April 04, 2023 - (15 days ago)
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default BlogDetail;