import { Resource, YouTubeUrl } from "@/lib/types";

// Preview Component
export const PreviewContent = ({ formData, images, videos, youtubeUrls, config }: {
  formData: Record<string, any>;
  images: Resource[];
  videos: Resource[];
  youtubeUrls: YouTubeUrl[];
  config: any;
}) => {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : '';
  };

  const createImageUrl = (file: File) => {
    return URL.createObjectURL(file);
  };

  const createVideoUrl = (file: File) => {
    return URL.createObjectURL(file);
  };


  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
      {/* Header Section */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-4xl font-bold text-teal-500 mb-6">
          {formData.name || 'First Post!'}
        </h1>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Disclaimer Box (if applicable) */}

          {/* Content with integrated media */}
          <div className="prose prose-lg max-w-none space-y-6 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mb-4 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h2]:mb-3 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-gray-800 [&_h3]:mb-2 [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-4">
            {/* Bio Content */}
            {formData.bio && (
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formData.bio }}
              />
            )}

            {/* Insert first image after first paragraph */}
            {images.length > 0 && (
              <div className="my-8">
                <img
                  src={createImageUrl(images[0].file)}
                  alt={images[0].name}
                  className="w-full max-w-md mx-auto rounded-lg shadow-md"
                />
              </div>
            )}

            {/* Additional content fields */}
            {config.fields
              .filter((field: any) => field.name !== 'bio' && field.name !== 'name')
              .map((field: any, index: number) => (
                <div key={field.name} className="my-6">
                  {field.type === 'textarea' && formData[field.name] ? (
                    <div 
                      className="text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formData[field.name] }}
                    />
                  ) : formData[field.name] ? (
                    <p className="text-gray-700 leading-relaxed">
                      <strong>{field.label}:</strong> {formData[field.name]}
                    </p>
                  ) : null}

                  {/* Insert additional images/videos between content */}
                  {index === 1 && images.length > 1 && (
                    <div className="my-8">
                      <img
                        src={createImageUrl(images[1].file)}
                        alt={images[1].name}
                        className="w-full max-w-lg rounded-lg shadow-md"
                      />
                    </div>
                  )}
                </div>
              ))}

            {/* Videos Section */}
            {videos.length > 0 && (
              <div className="my-8">
                {videos.map((video, index) => (
                  <div key={video.id} className="mb-6">
                    <video
                      controls
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                      src={createVideoUrl(video.file)}
                    />
                    <p className="text-sm text-gray-500 text-center mt-2">{video.name}</p>
                  </div>
                ))}
              </div>
            )}

            {/* YouTube Videos */}
            {youtubeUrls.some(url => url.url) && (
              <div className="my-8">
                {youtubeUrls.filter(youtube => youtube.url).map((youtube, index) => (
                  <div key={index} className="mb-6">
                    {youtube.title && (
                      <h3 className="text-xl font-semibold mb-3">{youtube.title}</h3>
                    )}
                    <div className="relative aspect-video max-w-2xl mx-auto">
                      <iframe
                        src={getYouTubeEmbedUrl(youtube.url)}
                        className="w-full h-full rounded-lg shadow-md"
                        frameBorder="0"
                        allowFullScreen
                        title={youtube.title || `YouTube Video ${index + 1}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 overflow-hidden">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Hello!</h3>
            
            {/* Profile Image */}
            {images.length > 2 && (
              <div className="mb-4">
                <img
                  src={createImageUrl(images[2].file)}
                  alt="Profile"
                  className="w-full rounded-lg shadow-sm"
                />
              </div>
            )}

            <div className="text-sm text-gray-600 leading-relaxed space-y-3">
              <p>
                I'm {formData.name || 'Author'}. Join me on my journey to balance finances 
                with living a great life now and preparing for the future.
              </p>

              {formData.email && (
                <p>
                  <strong>Contact:</strong> {formData.email}
                </p>
              )}

              {formData.phone && (
                <p>
                  <strong>Phone:</strong> {formData.phone}
                </p>
              )}
            </div>

            {/* Additional sidebar content */}
            {images.length > 3 && (
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Check out the Love Your Budget Course (Now Enrolling)
                </h4>
                <img
                  src={createImageUrl(images[3].file)}
                  alt="Course"
                  className="w-full rounded-lg shadow-sm"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};