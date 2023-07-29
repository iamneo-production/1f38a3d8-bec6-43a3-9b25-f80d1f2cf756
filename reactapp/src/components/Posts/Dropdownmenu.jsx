import React, { useState } from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import ReportButton from './Report';
import BlockButton from './Block';

const DropdownMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleReportClick = () => {
    setShowReportModal(true);
    setShowMenu(false);
  };

  const handleBlockClick = () => {
    setShowBlockModal(true);
    setShowMenu(false);
  };

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={handleMenuToggle}>
        <BiDotsHorizontalRounded size={30} />
      </div>
      {showMenu && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
          <button className="w-full text-left py-2 px-4 hover:bg-gray-100" onClick={handleReportClick}>
            Report
          </button>
          <button className="w-full text-left py-2 px-4 hover:bg-gray-100" onClick={handleBlockClick}>
            Block
          </button>
        </div>
      )}
      {showReportModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <ReportButton  setShowReportModal={setShowReportModal} />
        </div>
      )}
      {showBlockModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <BlockButton  setShowBlockModal={setShowBlockModal} />
        </div>
      )}
    </div>
  );
};
export default DropdownMenu;