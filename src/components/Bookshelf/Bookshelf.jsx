import { useState } from 'react';

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>

        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Title"
            value={newBook.title}
            onChange={handleInputChange}
          />

          <input
            name="author"
            placeholder="Author"
            value={newBook.author}
            onChange={handleInputChange}
          />

          <button>Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((b, i) => (
          <div key={i}>
            <h4>{b.title}</h4>
            <p>{b.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
