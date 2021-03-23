import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some Awesome Title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happend Today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img 
                        src="https://static.toiimg.com/photo/72975551.cms"
                        alt="imagen xD"
                    />
                </div>

            </div>
        </div>
    )
}
