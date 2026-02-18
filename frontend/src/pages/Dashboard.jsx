import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext, useMemo } from "react";
import { NotesContext, AuthContext } from "../context/Context";
import AddNoteSection from "../components/AddNoteSection";
import DashboardHeader from "../components/DashboardHeader";
import NotesList from "../components/NotesList";

function Dashboard() {
  const { notes, loading, addNote, deleteNote } = useContext(NotesContext);
  const { logout } = useContext(AuthContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const navigate = useNavigate();

  const filteredNotes = useMemo(() => {
    const lowerSearch = debouncedSearch.trim().toLowerCase();

    if (!lowerSearch) return notes;

    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(lowerSearch) ||
        note.content.toLowerCase().includes(lowerSearch),
    );
  }, [notes, debouncedSearch]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Top Header */}

      <DashboardHeader onLogout={handleLogout} />

      {/* Content */}
      <div className="max-w-5xl mx-auto mt-6 bg-white p-6 rounded-xl shadow-md">
        <AddNoteSection
          addNote={addNote}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <NotesList
          notes={notes}
          filteredNotes={filteredNotes}
          loading={loading}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default Dashboard;
