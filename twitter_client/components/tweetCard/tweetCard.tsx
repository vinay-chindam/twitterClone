import React from "react";
import Image from "next/image";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegBookmark, FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

function TweetCard(): React.ReactElement {
    return (
        <div className={inter.className}>
            <div className="border border-gray-800 p-4 hover:bg-slate-800 cursor-pointer transition duration-200">
                <div className="grid grid-cols-12">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-800">
                        <Image
                            src="https://s3.ap-south-1.amazonaws.com/bucket.vinayc.dev/img3"
                            alt="profile pic"
                            width={48}
                            height={48}
                            className="object-cover"
                        />
                    </div>
                    <div className="col-span-10 px-4 text-white">
                        <h5>Vinay Chindam</h5>
                        <p>This is a sample tweet content. Replace it with verified and respectful information.</p>
                        <div className="flex justify-between text-xl mt-4 w-3/4">
                            <div><AiOutlineMessage /></div>
                            <div><FaRetweet /></div>
                            <div><FaRegHeart /></div>
                            <div><FaRegBookmark /></div>
                            <div><FiShare /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TweetCard;
