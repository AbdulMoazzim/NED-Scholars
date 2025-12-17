// Tiptap Editor Component
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {Underline as TiptapUnderline} from '@tiptap/extension-underline';
import { Level } from '@tiptap/extension-heading';
import { Bold, Heading1, Heading2, Heading3, Italic, List, ListOrdered, Strikethrough, Underline } from 'lucide-react';


export const TiptapEditor = ({ 
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