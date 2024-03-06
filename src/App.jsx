// Application to do CRUD operations using React with the help of Axios
// JSON data for one book is as follows:
//  {"id":2, "title":"Fire", "author":"Bet"}
// The id is auto-increment in the server https://node56983-chirawat-noderest.proen.app.ruk-com.cloud/
// The server is running at 

import BookList from './assets/BookList';

export default function App() {
  return (
    <div>
      <h1>CRUD Operations</h1>
      <BookList />
    </div>
  );
}