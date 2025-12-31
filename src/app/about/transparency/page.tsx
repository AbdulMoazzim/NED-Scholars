import { GetAllTransparencyFiles } from "@/app/actions/transparency";
import { Transparency } from "@/lib/form-types";
import { FileText, Download, Calendar } from "lucide-react";

interface Resource {
  id: string;
  url: string;
  public_id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface TransparencyData {
  id: string;
  year: string;
  createdAt: Date;
  updatedAt: Date;
  files: Resource[];
}

const getFileName = (url: string) => {
  const parts = url.split('/');
  return decodeURIComponent(parts[parts.length - 1]);
};

export default async function TransparencyPage() {
  const result = await GetAllTransparencyFiles();
  
  if (result.success && result.data) {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[#82B4CC]/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Financial Transparency
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In our commitment to transparency and accountability, we make our financial 
            statements available to the public. Below you will find our annual financial 
            reports including balance sheets, profit and loss statements, and IRS filings.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Note: All figures are in US Dollars.
          </p>
        </div>

        {/* Content Section */}
        {result.data.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-[#82B4CC]/30">
            <FileText className="mx-auto h-12 w-12 text-[#68B9C4]" />
            <p className="mt-4 text-gray-600">No transparency reports available at this time.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {result.data.map((yearData) => (
              <div
                key={yearData.id}
                className="border border-[#82B4CC]/30 rounded-lg shadow-sm hover:shadow-md hover:border-[#1164A3] transition-all bg-white"
              >
                {/* Year Header */}
                <div className="border-b border-[#82B4CC]/30 bg-gradient-to-r from-[#82B4CC]/10 to-[#B0A3B3]/10 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#1164A3]" />
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {yearData.year}
                    </h2>
                  </div>
                </div>

                {/* Files List */}
                <div className="p-6">
                  {yearData.files.length === 0 ? (
                    <p className="text-gray-500 text-sm">No documents available for this year.</p>
                  ) : (
                    <ul className="space-y-3">
                      {yearData.files.map((file) => (
                        <li
                          key={file.id}
                          className="flex items-start justify-between gap-4 p-4 rounded-md border border-[#82B4CC]/20 hover:border-[#1164A3] hover:bg-[#82B4CC]/5 transition-colors"
                        >
                          <div className="flex items-start gap-3 flex-1 min-w-0">
                            <FileText className="h-5 w-5 text-[#68B9C4] mt-0.5 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 break-words">
                                {getFileName(file.url)}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                Uploaded: {new Date(file.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <a
                            href={file.url}
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-md hover:from-[#68B9C4] hover:to-[#82B4CC] transition-all flex-shrink-0"
                          >
                            <Download className="h-4 w-4" />
                            View
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Information */}
        <div className="mt-12 p-6 border border-[#82B4CC]/30 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            About Our Financial Reports
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              Our financial statements are prepared in accordance with generally accepted 
              accounting principles (GAAP) and reviewed by independent auditors.
            </p>
            <p>
              Each year&apos;s reports typically include:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Balance Sheet / Statement of Financial Position</li>
              <li>Profit and Loss / Statement of Financial Income and Expenses</li>
              <li>IRS Form 990 or 990-N (e-Postcard) filings where applicable</li>
            </ul>
            <p className="mt-4">
              For questions about our financial reports or to request additional information, 
              please contact our finance department.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
}