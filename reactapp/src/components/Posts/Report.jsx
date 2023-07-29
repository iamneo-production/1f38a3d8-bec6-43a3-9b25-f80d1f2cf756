import React, { useState } from 'react';
import axios from 'axios';

const ReportButton = ({ contentId, contentType, setShowReportModal }) => {
  const [reportReason, setReportReason] = useState('');
  const [isReporting, setIsReporting] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);
  const [reportError, setReportError] = useState('');

  const handleReportSubmit = async () => {
    setIsReporting(true);
    try {
      const response = await axios.post('/api/report', {
        contentId: contentId,
        contentType: contentType,
        reason: reportReason
      });
      setReportSuccess(true);
    } catch (error) {
      setReportError('An error occurred while reporting the content.');
    }
    setIsReporting(false);
    setShowReportModal(false); 
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Report Content</h3>
            <div className="mt-3 sm:mt-4">
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for report:</label>
              <div className="mt-1">
                <input type="text" name="reason" id="reason" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-lg p-2" value={reportReason} onChange={(e) => setReportReason(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" disabled={isReporting} onClick={handleReportSubmit}>
              {isReporting ? 'Reporting...' : 'Submit Report'}
            </button>
            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-full sm:text-sm" onClick={() => setShowReportModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportButton;
