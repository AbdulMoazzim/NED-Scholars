"use client";

import { useState } from "react";
import { GetAllTransparencyFiles, DeleteTransparencyFiles } from "@/app/actions/transparency";
import { FileText, Download, Calendar, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useSession } from "@/lib/auth-client";

const getFileName = (url: string) => {
  const parts = url.split('/');
  return decodeURIComponent(parts[parts.length - 1]);
};

const transparencyImages = [
  { src: "/images/About/transparency1.jpeg", alt: "transparency transaction award" },
  { src: "/images/About/transparency2.jpeg", alt: "transparency transaction award" },
  { src: "/images/About/transparency3.jpeg", alt: "transparency transaction award" },
  { src: "/images/About/transparency4.jpeg", alt: "transparency transaction award" },
];

type TransparencyData = Awaited<ReturnType<typeof GetAllTransparencyFiles>>["data"];

export default function TransparencyPage({
  initialData,
}: {
  initialData: NonNullable<TransparencyData>;
}) {
  const { data: session } = useSession();
  const isAdmin = session?.user.role === "admin";

  const [data, setData] = useState(initialData);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this transparency record?")) return;

    setDeletingId(id);
    const result = await DeleteTransparencyFiles(id);

    if (result.success) {
      setData((prev) => prev.filter((item) => item.id !== id));
    } else {
      alert("Failed to delete. Please try again.");
    }

    setDeletingId(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
              TRANSPARENCY
            </Badge>
            <h1 className="text-3xl md:text-6xl font-bold mb-6">Financial Transparency</h1>
            <p className="text-lg md:text-2xl text-white/90 mb-4">
              Committed to accountability and open communication with our community
            </p>
            <div className="flex items-center justify-center gap-4 text-sm md:text-lg">
              <FileText className="w-6 h-6" />
              <span>Annual Financial Reports</span>
              <span className="opacity-50">•</span>
              <span>Complete Accountability</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-slate-50 to-[#82B4CC]/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-[95%] md:w-[90%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 mb-12 items-start">
            {/* Content Section */}
            <div className="flex-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#82B4CC]/30 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About Our Financial Reports
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  In our commitment to transparency and accountability, we make our financial
                  statements available to the public. Below you will find our annual financial
                  reports including balance sheets, profit and loss statements, and IRS filings.
                </p>
                <p className="text-sm text-gray-500">Note: All figures are in US Dollars.</p>
              </div>

              {/* Financial Reports */}
              <div className="mt-6">
                {data.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-[#82B4CC]/30">
                    <FileText className="mx-auto h-12 w-12 text-[#68B9C4]" />
                    <p className="mt-4 text-gray-600">
                      No transparency reports available at this time.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {data.map((yearData) => (
                      <div
                        key={yearData.id}
                        className="border border-[#82B4CC]/30 rounded-lg shadow-sm hover:shadow-md hover:border-[#1164A3] transition-all bg-white"
                      >
                        {/* Year Header */}
                        <div className="border-b border-[#82B4CC]/30 bg-gradient-to-r from-[#82B4CC]/10 to-[#B0A3B3]/10 px-6 py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-[#1164A3]" />
                              <h2 className="text-2xl font-semibold text-gray-900">
                                {yearData.year}
                              </h2>
                            </div>

                            {/* Admin Delete Button for the entire year record */}
                            {isAdmin && (
                              <button
                                onClick={() => handleDelete(yearData.id)}
                                disabled={deletingId === yearData.id}
                                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-red-500 hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed rounded-md transition-colors"
                                title="Delete this year's records"
                              >
                                <Trash2 className="h-4 w-4" />
                                {deletingId === yearData.id ? "Deleting..." : "Delete"}
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Files List */}
                        <div className="p-6">
                          {yearData.files.length === 0 ? (
                            <p className="text-gray-500 text-sm">
                              No documents available for this year.
                            </p>
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
                                        Uploaded:{" "}
                                        {new Date(file.createdAt).toLocaleDateString()}
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
              </div>
            </div>

            {/* Image Gallery Sidebar */}
            <div className="w-full lg:w-72 xl:w-80 flex flex-col gap-3 flex-shrink-0">
              {transparencyImages.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full overflow-hidden rounded-xl group"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    width={800}
                    height={600}
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1164A3]/0 to-[#68B9C4]/0" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Information */}
          <div className="mt-12 p-6 border border-[#82B4CC]/30 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What Our Reports Include
            </h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>
                Our financial statements are prepared in accordance with generally accepted
                accounting principles (GAAP) and reviewed by independent auditors.
              </p>
              <p>Each year&apos;s reports typically include:</p>
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
    </div>
  );
}