import { useMemo, useState, useEffect, useCallback } from "react";
import { NotesContext, AuthContext } from "./Context";
import API from "../services/api";
import { useContext } from "react";
import { encryptData, decryptData } from "../utils/encryption";

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);

  const normalizeNotes = (notesArray) => {
    if (!Array.isArray(notesArray)) return [];

    return notesArray.map((note) => ({
      ...note,
      title: decryptData(note.title),
      content: decryptData(note.content),
    }));
  };

  const addNote = useCallback(async (title, content) => {
    try {
      const { data } = await API.post("/notes", {
        title: encryptData(title),
        content: encryptData(content),
      });
      setNotes((prevNotes) => [...normalizeNotes([data]), ...prevNotes]);
    } catch (error) {
      console.error("Failed to add note : ", error);
    }
  }, []);

  const fetchNotes = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/notes");
      setNotes(normalizeNotes(data));
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteNote = useCallback(
    async (id) => {
      setNotes((prev) => prev.filter((note) => note._id !== id));

      try {
        await API.delete(`/notes/${id}`);
      } catch (error) {
        console.error("Failed to delete note:", error);
        fetchNotes(); // rollback safely
      }
    },
    [fetchNotes],
  );
  useEffect(() => {
    if (!token) {
      setNotes([]); // Clear notes on logout
      return;
    }

    fetchNotes();
  }, [token, fetchNotes]);

  const value = useMemo(() => {
    return {
      addNote,
      deleteNote,
      notes,
      loading,
    };
  }, [notes, loading, addNote, deleteNote]);

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
