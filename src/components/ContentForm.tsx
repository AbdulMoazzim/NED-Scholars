import { ContentFormProps, Resource, YouTubeUrl } from "@/lib/types";
import { Eye, ImageIcon, Save, Trash2, Video, Youtube, Bold, Italic, List, ListOrdered, Heading1, Heading2, Heading3, Underline, Strikethrough } from "lucide-react";
import { useRef, useState } from "react";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {Underline as TiptapUnderline} from '@tiptap/extension-underline';
import { Level } from '@tiptap/extension-heading';
import { PreviewContent } from "./PreviewMode";

// Tiptap Editor Component
const TiptapEditor = ({ 
  value, 
  onChange, 
  placeholder
}: { 
  value: string; 
  onChange: (value: string) => void; 
  placeholder: string;
  required?: boolean;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      TiptapUnderline,
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[120px] p-4 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-ul:list-disc prose-ol:list-decimal prose-li:my-1',
      },
    },
  });

  const setHeading = (level: Level) => {
    if (editor?.isActive('heading', { level })) {
      editor.chain().focus().setParagraph().run();
    } else {
      editor?.chain().focus().toggleHeading({ level }).run();
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all duration-300">
      {/* Add custom styles for editor content */}
      <style jsx>{`
        .ProseMirror h1 {
          font-size: 1.875rem;
          font-weight: bold;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .ProseMirror h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .ProseMirror h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }
        .ProseMirror ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .ProseMirror ol {
          list-style-type: decimal;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .ProseMirror li {
          margin-bottom: 0.25rem;
        }
        .ProseMirror u {
          text-decoration: underline;
        }
        .ProseMirror strong {
          font-weight: bold;
        }
        .ProseMirror em {
          font-style: italic;
        }
        .ProseMirror s {
          text-decoration: line-through;
        }
        .ProseMirror p {
          margin-bottom: 0.75rem;
        }
      `}</style>
      {/* Toolbar */}
      <div className="border-b border-gray-200 p-3 flex flex-wrap gap-1 bg-gray-50 rounded-t-xl">
        {/* Heading Buttons */}
        <div className="flex gap-1 mr-2 border-r border-gray-300 pr-2">
          <button
            type="button"
            onClick={() => setHeading(1)}
            className={`p-2 rounded-md transition-colors ${
              editor.isActive('heading', { level: 1 })
                ? 'bg-indigo-100 text-indigo-600'
                : 'hover:bg-gray-200 text-gray-600'
            }`}
            title="Heading 1"
          >
            <Heading1 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setHeading(2)}
            className={`p-2 rounded-md transition-colors ${
              editor.isActive('heading', { level: 2 })
                ? 'bg-indigo-100 text-indigo-600'
                : 'hover:bg-gray-200 text-gray-600'
            }`}
            title="Heading 2"
          >
            <Heading2 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setHeading(3)}
            className={`p-2 rounded-md transition-colors ${
              editor.isActive('heading', { level: 3 })
                ? 'bg-indigo-100 text-indigo-600'
                : 'hover:bg-gray-200 text-gray-600'
            }`}
            title="Heading 3"
          >
            <Heading3 className="w-4 h-4" />
          </button>
        </div>

        {/* Text Formatting */}
        <div className="flex gap-1 mr-2 border-r border-gray-300 pr-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded-md transition-colors ${
              editor.isActive('bold')
                ? 'bg-indigo-100 text-indigo-600'
                : 'hover:bg-gray-200 text-gray-600'
            }`}
            title="Bold"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded-md transition-colors ${
              editor.isActive('italic')
                ? 'bg-indigo-100 text-indigo-600'
                : 'hover:bg-gray-200 text-gray-600'
            }`}
            title="Italic"
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-2 rounded-md transition-colors ${
              editor.isActive('underline')
                ? 'bg-indigo-100 text-indigo-600'
                : 'hover:bg-gray-200 text-gray-600'
            }`}
            title="Underline"
          >
            <Underline className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`p-2 rounded-md transition-colors ${
              editor.isActive('strike')
                ? 'bg-indigo-100 text-indigo-600'
                : 'hover:bg-gray-200 text-gray-600'
            }`}
            title="Strikethrough"
          >
            <Strikethrough className="w-4 h-4" />
          </button>
        </div>

        {/* Lists */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded-md transition-colors ${
              editor.isActive('bulletList')
                ? 'bg-indigo-100 text-indigo-600'
                : 'hover:bg-gray-200 text-gray-600'
            }`}
            title="Bullet List"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded-md transition-colors ${
              editor.isActive('orderedList')
                ? 'bg-indigo-100 text-indigo-600'
                : 'hover:bg-gray-200 text-gray-600'
            }`}
            title="Numbered List"
          >
            <ListOrdered className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editor Content */}
      <div className="min-h-[120px] relative">
        <EditorContent 
          editor={editor} 
          className="focus:outline-none [&_.ProseMirror]:focus:outline-none [&_.ProseMirror_h1]:text-3xl [&_.ProseMirror_h1]:font-bold [&_.ProseMirror_h1]:mb-4 [&_.ProseMirror_h2]:text-2xl [&_.ProseMirror_h2]:font-bold [&_.ProseMirror_h2]:mb-3 [&_.ProseMirror_h3]:text-xl [&_.ProseMirror_h3]:font-bold [&_.ProseMirror_h3]:mb-2 [&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ul]:ml-6 [&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ol]:ml-6 [&_.ProseMirror_li]:mb-1 [&_.ProseMirror_u]:underline [&_.ProseMirror_strong]:font-bold [&_.ProseMirror_em]:italic [&_.ProseMirror_s]:line-through"
        />
        {(!value || value === '<p></p>') && (
          <div className="absolute top-4 left-4 text-gray-400 pointer-events-none">
            {placeholder}
          </div>
        )}
      </div>
    </div>
  );
};

export const ContentForm = ({ config, previewMode, setPreviewMode }: ContentFormProps) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [images, setImages] = useState<Resource[]>([]);
  const [videos, setVideos] = useState<Resource[]>([]);
  const [youtubeUrls, setYoutubeUrls] = useState<YouTubeUrl[]>([{ url: '', title: '' }]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImages(prev => [...prev, {
          id: (Date.now() + Math.random()).toString(),
          file,
          name: file.name
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    files.forEach(file => {
      setVideos(prev => [...prev, {
        id: (Date.now() + Math.random()).toString(),
        file,
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
      }]);
    });
  };

  const addYoutubeUrl = () => {
    setYoutubeUrls(prev => [...prev, { url: '', title: '' }]);
  };

  const updateYoutubeUrl = (index: number, field: keyof YouTubeUrl, value: string) => {
    setYoutubeUrls(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const removeYoutubeUrl = (index: number) => {
    setYoutubeUrls(prev => prev.filter((_, i) => i !== index));
  };

  const removeImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const removeVideo = (id: string) => {
    setVideos(prev => prev.filter(video => video.id !== id));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', { formData, images, videos, youtubeUrls });
    alert('Content saved successfully!');
  };

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{config.title}</h2>
            <p className="text-gray-600">Create and manage your content with ease</p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className="flex items-center space-x-2 px-6 py-3 bg-indigo-100 text-indigo-600 rounded-xl hover:bg-indigo-200 transition-all duration-300"
            >
              <Eye className="w-5 h-5" />
              <span>{previewMode ? 'Edit' : 'Preview'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                console.log('Form Data:', { formData, images, videos, youtubeUrls });
                alert('Content saved successfully!');
              }}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Save className="w-5 h-5" />
              <span>Save Content</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {!previewMode ? (
          <>
            {/* Form Section */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Content Details</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {config.fields.map((field) => (
                    <div key={field.name} className={field.type === 'textarea' ? 'lg:col-span-2' : ''}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      
                      {field.type === 'textarea' ? (
                        <div className="relative">
                          <TiptapEditor
                            value={formData[field.name] || ''}
                            onChange={(value) => handleInputChange(field.name, value)}
                            placeholder={`Enter ${field.label.toLowerCase()}`}
                            required={field.required}
                          />
                        </div>
                      ) : field.type === 'select' ? (
                        <select
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                          value={formData[field.name as keyof typeof formData] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          required={field.required}
                        >
                          <option value="">Select {field.label}</option>
                          {field.options?.map((option: string) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                          placeholder={`Enter ${field.label.toLowerCase()}`}
                          value={formData[field.name as keyof typeof formData] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          required={field.required}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* YouTube URLs Section */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-800">YouTube Videos</h4>
                    <button
                      type="button"
                      onClick={addYoutubeUrl}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-300"
                    >
                      <Youtube className="w-4 h-4" />
                      <span>Add YouTube URL</span>
                    </button>
                  </div>
                  
                  {youtubeUrls.map((youtube, index) => (
                    <div key={index} className="flex gap-4 mb-4">
                      <input
                        type="url"
                        placeholder="YouTube URL"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                        value={youtube.url}
                        onChange={(e) => updateYoutubeUrl(index, 'url', e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Video Title"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                        value={youtube.title}
                        onChange={(e) => updateYoutubeUrl(index, 'title', e.target.value)}
                      />
                      {youtubeUrls.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeYoutubeUrl(index)}
                          className="px-3 py-3 text-red-500 hover:bg-red-100 rounded-xl transition-all duration-300"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Media Upload Section */}
            <div className="space-y-6">
              {/* Image Upload */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">Images</h4>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-all duration-300"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>Upload</span>
                  </button>
                </div>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {images.map((image) => (
                    <div key={image.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 truncate">{image.name}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImage(image.id)}
                        className="text-red-500 hover:bg-red-100 p-1 rounded transition-all duration-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {images.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No images uploaded</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Video Upload */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">Videos</h4>
                  <button
                    type="button"
                    onClick={() => videoInputRef.current?.click()}
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-all duration-300"
                  >
                    <Video className="w-4 h-4" />
                    <span>Upload</span>
                  </button>
                </div>
                
                <input
                  ref={videoInputRef}
                  type="file"
                  multiple
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="hidden"
                />
                
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {videos.map((video) => (
                    <div key={video.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Video className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 truncate">{video.name}</p>
                        <p className="text-xs text-gray-500">{video.size}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeVideo(video.id)}
                        className="text-red-500 hover:bg-red-100 p-1 rounded transition-all duration-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {videos.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <Video className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No videos uploaded</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Preview Mode */
          <div className="xl:col-span-3">
            <PreviewContent 
              formData={formData}
              images={images}
              videos={videos}
              youtubeUrls={youtubeUrls}
              config={config}
            />
          </div>
        )}
      </div>
    </div>
  );
};