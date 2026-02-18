import { useState } from "react";

const AddNoteSection = ({ addNote, searchTerm, setSearchTerm }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const handleAdd = async (e) => {
    e.preventDefault(); // prevent page refresh

    if (!title.trim() || !content.trim()) return;

    try {
      await addNote(title, content);

      setTitle("");
      setContent("");
      setIsAdding(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleCancel = () => {
    setIsAdding(false);
    setTitle("");
    setContent("");
  };
  return (
    <>
      {/* Add + Search */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="bg-gray-100 px-4 py-2 rounded-md shadow-sm"
        >
          {isAdding ? "Pause" : "Add Note"}
        </button>

        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border rounded-md px-3 py-2"
        />
      </div>
      {/* Add Note Modal */}
      {isAdding && (
        <form onSubmit={handleAdd}>
          <div className="bg-gray-100 p-4 rounded-lg mb-6 shadow-sm transition-all duration-200">
            <input
              required
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
            />
            <textarea
              required
              placeholder="Write your note..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
              rows={3}
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-1 rounded-md bg-gray-300"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-1 rounded-md bg-blue-500 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default AddNoteSection;
