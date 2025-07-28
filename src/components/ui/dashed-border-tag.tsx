import React from 'react'
type DashedBorderTagTS={
    icon?:React.ReactNode;
    tag:string;
};
const DashedBorderTag: React.FC<DashedBorderTagTS>=({icon,tag})=>(
    <div className="relative inline-block mb-4">
    <div className="absolute top-0 left-0 size-[3px] bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute top-0 right-0 size-[3px] bg-blue-400 rounded-full translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 size-[3px] bg-blue-400 rounded-full -translate-x-1/2 translate-y-1/2" />
    <div className="absolute bottom-0 right-0 size-[3px] bg-blue-400 rounded-full translate-x-1/2 translate-y-1/2" />

    <div className="inline-flex items-center gap-1 border border-dashed border-blue-200 bg-transparent px-[4px] py-0.5 text-blue-500 text-[14px] font-medium whitespace-nowrap">
      {icon && <span className="inline-block w-5 h-5">{icon}</span>}
      <span>{tag}</span>
    </div>
  </div>
)
export default DashedBorderTag;