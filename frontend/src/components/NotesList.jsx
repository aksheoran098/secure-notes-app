import { Trash2 } from "lucide-react";

const NotesList = ({ notes, filteredNotes, loading, deleteNote }) => {
  return (
    <>
      <div className="space-y-4">
        {loading ? (
          <p className="text-center mt-6">Loading notes...</p>
        ) : notes.length === 0 ? (
          <p className="text-center mt-6 text-gray-500">
            No notes yet. Add your first note!
          </p>
        ) : (
          <div className="grid grid-cols-1  gap-4 mt-6">
            {filteredNotes.map((note) => (
              <div
                key={note._id}
                className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center"
              >
                <div>
                  <h2 className="font-semibold">{note.title}</h2>
                  <p className="text-gray-600 text-sm overflow-hidden">
                    {note.content}
                  </p>
                </div>

                <Trash2
                  onClick={() => deleteNote(note._id)}
                  className="text-gray-500 cursor-pointer transition-colors duration-200 hover:text-red-500"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NotesList;
