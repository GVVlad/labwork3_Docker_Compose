package com.example.noteapp.controller;

import com.example.noteapp.entity.Note;
import com.example.noteapp.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:3000")
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    @PostMapping
    public List<Note> addNote(@RequestBody Note note) {
        noteRepository.save(note);
        return noteRepository.findAll();
    }

    @GetMapping
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public List<Note> deleteNote(@PathVariable Long id) {
        noteRepository.deleteById(id);
        return noteRepository.findAll();
    }
}
