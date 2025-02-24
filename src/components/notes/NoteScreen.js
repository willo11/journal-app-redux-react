import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleting } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);

  const { body, title,id } = formValues;

  //useRef apunta a la variable para que no renderice todo el componente
  const activeId = useRef(note.id);

  //useEffect renderiza dependiendo de las dependencias
  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, {...formValues}));
  }, [formValues,dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  }

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some Awesome Title"
          className="notes__title-input"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="What happend Today"
          className="notes__textarea"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className="notes__image">
            <img
              src={note.url}
              alt="imagen xD"
            />
          </div>
        )}
      </div>

      <button className="btn btn-danger" onClick={handleDelete}>
          Delete
      </button>
    </div>
  );
};
