import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";

interface StaggeredDropDownProps {
  dictionary: {
    uiDemo: {
      dropdown: {
        postActions: string;
        edit: string;
        duplicate: string;
        share: string;
        remove: string;
      };
    };
  };
}

const StaggeredDropDown = ({ dictionary }: StaggeredDropDownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8 pb-56 flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
      {/* Background pattern for glass effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-20"></div>
      
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 shadow-lg shadow-black/10 hover:bg-white/20 transition-all duration-200 text-slate-700"
        >
          <span className="font-medium text-sm">{dictionary.uiDemo.dropdown.postActions}</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-1 p-2 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl shadow-black/10 absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Option setOpen={setOpen} Icon={FiEdit} text={dictionary.uiDemo.dropdown.edit} />
          <Option setOpen={setOpen} Icon={FiPlusSquare} text={dictionary.uiDemo.dropdown.duplicate} />
          <Option setOpen={setOpen} Icon={FiShare} text={dictionary.uiDemo.dropdown.share} />
          <Option setOpen={setOpen} Icon={FiTrash} text={dictionary.uiDemo.dropdown.remove} />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({
  text,
  Icon,
  setOpen,
}: {
  text: string;
  Icon: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2.5 text-xs font-medium whitespace-nowrap rounded-lg hover:bg-white/20 text-slate-700 hover:text-slate-900 transition-all duration-200 cursor-pointer backdrop-blur-sm border border-transparent hover:border-white/30"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};