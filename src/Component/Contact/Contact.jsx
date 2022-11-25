import "./contact.css"

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactBox">
        <div className="contactInput">
          <form className="inputArea">
          <div className="inputGrup">
         <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
         </div>
         <div className="inputGrup">
         <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
         </div>
         <div className="inputGrup">
         <label htmlFor="message">Text</label>
          <textarea name="message" id="message"  rows="5"></textarea>
         </div>
            <div className="btngrup">
            <button className="get-btn ">
              send
            </button>
            </div>
        </form>
          
        </div>
        <div className="contactText">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat delectus voluptatibus libero beatae voluptatem reiciendis sint alias, officiis commodi sunt expedita, deserunt, nulla voluptate exercitationem ut saepe inventore pariatur tenetur necessitatibus debitis ex quas repellendus! Possimus, aliquam, maiores, minima optio debitis voluptatum nihil sit consequatur voluptatem ea consequuntur? Excepturi, sapiente.</p>
        </div>
      </div>
    </div>
  )
}

export default Contact