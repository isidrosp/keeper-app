import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Input from "./Input";

function App() {
    const [notes, setNotes] = React.useState([]);
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    function handleTitleChange(event) {
        console.log(event.target.value);
        setTitle(event.target.value);
    }
    function handleContentChange(event) {
        console.log(event.target.value);
        setContent(event.target.value);
    }
    function handleSubmit() {
        setNotes((prevNotes) => {
            return [...prevNotes, {title, content}]
        })
        setTitle("");
        setContent("");
    }
    function handleDelete(id) {
        setNotes((prevNotes) =>{
            return prevNotes.filter((note, index) =>{
                return index !== id;
            })
        })
    } 
    return (
        <div>
            <Header />
            <Input 
                onTitleMod={handleTitleChange}
                onContentMod={handleContentChange}
                onSubmit={handleSubmit}
                titleValue={title}
                contentValue={content}
            />
            {notes.map((note, index) => {
                return <Note 
                key={index}
                id={index}
                nTitle={note.title}
                nContent={note.content}
                onDelete={handleDelete}
                />
            })}
            <Footer />
        </div>
    );
}

export default App;