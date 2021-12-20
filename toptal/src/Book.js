export const Book = (props) => {
    const {img, title,author} = props;
    const clickHandler = (e) => {
      console.log(e.target)
      alert(e.target.innerHTML)
    }
      return (
        <article className="book">
          <img src={img} alt=''/>
          <h1>{title}</h1>
          <h4>{author}</h4>
          <button type='button' onClick ={clickHandler}>{author}</button>
        </article>
      )
  }  