import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion"; 

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} 
      dragTransition={{bounceStiffness: 100, bounceDamping: 10}} 
      className="flex-shrink-0 relative w-60 h-80 bg-sky-200 rounded-[40px] overflow-hidden bg-zinc-800/80 text-white px-8 py-10"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 leading-tight font-semibold">{data.d}</p>
      <div className="footer absolute bottom-0 w-full px-8 left-0">
        <div className="flex items-center justify-between mb-3 py-3"> 
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center">
            {data.close ? <IoCloudDownloadSharp /> : <IoMdDownload size="0.7em" color="#fff" />}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            style={{ backgroundColor: data.tag.tagColor }}
            className="tag -mx-40 py-4 flex items-center justify-center"
          >
            <h3 className="text-md font-semibold text-center">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
