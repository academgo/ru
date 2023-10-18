'use client';
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Tickitem = ({ children }) => {
  return (
    <div className="flex gap-3 mb-6">
      <div className="text-xl text-[#ffa800] flex justify-center items-center">
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
      <div>{children}</div>
    </div>
  )
}
