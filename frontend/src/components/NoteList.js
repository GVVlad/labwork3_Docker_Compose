import React from "react";

function NoteList({ notes, onDeleteNote }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {notes.map((note) => (
                <tr key={note.id}>
                    <td>{note.title}</td>
                    <td>{note.content}</td>
                    <td>
                        <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default NoteList;
