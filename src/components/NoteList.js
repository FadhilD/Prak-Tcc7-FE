import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../auth/useAuth"; // ⬅️ untuk logout

const NoteList = () => {
    const [notes, setNotes] = useState([]);
    const { logout } = useAuth(); // ⬅️ ambil logout dari context
    const navigate = useNavigate();

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        try {
            const res = await axiosInstance.get('/notes');
            console.log("Catatan dari backend:", res.data);
            setNotes(res.data);
        } catch (error) {
            console.error("Gagal ambil catatan:", error);
        }
    };

    const deleteNote = async (id) => {
        try {
            await axiosInstance.delete(`/notes/${id}`);
            getNotes();
        } catch (error) {
            console.error("Gagal hapus catatan:", error);
        }
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="container mt-5">
            <div className="columns is-mobile is-vcentered mb-5">
                <div className="column">
                    <h1 className="title">Catatan Semester 6</h1>
                </div>
                <div className="column is-flex is-justify-content-flex-end is-align-items-center">
                    <Link   Link to="/add" className="button is-primary mr-2">Add New</Link>
                     <button onClick={handleLogout} className="button is-black ml-2">Logout</button>
                </div>

            </div>
            
            <div className="columns is-multiline">
                {notes.map((note) => (
                    <div key={note.id} className="column is-one-third">
                        <div className="box has-background-white-bis has-shadow">
                            <div className="is-flex is-justify-content-space-between is-align-items-center border-bottom pb-3 mb-3">
                                <h2 className="subtitle has-text-weight-semibold">{note.judul}</h2>
                                <span className="has-text-grey">
                                    Deadline: {note.deadline ? new Date(note.deadline).toLocaleDateString() : "-"}
                                </span>
                            </div>

                            <p className="has-text-grey-dark mb-3">{note.isi}</p>

                            <div className="is-flex is-justify-content-space-between is-align-items-center border-top pt-3 has-text-grey">
                                <span>{note.matakuliah}</span>
                                <span>{note.createdAt ? new Date(note.createdAt).toLocaleDateString() : "Tidak diketahui"}</span>
                            </div>

                            <div className="is-flex is-justify-content-flex-end border-top pt-3 mt-3">
                                <Link to={`/edit/${note.id}`} className="button is-small is-info mr-2">Edit</Link>
                                <button onClick={() => deleteNote(note.id)} className="button is-small is-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoteList;
